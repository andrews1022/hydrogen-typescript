import React from 'react';
import { useMoney } from '@shopify/hydrogen/client';
import type { MoneyV2 } from '@shopify/hydrogen/dist/esnext/graphql/types/types';

// props
type MoneyCompareAtPriceProps = {
  money: MoneyV2;
};

// A client component that renders a product's compare at price
const MoneyCompareAtPrice = ({ money }: MoneyCompareAtPriceProps) => {
  const { amount, currencyNarrowSymbol } = useMoney(money);

  return (
    <span className='line-through text-lg mr-2.5 text-gray-500'>
      {currencyNarrowSymbol}
      {amount}
    </span>
  );
};

export default MoneyCompareAtPrice;
