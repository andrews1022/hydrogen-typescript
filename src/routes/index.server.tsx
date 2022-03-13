import Layout from '../components/server/Layout.server';
import Welcome from '../components/server/Welcome.server';
import { Suspense } from 'react';
import BoxFallback from '../components/server/BoxFallback.server';
import GradientBackground from '../components/svgs/GradientBackground';
import SeoForHomepage from '../components/server/SeoForHomepage.server';
import FeaturedProductsBox from '../components/server/FeaturedProductsBox.server';
import FeaturedCollectionBox from '../components/server/FeaturedCollectionBox.server';

const Index = ({ country = { isoCode: 'US' } }) => {
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
