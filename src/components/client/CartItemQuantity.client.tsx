import { CartLineQuantity, CartLineQuantityAdjustButton } from '@shopify/hydrogen/client';

const CartItemQuantity = () => {
  return (
    <div className='flex border rounded border-gray-300 items-center overflow-auto mt-2'>
      <CartLineQuantityAdjustButton
        adjust='decrease'
        aria-label='Decrease quantity'
        className='p-2 disabled:pointer-events-all disabled:cursor-wait'
      >
        <svg
          xmlns='http://www.w3.org/2000/svg'
          className='h-5 w-5 text-gray-400'
          viewBox='0 0 20 20'
          fill='currentColor'
        >
          <path
            fillRule='evenodd'
            d='M5 10a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1z'
            clipRule='evenodd'
          />
        </svg>
      </CartLineQuantityAdjustButton>

      <CartLineQuantity as='div' className='p-2 text-gray-900 text-xs text-center' />

      <CartLineQuantityAdjustButton
        adjust='increase'
        aria-label='Increase quantity'
        className='p-2 text-gray-400 disabled:pointer-events-all disabled:cursor-wait'
      >
        <svg
          xmlns='http://www.w3.org/2000/svg'
          className='h-5 w-5'
          viewBox='0 0 20 20'
          fill='currentColor'
        >
          <path
            fillRule='evenodd'
            d='M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z'
            clipRule='evenodd'
          />
        </svg>
      </CartLineQuantityAdjustButton>
    </div>
  );
};

export default CartItemQuantity;
