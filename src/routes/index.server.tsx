import React, { Suspense } from 'react';

// server components
import BoxFallback from '../components/server/BoxFallback.server';
import FeaturedProductsBox from '../components/server/FeaturedProductsBox.server';
import FeaturedCollectionBox from '../components/server/FeaturedCollectionBox.server';
import Layout from '../components/server/Layout.server';
import SeoForHomepage from '../components/server/SeoForHomepage.server';
import Welcome from '../components/server/Welcome.server';

// svg components
import GradientBackground from '../components/svgs/GradientBackground';

// props
type IndexProps = {
  country: {
    isoCode: string;
  };
};

const Index = ({ country = { isoCode: 'US' } }: IndexProps) => {
  return (
    <Layout hero={<GradientBackground />}>
      <Suspense fallback={null}>
        <SeoForHomepage />
      </Suspense>

      <div className='relative mb-12'>
        <Welcome />

        <Suspense fallback={<BoxFallback />}>
          <FeaturedProductsBox country={country} />
        </Suspense>

        <Suspense fallback={<BoxFallback />}>
          <FeaturedCollectionBox country={country} />
        </Suspense>
      </div>
    </Layout>
  );
};

export default Index;
