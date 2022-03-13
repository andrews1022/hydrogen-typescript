import { useMoney } from '@shopify/hydrogen/client';

// A client component that defines the currency code, currency symbol, and amount of a product
const MoneyPrice = ({ money }) => {
  const { currencyCode, currencyNarrowSymbol, amount } = useMoney(money);

  return (
    <span className='text-black text-md'>
      {currencyCode}
      {currencyNarrowSymbol}
      {amount}
    </span>
  );
};

export default MoneyPrice;
