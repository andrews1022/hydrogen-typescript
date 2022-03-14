import React from 'react';
import { useShopQuery, Seo } from '@shopify/hydrogen';
import { ProductProviderFragment, ProductSeoFragment } from '@shopify/hydrogen/fragments';
import type { Product } from '@shopify/hydrogen/dist/esnext/graphql/types/types';
import gql from 'graphql-tag';

import ProductDetails from '../../components/client/ProductDetails.client';
import NotFound from '../../components/server/NotFound.server';
import Layout from '../../components/server/Layout.server';

const QUERY = gql`
  query product(
    $country: CountryCode
    $handle: String!
    $includeReferenceMetafieldDetails: Boolean = true
    $numProductMetafields: Int = 20
    $numProductVariants: Int = 250
    $numProductMedia: Int = 6
    $numProductVariantMetafields: Int = 10
    $numProductVariantSellingPlanAllocations: Int = 0
    $numProductSellingPlanGroups: Int = 0
    $numProductSellingPlans: Int = 0
  ) @inContext(country: $country) {
    product: product(handle: $handle) {
      id
      vendor
      ...ProductProviderFragment
      ...ProductSeoFragment
    }
  }

  ${ProductProviderFragment}
  ${ProductSeoFragment}
`;

// query
type ProductQueryResponse = { product: Product };

// props
type ProductProps = {
  country: {
    isoCode: string;
  };
  params: {
    handle: string;
  };
};

const ProductRoute = ({ country = { isoCode: 'US' }, params }: ProductProps) => {
  const { handle } = params;

  const {
    data: { product }
  } = useShopQuery<ProductQueryResponse>({
    preload: true,
    query: QUERY,
    variables: {
      country: country.isoCode,
      handle
    }
  });

  if (!product) {
    return <NotFound />;
  }

  return (
    <Layout>
      <Seo type='product' data={product} />
      <ProductDetails product={product} />
    </Layout>
  );
};

export default ProductRoute;
