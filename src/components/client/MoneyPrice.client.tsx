import React from 'react';
import { useMoney } from '@shopify/hydrogen/client';
import type { MoneyV2 } from '@shopify/hydrogen/dist/esnext/graphql/types/types';

// props
type MoneyPriceProps = {
  money: MoneyV2;
};

// A client component that defines the currency code, currency symbol, and amount of a product
const MoneyPrice = ({ money }: MoneyPriceProps) => {
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
