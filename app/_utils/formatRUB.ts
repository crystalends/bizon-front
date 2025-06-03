import { formatCurrency } from "./formatCurrency";

export const formatRUB = (
  amount: number | string,
  decimals: number = 0,
): string => formatCurrency(amount, { currency: "RUB", decimals });
