export type TFormatCurrencyOptions = {
  currency?: string;
  locale?: string;
  decimals?: number;
  currencyDisplay?: "symbol" | "code" | "name";
  spaceBetween?: boolean;
  minimumFractionDigits?: number;
  maximumFractionDigits?: number;
};

export const formatCurrency = (
  amount: number | string,
  options: TFormatCurrencyOptions = {},
): string => {
  const {
    currency = "RUB",
    locale = "ru-RU",
    decimals = 0,
    currencyDisplay = "symbol",
    spaceBetween = true,
    minimumFractionDigits = decimals,
    maximumFractionDigits = decimals,
  } = options;

  const num = typeof amount === "string" ? parseFloat(amount) : amount;

  if (isNaN(num))
    return `0${spaceBetween ? " " : ""}${currencyDisplay === "symbol" ? "₽" : currency}`;

  const formatter = new Intl.NumberFormat(locale, {
    style: "currency",
    currency,
    currencyDisplay,
    minimumFractionDigits,
    maximumFractionDigits,
    useGrouping: true,
  });

  let result = formatter.format(num);

  if (currencyDisplay === "symbol") {
    const currencySymbol = (0)
      .toLocaleString(locale, { style: "currency", currency, currencyDisplay })
      .replace(/[0.,\s]/g, "");

    result = result.replace(currencySymbol, "").trim();
    const symbol = currency === "RUB" ? "₽" : currencySymbol;

    return `${result}${spaceBetween ? " " : ""}${symbol}`;
  }

  return result;
};
