import React from 'react';
import { BUTTON_PRIMARY_CLASSES } from '../../constants/button';
import useCartUI from '../../hooks/useCartUI';

const CartEmpty = () => {
  const { closeCart } = useCartUI();

  return (
    <div className='p-7 flex flex-col'>
      <p className='mb-4 text-lg text-gray-500 text-center'>Your cart is empty</p>
      <button type='button' onClick={closeCart} className={BUTTON_PRIMARY_CLASSES}>
        Continue Shopping
      </button>
    </div>
  );
};

export default CartEmpty;
