import React from 'react';
import { flattenConnection, useShopQuery } from '@shopify/hydrogen';
import { ImageFragment, ProductProviderFragment } from '@shopify/hydrogen/fragments';
import type { Collection } from '@shopify/hydrogen/dist/esnext/graphql/types/types';
import gql from 'graphql-tag';

// components
import FeaturedCollection from './FeaturedCollection.server';

const QUERY = gql`
  query indexContent(
    $country: CountryCode
    $numCollections: Int = 2
    $numProducts: Int = 3
    $includeReferenceMetafieldDetails: Boolean = false
    $numProductMetafields: Int = 0
    $numProductVariants: Int = 250
    $numProductMedia: Int = 1
    $numProductVariantMetafields: Int = 10
    $numProductVariantSellingPlanAllocations: Int = 0
    $numProductSellingPlanGroups: Int = 0
    $numProductSellingPlans: Int = 0
  ) @inContext(country: $country) {
    collections(first: $numCollections) {
      edges {
        node {
          descriptionHtml
          description
          handle
          id
          title
          image {
            ...ImageFragment
          }
          products(first: $numProducts) {
            edges {
              node {
                ...ProductProviderFragment
              }
            }
          }
        }
      }
    }
  }

  ${ProductProviderFragment}
  ${ImageFragment}
`;

// query
type FeaturedCollectionBoxQueryResponse = {
  collections: {
    edges: {
      node: Collection;
    }[];
  };
};

// props
type FeaturedCollectionBoxProps = {
  country: {
    isoCode: string;
  };
};

const FeaturedCollectionBox = ({ country }: FeaturedCollectionBoxProps) => {
  // i think `{ data }: any` is only thing that works here?
  const { data } = useShopQuery<FeaturedCollectionBoxQueryResponse>({
    preload: true,
    query: QUERY,
    variables: { country: country.isoCode }
  });

  const collections = data ? flattenConnection(data.collections) : [];
  const featuredCollection = collections && collections.length ? collections[1] : collections[0];

  return <FeaturedCollection collection={featuredCollection as Collection} />;
};

export default FeaturedCollectionBox;
