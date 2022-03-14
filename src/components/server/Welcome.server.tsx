import React, { Suspense } from 'react';

// server components
import BoxFallback from './BoxFallback.server';
import DocsButton from './DocsButton.server';
import StorefrontInfo from './StorefrontInfo.server';
import TemplateLinks from './TemplateLinks.server';

// A server component that displays the content on the homepage of the Hydrogen app
const Welcome = () => (
  <div className='text-gray-900 pt-16 rounded-[40px] my-16 px-4 xl:px-12 bg-gradient-to-b from-white -mx-4 xl:-mx-12'>
    <div className='text-center mb-16'>
      <h1 className='font-extrabold mb-4 text-5xl md:text-7xl'>Hello, Hydrogen</h1>
      <p className='text-lg mb-8'>Welcome to your custom storefront. Let&rsquo;s get building.</p>
      <div className='flex flex-col lg:flex-row justify-center items-center gap-8 text-gray-700'>
        <DocsButton
          label='Browse Hydrogen documentation'
          url='https://shopify.dev/custom-storefronts/hydrogen'
        />
        <DocsButton label='Open the GraphiQL explorer' url='/graphql' />
        <DocsButton
          label='Explore Hydrogen examples'
          url='https://github.com/Shopify/hydrogen-examples'
        />
      </div>
    </div>
    <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16'>
      <Suspense fallback={<BoxFallback />}>
        <StorefrontInfo />
      </Suspense>
      <Suspense fallback={<BoxFallback />}>
        <TemplateLinks />
      </Suspense>
    </div>
  </div>
);

export default Welcome;
