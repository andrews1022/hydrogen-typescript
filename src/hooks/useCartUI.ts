import { useContext } from 'react';
import { CartContext } from '../components/client/CartUIProvider.client';

const useCartUI = () => useContext(CartContext);

export default useCartUI;
