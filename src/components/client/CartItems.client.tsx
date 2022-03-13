import React from 'react';
import { CartLines } from '@shopify/hydrogen/client';
import LineInCart from './LineInCart.client';

const CartItems = () => {
  return (
    <div className='px-7 flex-grow' role='table' aria-label='Shopping cart'>
      <div role='row' className='sr-only'>
        <div role='columnheader'>Product image</div>
        <div role='columnheader'>Product details</div>
        <div role='columnheader'>Price</div>
      </div>

      <CartLines>
        <LineInCart />
      </CartLines>
    </div>
  );
};

export default CartItems;
