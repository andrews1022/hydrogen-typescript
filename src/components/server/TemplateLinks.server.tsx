import React from 'react';
import { flattenConnection, Link, useShopQuery } from '@shopify/hydrogen';
import type { Collection, Product } from '@shopify/hydrogen/dist/esnext/graphql/types/types';
import gql from 'graphql-tag';

const QUERY = gql`
  query welcomeContent {
    shop {
      name
    }
    products(first: 250) {
      edges {
        node {
          handle
        }
      }
    }
    collections(first: 250) {
      edges {
        node {
          handle
        }
      }
    }
  }
`;

type TemplateLinksQueryResponse = {
  collections: {
    edges: {
      node: Collection;
    }[];
  };
  products: {
    edges: {
      node: Product;
    }[];
  };
};

const TemplateLinks = () => {
  const { data } = useShopQuery<TemplateLinksQueryResponse>({ preload: true, query: QUERY });
  const products = data && flattenConnection(data.products);
  const collections = data && flattenConnection(data.collections);

  const firstProduct = products && products.length ? products[0].handle : '';
  const firstCollection = collections[0] ? collections[0].handle : '';

  return (
    <div className='bg-white p-12 md:p-12 shadow-xl rounded-xl text-gray-900'>
      <p className='text-md font-medium uppercase mb-4'>Explore the templates</p>
      <ul>
        <li className='mb-4'>
          <Link
            to={`/collections/${firstCollection}`}
            className='text-md font-medium text-blue-700 hover:underline'
          >
            Collection template
          </Link>
        </li>
        <li className='mb-4'>
          <Link
            to={`/products/${firstProduct}`}
            className='text-md font-medium text-blue-700 hover:underline'
          >
            Product template
          </Link>
        </li>
        <li>
          <Link to='/error-page' className='text-md font-medium text-blue-700 hover:underline'>
            404 template
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default TemplateLinks;
