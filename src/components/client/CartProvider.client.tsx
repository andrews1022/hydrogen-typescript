import React, { useCallback } from 'react';
import type { ReactNode } from 'react';
import { CartProvider as ShopifyCartProvider } from '@shopify/hydrogen/client';

// client components
import CartUIProvider from '../client/CartUIProvider.client';

// custom hooks
import useCartUI from '../../hooks/useCartUI';

// props
type ProviderProps = {
  children: ReactNode;
  numCartLines?: number;
};

const Provider = ({ children, numCartLines }: ProviderProps) => {
  const { openCart } = useCartUI();

  const open = useCallback(() => {
    openCart();
  }, [openCart]);

  return (
    <ShopifyCartProvider numCartLines={numCartLines} onLineAdd={open} onCreate={open}>
      {children}
    </ShopifyCartProvider>
  );
};

// A client component that creates a cart object and provides callbacks that can be
// accessed by any descendent component using the `useCart` hook and related hooks
const CartProvider = ({ children, numCartLines }: ProviderProps) => (
  <CartUIProvider>
    <Provider numCartLines={numCartLines}>{children}</Provider>
  </CartUIProvider>
);

export default CartProvider;
