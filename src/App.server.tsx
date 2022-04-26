import renderHydrogen from '@shopify/hydrogen/entry-server';
import { Router, Route, FileRoutes, ShopifyProvider } from '@shopify/hydrogen';
import type { ImportGlobEagerOutput } from '@shopify/hydrogen/dist/esnext/types';
import React, { Suspense } from 'react';
import shopifyConfig from '../shopify.config';
import DefaultSeo from './components/DefaultSeo.server';
import NotFound from './components/NotFound.server';
import LoadingFallback from './components/LoadingFallback';
import CartProvider from './components/CartProvider.client';

type AppProps = {
  routes: ImportGlobEagerOutput;
};

const App = ({ routes }: AppProps) => (
  <Suspense fallback={<LoadingFallback />}>
    <ShopifyProvider shopifyConfig={shopifyConfig}>
      <CartProvider>
        <DefaultSeo />
        <Router>
          <FileRoutes routes={routes} />
          <Route path='*' page={<NotFound />} />
        </Router>
      </CartProvider>
    </ShopifyProvider>
  </Suspense>
);

const routes: ImportGlobEagerOutput = import.meta.globEager('./routes/**/*.server.[jt](s|sx)');

export default renderHydrogen(App, { shopifyConfig, routes });
