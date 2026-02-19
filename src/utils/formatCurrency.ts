const formatCurrency = new Intl.NumberFormat('pt-BR', {
  currency: 'BRL',
  style: 'currency',
}).format;

export const formatCurrencyMask = (value: string) => {
  const numericValue = value.replace(/[^0-9]/g, '');

  if (!numericValue) {
    return formatCurrency(0);
  }

  const numberValue = parseFloat(numericValue) / 100;
  return formatCurrency(numberValue);
};
