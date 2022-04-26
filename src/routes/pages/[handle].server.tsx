import { useShop, useShopQuery, Seo } from '@shopify/hydrogen';
import gql from 'graphql-tag';
import React from 'react';

import Layout from '../../components/Layout.server';
import NotFound from '../../components/NotFound.server';

// query type
type PageQueryResponse = {
  page: {
    body: string;
    title: string;
    seo: {
      description: string;
      title: string;
    };
  };
};

// props type
type PageProps = {
  params: {
    handle: string;
  };
};

const Page = ({ params }: PageProps) => {
  const { languageCode } = useShop();

  const { handle } = params;
  const { data } = useShopQuery<PageQueryResponse>({
    query: QUERY,
    variables: {
      handle,
      language: languageCode
    }
  });

  if (!data.page) {
    return <NotFound />;
  }

  const { page } = data;

  return (
    <Layout>
      <Seo type='page' data={page} />
      <h1 className='text-2xl font-bold'>{page.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: page.body }} className='prose mt-8' />
    </Layout>
  );
};

export default Page;

const QUERY = gql`
  query PageDetails($language: LanguageCode, $handle: String!) @inContext(language: $language) {
    page(handle: $handle) {
      title
      body
      seo {
        description
        title
      }
    }
  }
`;
