// app/utils/formatting.ts
export const formatCurrency = (
  amount: number,
  currency = "MYR",
  locale = "ms-MY"
): string => {
  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency,
  }).format(amount);
};

export const formatDate = (date: string | Date, locale = "en-MY"): string => {
  return new Intl.DateTimeFormat(locale, {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(new Date(date));
};

export const truncateText = (text: string, maxLength: number): string => {
  if (text.length <= maxLength) return text;
  return `${text.slice(0, maxLength)}...`;
};

// Convenience methods for Malaysia-specific formatting
export const formatMYR = (amount: number): string =>
  formatCurrency(amount, "MYR", "ms-MY");

export const formatMYDate = (date: string | Date): string =>
  formatDate(date, "en-MY");
