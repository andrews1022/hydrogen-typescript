import React from 'react';
import { useShopQuery, RawHtml, Seo } from '@shopify/hydrogen';
import { PageSeoFragment } from '@shopify/hydrogen/fragments';
import gql from 'graphql-tag';

// server components
import Layout from '../../components/server/Layout.server';
import NotFound from '../../components/server/NotFound.server';

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

// query
type PageQueryResponse = {
  pageByHandle: {
    body: string;
    title: string;
  };
};

// props
type PageProps = {
  params: {
    handle: string;
  };
};

const PageRoute = ({ params }: PageProps) => {
  const { handle } = params;
  const { data } = useShopQuery<PageQueryResponse>({
    query: QUERY,
    variables: {
      handle
    }
  });

  const page = data.pageByHandle;

  return !data.pageByHandle ? (
    <NotFound />
  ) : (
    <Layout>
      <Seo type='page' data={page} />
      <h1 className='text-2xl font-bold'>{page.title}</h1>
      <RawHtml string={page.body} className='prose mt-8' />
    </Layout>
  );
};

export default PageRoute;
