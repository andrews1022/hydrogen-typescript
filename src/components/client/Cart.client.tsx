import { useCart } from '@shopify/hydrogen/client';
import { Dialog } from '@headlessui/react';
import React from 'react';

import CartEmpty from './CartEmpty.client';
import CartFooter from './CartFooter.client';
import CartHeader from './CartHeader.client';
import CartItems from './CartItems.client';
import useCartUI from '../../hooks/useCartUI';

// A client component that contains the merchandise that a customer intends to purchase, and the estimated cost associated with the cart
const Cart = () => {
  const { isCartOpen, closeCart } = useCartUI();
  const { totalQuantity } = useCart();

  return (
    <div>
      <div
        className={`z-20 fixed top-0 bottom-0 left-0 right-0 bg-black transition-opacity duration-400 ${
          isCartOpen ? 'opacity-20' : 'opacity-0 pointer-events-none'
        }`}
        onClick={isCartOpen ? closeCart : null}
      />
      <Dialog open={isCartOpen} onClose={closeCart}>
        <Dialog.Overlay className='fixed z-20 inset-0 bg-gray-50 opacity-75' />
        <div
          className={`absolute flex flex-col md:block z-20 top-0 left-0 right-0 bottom-0 md:top-7 h-full md:left-auto md:right-7 md:bottom-auto md:h-auto md:max-h-[calc(100vh-56px)] bg-gray-50 w-full md:w-[470px] rounded-b-lg shadow-2xl ${
            totalQuantity === 0 ? 'overflow-hidden' : 'overflow-y-scroll'
          }`}
        >
          <CartHeader />
          {totalQuantity === 0 ? (
            <CartEmpty />
          ) : (
            <>
              <CartItems />
              <CartFooter />
            </>
          )}
        </div>
      </Dialog>
    </div>
  );
};

export default Cart;
