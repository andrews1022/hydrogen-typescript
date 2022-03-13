import { AddToCartButton, BuyNowButton, useProduct } from '@shopify/hydrogen/client';
import { BUTTON_PRIMARY_CLASSES, BUTTON_SECONDARY_CLASSES } from './Button.client';

const AddToCartMarkup = () => {
  const { selectedVariant } = useProduct();
  const isOutOfStock = !selectedVariant.availableForSale;

  return (
    <div className='space-y-2 mb-8'>
      <AddToCartButton className={BUTTON_PRIMARY_CLASSES} disabled={isOutOfStock}>
        {isOutOfStock ? 'Out of stock' : 'Add to bag'}
      </AddToCartButton>

      {isOutOfStock ? (
        <p className='text-black text-center'>Available in 2-3 weeks</p>
      ) : (
        <BuyNowButton variantId={selectedVariant.id} className={BUTTON_SECONDARY_CLASSES}>
          Buy it now
        </BuyNowButton>
      )}
    </div>
  );
};

export default AddToCartMarkup;
