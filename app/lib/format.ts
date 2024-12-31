// lib/format.ts
export function formatPrice(price: number): string {
  return new Intl.NumberFormat("ms-MY", {
    style: "currency",
    currency: "MYR",
  }).format(price);
}

export function formatDate(date: Date): string {
  return new Intl.DateTimeFormat("en-MY", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(date);
}
