import React from 'react';
import { Link } from '@shopify/hydrogen/client';
import type { Collection } from '@shopify/hydrogen/dist/esnext/graphql/types/types';

// props
type NavigationProps = {
  collections: Collection[];
};

// A client component that defines the navigation for a web storefront
const Navigation = ({ collections }: NavigationProps) => (
  <nav className='hidden lg:block text-center'>
    <ul className='md:flex items-center justify-center'>
      {collections.map((collection) => (
        <li key={collection.id}>
          <Link to={`/collections/${collection.handle}`} className='block p-4 hover:opacity-80'>
            {collection.title}
          </Link>
        </li>
      ))}
    </ul>
  </nav>
);

export default Navigation;
