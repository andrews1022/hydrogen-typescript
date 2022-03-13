import renderHydrogen from '@shopify/hydrogen/entry-server';
import { Router, FileRoutes, ShopifyProvider } from '@shopify/hydrogen';
import React, { Suspense } from 'react';
import shopifyConfig from '../shopify.config';
import DefaultSeo from './components/server/DefaultSeo.server';
import NotFound from './components/server/NotFound.server';
import LoadingFallback from './components/LoadingFallback';
import CartProvider from './components/client/CartProvider.client';
import type { ImportGlobEagerOutput } from '@shopify/hydrogen/dist/esnext/types';

type AppProps = {
  routes: ImportGlobEagerOutput;
  serverProps: Record<string, any>;
};

const App = ({ routes, ...serverProps }: AppProps) => {
  return (
    <Suspense fallback={<LoadingFallback />}>
      <ShopifyProvider shopifyConfig={shopifyConfig}>
        <CartProvider>
          <DefaultSeo />

          <Router fallback={<NotFound response={serverProps.response} />} serverProps={serverProps}>
            <FileRoutes routes={routes} serverProps={serverProps} />
          </Router>
        </CartProvider>
      </ShopifyProvider>
    </Suspense>
  );
};

const routes = import.meta.globEager('./routes/**/*.server.[jt](s|sx)');

export default renderHydrogen(App, { shopifyConfig, routes });
