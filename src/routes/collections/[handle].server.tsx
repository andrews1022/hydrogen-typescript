import React from 'react';
import { useShopQuery, flattenConnection, RawHtml, Seo } from '@shopify/hydrogen';
import {
  MediaFileFragment,
  ProductProviderFragment,
  CollectionSeoFragment
} from '@shopify/hydrogen/fragments';
import type { Collection } from '@shopify/hydrogen/dist/esnext/graphql/types/types';
import gql from 'graphql-tag';

// client components
import LoadMoreProducts from '../../components/client/LoadMoreProducts.client';

// server components
import Layout from '../../components/server/Layout.server';
import NotFound from '../../components/server/NotFound.server';
import ProductCard from '../../components/server/ProductCard.server';

const QUERY = gql`
  query CollectionDetails(
    $handle: String!
    $country: CountryCode
    $numProducts: Int!
    $includeReferenceMetafieldDetails: Boolean = false
    $numProductMetafields: Int = 0
    $numProductVariants: Int = 250
    $numProductMedia: Int = 6
    $numProductVariantMetafields: Int = 0
    $numProductVariantSellingPlanAllocations: Int = 0
    $numProductSellingPlanGroups: Int = 0
    $numProductSellingPlans: Int = 0
  ) @inContext(country: $country) {
    collection(handle: $handle) {
      id
      title
      descriptionHtml
      ...CollectionSeoFragment
      products(first: $numProducts) {
        edges {
          node {
            vendor
            ...ProductProviderFragment
          }
        }
        pageInfo {
          hasNextPage
        }
      }
    }
  }

  ${CollectionSeoFragment}
  ${MediaFileFragment}
  ${ProductProviderFragment}
`;

// query
type CollectionRouteQueryResponse = {
  collection: Collection;
};

// props
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
  collectionProductCount = 24,
  country = { isoCode: 'US' },
  params
}: CollectionProps) => {
  const { handle } = params;
  const { data } = useShopQuery<CollectionRouteQueryResponse>({
    query: QUERY,
    variables: {
      handle,
      country: country.isoCode,
      numProducts: collectionProductCount
    },
    preload: true
  });

  const { collection } = data;
  const products = flattenConnection(collection.products);
  const { hasNextPage } = data.collection.products.pageInfo;

  return data?.collection === null ? (
    <NotFound />
  ) : (
    <Layout>
      {/* the seo object will be expose in API version 2022-04 or later */}
      <Seo type='collection' data={collection} />
      <h1 className='font-bold text-4xl md:text-5xl text-gray-900 mb-6 mt-6'>{collection.title}</h1>
      <RawHtml string={collection.descriptionHtml} className='text-lg' />
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
