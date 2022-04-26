import React from 'react';
import { useShopQuery, Seo, CacheDays } from '@shopify/hydrogen';
import gql from 'graphql-tag';

/**
 * A server component that fetches a `shop.name` and sets
 * default values and templates for every page on a website
 */
const DefaultSeo = () => {
  const {
    data: {
      shop: { name, description }
    }
  } = useShopQuery({
    cache: CacheDays(),
    preload: '*',
    query: QUERY
  });

  return (
    <Seo
      data={{
        description,
        title: name
      }}
      type='defaultSeo'
    />
  );
};

export default DefaultSeo;

const QUERY = gql`
  query shopInfo {
    shop {
      name
      description
    }
  }
`;
