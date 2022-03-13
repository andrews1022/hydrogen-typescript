import { BUTTON_PRIMARY_CLASSES } from './Button.client';
import { useCartUI } from './CartUIProvider.client';

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
