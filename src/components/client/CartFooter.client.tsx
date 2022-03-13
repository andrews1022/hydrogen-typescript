import { CartCheckoutButton, CartEstimatedCost, CartShopPayButton } from '@shopify/hydrogen/client';
import { BUTTON_PRIMARY_CLASSES } from '../../constants/button';

const CartFooter = () => {
  return (
    <footer className='bottom-0 sticky pb-8 border-t border-black border-opacity-5'>
      <div className='relative h-60 bg-white text-gray-900 p-7'>
        <div role='table' aria-label='Cost summary'>
          <div role='row' className='flex justify-between'>
            <span className='font-semibold' role='rowheader'>
              Subtotal
            </span>
            <CartEstimatedCost amountType='subtotal' role='cell' className='text-right ' />
          </div>
          <div role='row' className='flex justify-between mt-2'>
            <span className='font-semibold' role='rowheader'>
              Shipping
            </span>
            <span role='cell' className='uppercase'>
              Free
            </span>
          </div>
        </div>
        <CartShopPayButton className='flex my-4 justify-center w-full bg-[#5a31f4] py-2 rounded-md' />
        <CartCheckoutButton className={BUTTON_PRIMARY_CLASSES}>Checkout</CartCheckoutButton>
      </div>
    </footer>
  );
};

export default CartFooter;
