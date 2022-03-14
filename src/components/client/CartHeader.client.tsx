import React from 'react';

// client components
import CartIconWithItems from './CartIconWithItems.client';

// svg components
import ArrowIcon from '../svgs/ArrowIcon';

// custom hooks
import useCartUI from '../../hooks/useCartUI';

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
