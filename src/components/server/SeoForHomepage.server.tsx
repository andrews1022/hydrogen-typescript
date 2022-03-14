import React from 'react';
import { CacheDays, Seo, useShopQuery } from '@shopify/hydrogen';
import { HomeSeoFragment } from '@shopify/hydrogen/fragments';
import gql from 'graphql-tag';

const SEO_QUERY = gql`
  query homeShopInfo {
    shop {
      ...HomeSeoFragment
    }
  }

  ${HomeSeoFragment}
`;

const SeoForHomepage = () => {
  const {
    data: {
      shop: { title, description }
    }
  } = useShopQuery({
    cache: CacheDays(),
    preload: true,
    query: SEO_QUERY
  });

  return <Seo data={{ description, title }} type='homepage' />;
};

export default SeoForHomepage;
