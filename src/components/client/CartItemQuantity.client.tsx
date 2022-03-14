import React from 'react';
import { CartLineQuantity, CartLineQuantityAdjustButton } from '@shopify/hydrogen/client';

// svg components
import MinusIcon from '../svgs/MinusIcon';
import PlusIcon from '../svgs/PlusIcon';

const CartItemQuantity = () => (
  <div className='flex border rounded border-gray-300 items-center overflow-auto mt-2'>
    <CartLineQuantityAdjustButton
      adjust='decrease'
      aria-label='Decrease quantity'
      className='andrew p-2 disabled:pointer-events-all disabled:cursor-wait'
    >
      <MinusIcon />
    </CartLineQuantityAdjustButton>

    <CartLineQuantity as='div' className='p-2 text-gray-900 text-xs text-center' />

    <CartLineQuantityAdjustButton
      adjust='increase'
      aria-label='Increase quantity'
      className='p-2 text-gray-400 disabled:pointer-events-all disabled:cursor-wait'
    >
      <PlusIcon />
    </CartLineQuantityAdjustButton>
  </div>
);

export default CartItemQuantity;
