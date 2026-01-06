const DOLLAR_CURRENCIES = ["USD", "CAD", "MXN", "AUD", "NZD", "SGD", "HKD"];

/**
 * Removes locale-specific prefixes from the symbol, so
 * we can use our format [Symbol][Price] [ISO Code].
 *
 * Without this dollar currencies are sometimes prefixed with
 * country code, so we get something ugly like CA$100 CAD
 */
export function normalizeCurrencySymbol(code: string, symbol: string): string {
  if (DOLLAR_CURRENCIES.includes(code)) {
    return "$";
  }
  return symbol;
}

/**
 * Formats a currency using user locale.
 *
 * This uses Intl.NumberFormat.formatToParts so we can:
 * - Extract the currency symbol,
 * - Extract the rest of the formatted number,
 * - Rebuild as [Symbol][Number] in a stable way.
 *
 * @returns A formatted currency - e.g., €123.00
 */
export function formatCurrency(
  code: string,
  value: number,
  hideDecimals = false
): string {
  const decimalOptions = hideDecimals
    ? { minimumFractionDigits: 0, maximumFractionDigits: 0 }
    : {};

  const formatter = new Intl.NumberFormat(undefined, {
    style: "currency",
    currency: code,
    ...decimalOptions,
  });

  const parts = formatter.formatToParts(value);

  const rawSymbol = parts.find((p) => p.type === "currency")?.value ?? "";
  const normalizedSymbol = normalizeCurrencySymbol(code, rawSymbol);

  // Rebuild the "number" portion by stripping the currency part,
  // but keeping digits, separators, and other literals.
  const numberPortion = parts
    .filter((part) => part.type !== "currency")
    .map((part) => part.value)
    .join("")
    .trim();

  return `${normalizedSymbol}${numberPortion}`;
}

/**
 * Returns a formatted currency including ISO code.
 * Used most places we display prices to users.
 *
 * Format is [Symbol][Number][ISO Code].
 *
 * @returns A formatted price - e.g., €123.00 EUR
 */
export function formatPrice(
  code: string,
  price: number,
  hideDecimals = false
): string {
  try {
    const formattedPrice = formatCurrency(code, price, hideDecimals);
    return `${formattedPrice} ${code}`;
  } catch {
    // Fallback to dollar sign if ISO code is invalid
    const fallbackNumber = hideDecimals ? Math.round(price) : price.toFixed(2);
    return `$${fallbackNumber} ${code}`;
  }
}

/**
 * Returns a date with a readable month to avoid
 * ambiguities with date formats like nn/nn/nn.
 *
 * @returns A formatted date - e.g., December 25, 2025
 */
export const formatDate = (date: string) => {
  return new Date(date).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
};
