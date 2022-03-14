import React from 'react';

// custom hooks
import useCartUI from '../../hooks/useCartUI';

// constants
import { BUTTON_PRIMARY_CLASSES } from '../../constants/button';

const CartEmpty = () => {
  const { closeCart } = useCartUI();

  return (
    <div className='p-7 flex flex-col'>
      <p className='mb-4 text-lg text-gray-500 text-center'>Your cart is empty</p>

      <button className={BUTTON_PRIMARY_CLASSES} onClick={closeCart} type='button'>
        Continue Shopping
      </button>
    </div>
  );
};

export default CartEmpty;
