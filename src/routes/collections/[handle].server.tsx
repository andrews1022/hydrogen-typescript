import { useShop, useShopQuery, flattenConnection, Seo } from '@shopify/hydrogen';
import type { Collection } from '@shopify/hydrogen/dist/esnext/storefront-api-types';
import gql from 'graphql-tag';
import React from 'react';

import LoadMoreProducts from '../../components/LoadMoreProducts.client';
import Layout from '../../components/Layout.server';
import ProductCard from '../../components/ProductCard';
import NotFound from '../../components/NotFound.server';

// query type
type CollectionRouteQueryResponse = {
  collection: Collection;
};

// props type
type CollectionProps = {
  collectionProductCount: number;
  country: {
    isoCode: string;
  };
  params: {
    handle: string;
  };
};

const CollectionRoute = ({
  country = { isoCode: 'US' },
  collectionProductCount = 24,
  params
}: CollectionProps) => {
  const { languageCode } = useShop();

  const { handle } = params;
  const { data } = useShopQuery<CollectionRouteQueryResponse>({
    query: QUERY,
    variables: {
      handle,
      country: country.isoCode,
      language: languageCode,
      numProducts: collectionProductCount
    },
    preload: true
  });

  if (data?.collection == null) {
    return <NotFound />;
  }

  const { collection } = data;
  const products = flattenConnection(collection.products);
  const { hasNextPage } = data.collection.products.pageInfo;

  return (
    <Layout>
      {/* the seo object will be expose in API version 2022-04 or later */}
      <Seo type='collection' data={collection} />
      <h1 className='font-bold text-4xl md:text-5xl text-gray-900 mb-6 mt-6'>{collection.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: collection.descriptionHtml }} className='text-lg' />
      <p className='text-sm text-gray-500 mt-5 mb-5'>
        {products.length} {products.length > 1 ? 'products' : 'product'}
      </p>
      <ul className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16'>
        {products.map((product) => (
          <li key={product.id}>
            <ProductCard product={product} />
          </li>
        ))}
      </ul>
      {hasNextPage && <LoadMoreProducts startingCount={collectionProductCount} />}
    </Layout>
  );
};

export default CollectionRoute;

const QUERY = gql`
  query CollectionDetails(
    $handle: String!
    $country: CountryCode
    $language: LanguageCode
    $numProducts: Int!
  ) @inContext(country: $country, language: $language) {
    collection(handle: $handle) {
      title
      descriptionHtml
      description
      seo {
        description
        title
      }
      image {
        id
        url
        width
        height
        altText
      }
      products(first: $numProducts) {
        edges {
          node {
            title
            vendor
            handle
            descriptionHtml
            compareAtPriceRange {
              maxVariantPrice {
                currencyCode
                amount
              }
              minVariantPrice {
                currencyCode
                amount
              }
            }
            variants(first: 1) {
              edges {
                node {
                  id
                  title
                  availableForSale
                  image {
                    id
                    url
                    altText
                    width
                    height
                  }
                  priceV2 {
                    currencyCode
                    amount
                  }
                  compareAtPriceV2 {
                    currencyCode
                    amount
                  }
                }
              }
            }
          }
        }
        pageInfo {
          hasNextPage
        }
      }
    }
  }
`;
