import React from 'react';
import { Image, Link } from '@shopify/hydrogen';
import type { Collection } from '@shopify/hydrogen/dist/esnext/graphql/types/types';

// props
type FeaturedCollectionProps = {
  collection: Collection;
};

// A shared component that defines a single featured collection to display on a storefront
const FeaturedCollection = ({ collection }: FeaturedCollectionProps) =>
  collection ? (
    <div className='shadow-xl rounded-xl grid grid-cols-1 lg:grid-cols-2 items-center bg-white overflow-hidden'>
      {collection.image ? <Image width='622' height='465' data={collection.image} /> : null}

      <div className='px-10 py-10 lg:py-0'>
        <h2 className='text-gray-700 text-3xl font-bold mb-5'>{collection.title}</h2>
        <p className='text-lg text-gray-500 mb-6'>{collection.description}</p>
        <Link
          className='inline-block bg-gray-900 text-white text-lg font-medium rounded-md py-4 px-16 uppercase'
          to={`/collections/${collection.handle}`}
        >
          Shop Collection
        </Link>
      </div>
    </div>
  ) : null;

export default FeaturedCollection;
