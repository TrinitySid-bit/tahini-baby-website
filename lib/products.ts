export const products = {
  single: {
    key: "single",
    sku: "TB-SINGLE-350G",
    name: "Tahini Baby Single Bottle",
    shortName: "Single Bottle",
    size: "1 x 350g",
    price: "$9.99",
    bottleCount: 1,
    stripePriceEnv: "STRIPE_PRICE_SINGLE",
    description: "One bottle. Many excuses to squeeze.",
  },
  carton: {
    key: "carton",
    sku: "TB-CARTON-6X350G",
    name: "Tahini Baby 6-Pack Carton",
    shortName: "6-Pack Carton",
    size: "6 x 350g",
    price: "$49.99",
    bottleCount: 6,
    stripePriceEnv: "STRIPE_PRICE_CARTON",
    description: "Six bottles. Your pantry's new personality.",
    badge: "Best squeeze",
  },
} as const;

export type ProductKey = keyof typeof products;
export type Product = (typeof products)[ProductKey];

export const productList = [products.single, products.carton];

export function getProduct(productKey: unknown): Product | null {
  if (typeof productKey !== "string") {
    return null;
  }

  return productKey in products ? products[productKey as ProductKey] : null;
}
