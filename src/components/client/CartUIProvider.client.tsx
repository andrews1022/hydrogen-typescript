import React, { useState, useMemo, useCallback, useContext, createContext } from 'react';
import type { ReactNode } from 'react';

type Context = {
  isCartOpen: boolean;
  openCart: () => void;
  closeCart: () => void;
  toggleCart: () => void;
};

export const CartContext = createContext<Context>(null as never);

type CartUIProviderProps = {
  children: ReactNode;
};

// A client component that defines the behavior that occurs when a user is interacting with a cart (for example, opening or closing it)
const CartUIProvider = ({ children }: CartUIProviderProps) => {
  const [open, setOpen] = useState(false);

  const openCart = useCallback(() => {
    setOpen(true);
  }, [setOpen]);

  const closeCart = useCallback(() => {
    setOpen(false);
  }, [setOpen]);

  const toggleCart = useCallback(() => {
    setOpen(!open);
  }, [setOpen, open]);

  const initialContext = {
    isCartOpen: open,
    openCart,
    closeCart,
    toggleCart
  };

  const contextValue = useMemo(() => initialContext, [open, openCart, closeCart, toggleCart]);

  return <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>;
};

export default CartUIProvider;
