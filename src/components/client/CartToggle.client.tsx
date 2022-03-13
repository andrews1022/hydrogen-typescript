import React from 'react';
import useCartUI from '../../hooks/useCartUI';
import CartIconWithItems from './CartIconWithItems.client';

// A client component that defines the behavior when a user toggles a cart
const CartToggle = ({ handleClick }) => {
  const cartUI = useCartUI();

  if (cartUI == null) {
    throw new Error('CartToggle must be a descendent of a CartUIProvider');
  }

  const { isCartOpen, toggleCart } = cartUI;

  return (
    <button
      aria-controls='cart'
      aria-expanded={isCartOpen}
      onClick={() => {
        toggleCart();
        handleClick();
      }}
      type='button'
    >
      <CartIconWithItems />
      <span className='sr-only'>Open cart</span>
    </button>
  );
};

export default CartToggle;
