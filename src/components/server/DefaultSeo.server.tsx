import { useShopQuery, Seo, CacheDays } from '@shopify/hydrogen';
import { DefaultPageSeoFragment } from '@shopify/hydrogen/fragments';
import gql from 'graphql-tag';

// A server component that fetches a `shop.name` and sets default values and templates for every page on a website
const DefaultSeo = () => {
  const {
    data: {
      shop: { title, description }
    }
  } = useShopQuery({
    query: QUERY,
    cache: CacheDays(),
    preload: '*'
  });

  return (
    <Seo
      type='defaultSeo'
      data={{
        title,
        description
      }}
    />
  );
};

export default DefaultSeo;

const QUERY = gql`
  query shopInfo {
    shop {
      ...DefaultPageSeoFragment
    }
  }

  ${DefaultPageSeoFragment}
`;
