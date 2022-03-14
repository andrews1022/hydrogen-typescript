import React from 'react';
import { useShopQuery, flattenConnection } from '@shopify/hydrogen';
import { ProductProviderFragment } from '@shopify/hydrogen/fragments';
import type { Product } from '@shopify/hydrogen/dist/esnext/graphql/types/types';
import gql from 'graphql-tag';

// client components
import Button from '../client/Button.client';

// server components
import Layout from './Layout.server';
import ProductCard from './ProductCard.server';

const QUERY = gql`
  query NotFoundProductDetails(
    $country: CountryCode
    $includeReferenceMetafieldDetails: Boolean = false
    $numProductMetafields: Int!
    $numProductVariants: Int!
    $numProductMedia: Int!
    $numProductVariantMetafields: Int!
    $numProductVariantSellingPlanAllocations: Int!
    $numProductSellingPlanGroups: Int!
    $numProductSellingPlans: Int!
  ) @inContext(country: $country) {
    products(first: 3) {
      edges {
        node {
          ...ProductProviderFragment
        }
      }
    }
  }

  ${ProductProviderFragment}
`;

type NotFoundQueryResponse = {
  products: { edges: { node: Product }[] };
};

// props
type NotFoundProps = {
  country?: { isoCode: string };
  response?: any; // TODO: Update to not use type any
  serverProps?: any; // TODO: Update to not use type any
};

// A server component that defines the content to display when a page isn't found (404 error)
const NotFound = ({ country = { isoCode: 'US' }, response, serverProps }: NotFoundProps) => {
  response.doNotStream();
  response.writeHead({ status: 404, statusText: 'Not found' });

  const { data } = useShopQuery<NotFoundQueryResponse>({
    query: QUERY,
    variables: {
      country: country.isoCode,
      numProductMetafields: 0,
      numProductVariants: 250,
      numProductMedia: 0,
      numProductVariantMetafields: 0,
      numProductVariantSellingPlanAllocations: 0,
      numProductSellingPlanGroups: 0,
      numProductSellingPlans: 0
    }
  });

  const products = data ? flattenConnection(data.products) : [];

  return (
    <Layout>
      <div className='py-10 border-b border-gray-200'>
        <div className='max-w-3xl text-center mx-4 md:mx-auto'>
          <h1 className='font-bold text-4xl md:text-5xl text-gray-900 mb-6 mt-6'>
            We&#39;ve lost this page
          </h1>
          <p className='text-lg m-8 text-gray-500'>
            We couldn’t find the page you’re looking for. Try checking the URL or heading back to
            the home page.
          </p>
          <Button className='w-full md:mx-auto md:w-96' label='Take me to the home page' url='/' />
        </div>
      </div>

      <div className='my-8'>
        <p className='mb-8 text-lg text-black font-medium uppercase'>Products you might like</p>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16'>
          {products.map((product) => (
            <div key={product.id}>
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default NotFound;
