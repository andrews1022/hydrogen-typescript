import React from 'react';
import useCartUI from '../../hooks/useCartUI';
import ArrowIcon from '../svgs/ArrowIcon';
import CartIconWithItems from './CartIconWithItems.client';

const CartHeader = () => {
  const { closeCart } = useCartUI();

  return (
    <header className='border-b border-gray-300 bg-white py-3 px-6 flex justify-between items-center sticky top-0'>
      <button type='button' onClick={closeCart}>
        <ArrowIcon />
        <span className='sr-only'>Close cart</span>
      </button>

      <span className='text-xs text-gray-500'>Free shipping on orders over $50</span>

      <CartIconWithItems />
    </header>
  );
};

export default CartHeader;
