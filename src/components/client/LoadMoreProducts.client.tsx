import React from 'react';
import { useServerState } from '@shopify/hydrogen/client';

// svg components
import SpinnerIcon from '../svgs/SpinnerIcon';

// props
type LoadMoreProductsProps = {
  startingCount: number;
};

// A client component that provides functionality to initially show a
// subset of products and a button to load more products
const LoadMoreProducts = ({ startingCount }: LoadMoreProductsProps) => {
  const { pending, serverState, setServerState } = useServerState();

  const onClickHandler = () => {
    setServerState(
      'collectionProductCount',
      serverState.collectionProductCount
        ? serverState.collectionProductCount + 24
        : startingCount + 1
    );
  };

  return (
    <div className='flex justify-center h-14'>
      {pending ? (
        <SpinnerIcon />
      ) : (
        <button
          className={`uppercase border-4 bg-white border-black text-black text-center px-5 py-3 font-mono font-bold drop-shadow-lg active:drop-shadow-none hover:bg-black hover:text-white hover:border-white ${
            pending ? 'opacity-50' : undefined
          }`}
          disabled={pending}
          onClick={onClickHandler}
          type='button'
        >
          Load more
        </button>
      )}
    </div>
  );
};

export default LoadMoreProducts;
