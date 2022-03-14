import React from 'react';
import {
  CartLineImage,
  CartLinePrice,
  CartLineProductTitle,
  CartLineQuantityAdjustButton,
  Link,
  useCartLine
} from '@shopify/hydrogen/client';

// client components
import CartItemQuantity from './CartItemQuantity.client';

// svg components
import CartCloseIcon from '../svgs/CartCloseIcon';

const LineInCart = () => {
  const { merchandise } = useCartLine();

  return (
    <div role='row' className='flex py-7 border-b last:border-b-0 border-gray-300 text-gray-900'>
      <div role='cell' className='flex-shrink-0 mr-7'>
        <Link to={`/products/${merchandise.product.handle}`}>
          <CartLineImage
            className='bg-white border border-black border-opacity-5 rounded-xl '
            options={{ width: '98px', height: '98px', crop: 'center' }}
          />
        </Link>
      </div>

      <div
        role='cell'
        className='flex flex-col w-full justify-between items-start flex-grow-1 mr-4'
      >
        <Link to={`/products/${merchandise.product.handle}`} className='hover:underline'>
          <CartLineProductTitle className='text-lg font-medium' />
        </Link>

        <ul className='text-xs space-y-1'>
          {merchandise.selectedOptions.map(({ name, value }) => (
            <li key={name}>
              {name}: {value}
            </li>
          ))}
        </ul>
        <CartItemQuantity />
      </div>

      <div role='cell' className='flex flex-col justify-between items-end'>
        <CartLineQuantityAdjustButton
          adjust='remove'
          aria-label='Remove from cart'
          className='disabled:pointer-events-all disabled:cursor-wait'
        >
          <CartCloseIcon />
        </CartLineQuantityAdjustButton>
        <CartLinePrice className='text-lg' />
      </div>
    </div>
  );
};

export default LineInCart;
