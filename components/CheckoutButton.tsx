"use client";

import { useState } from "react";
import type { ProductKey } from "@/lib/products";

type CheckoutButtonProps = {
  productKey: ProductKey;
  children: React.ReactNode;
  className?: string;
  variant?: "primary" | "ghost";
};

export function CheckoutButton({
  productKey,
  children,
  className = "",
  variant = "primary",
}: CheckoutButtonProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const baseClass = variant === "primary" ? "hard-button" : "ghost-button";

  async function startCheckout() {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch("/api/checkout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ product: productKey }),
      });
      const data = (await response.json().catch(() => ({}))) as {
        url?: string;
        error?: string;
      };

      if (!response.ok || !data.url) {
        throw new Error(data.error || "Checkout is not ready yet.");
      }

      window.location.assign(data.url);
    } catch (checkoutError) {
      setError(
        checkoutError instanceof Error
          ? checkoutError.message
          : "Something went wrong opening checkout.",
      );
      setIsLoading(false);
    }
  }

  return (
    <div className="space-y-2">
      <button
        type="button"
        className={`${baseClass} ${className}`}
        onClick={startCheckout}
        disabled={isLoading}
      >
        {isLoading ? "Opening checkout..." : children}
      </button>
      {error ? (
        <p className="max-w-sm text-sm font-medium leading-snug text-green-baby">
          {error}
        </p>
      ) : null}
    </div>
  );
}
