import { useShopQuery, RawHtml, Seo } from '@shopify/hydrogen';
import { PageSeoFragment } from '@shopify/hydrogen/fragments';
import gql from 'graphql-tag';

import Layout from '../../components/server/Layout.server';
import NotFound from '../../components/server/NotFound.server';

const Page = ({ params }) => {
  const { handle } = params;
  const { data } = useShopQuery({ query: QUERY, variables: { handle } });

  if (!data.pageByHandle) {
    return <NotFound />;
  }

  const page = data.pageByHandle;

  return (
    <Layout>
      <Seo type='page' data={page} />
      <h1 className='text-2xl font-bold'>{page.title}</h1>
      <RawHtml string={page.body} className='prose mt-8' />
    </Layout>
  );
};

export default Page;

const QUERY = gql`
  query PageDetails($handle: String!) {
    pageByHandle(handle: $handle) {
      title
      body
      ...PageSeoFragment
    }
  }

  ${PageSeoFragment}
`;