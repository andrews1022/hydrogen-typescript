import { Link } from '@shopify/hydrogen';
import DiscordIcon from '../svgs/DiscordIcon';
import GithubIcon from '../svgs/GithubIcon';

// A server component that specifies the content of the footer on the website
const Footer = ({ collection, product }) => {
  return (
    <footer role='contentinfo'>
      <div className='relative bg-white border-t border-b border-black border-opacity-5'>
        <div className='mx-auto max-w-7xl px-4 py-14 md:px-8 grid grid-cols-1 md:grid-cols-3 gap-12'>
          {/* community column */}
          <div>
            <h2 className='text-md font-medium uppercase mb-4'>Community</h2>
            <ul className='mt-8 space-y-4'>
              <li className='text-sm font-medium text-gray-600 hover:text-gray-900'>
                <a
                  href='https://github.com/Shopify/hydrogen/discussions'
                  target='_blank'
                  rel='noreferrer'
                  className='flex items-center'
                >
                  <GithubIcon />
                  Github discussions
                </a>
              </li>
              <li className='text-sm font-medium text-gray-600 hover:text-gray-900'>
                <a
                  href='https://discord.gg/ppSbThrFaS'
                  target='_blank'
                  rel='noreferrer'
                  className='flex items-center'
                >
                  <DiscordIcon />
                  Discord
                </a>
              </li>
            </ul>
          </div>

          {/* templates column */}
          <div>
            <h2 className='text-md font-medium uppercase mb-4'>Templates</h2>

            <ul className='mt-8 space-y-4'>
              <li className='flex items-center text-sm font-medium text-gray-600 hover:text-gray-900'>
                <Link to='/home'>Home</Link>
              </li>

              <li className='flex items-center text-sm font-medium text-gray-600 hover:text-gray-900'>
                <Link to={`/products/${product?.handle}`}>Product</Link>
              </li>

              <li className='flex items-center text-sm font-medium text-gray-600 hover:text-gray-900'>
                <Link to={`/collections/${collection?.handle}`}>Collection</Link>
              </li>

              <li className='flex items-center text-sm font-medium text-gray-600 hover:text-gray-900'>
                <Link to='/404'>404</Link>
              </li>
            </ul>
          </div>

          {/* docs column */}
          <div>
            <h2 className='text-md font-medium uppercase mb-4'>Docs</h2>
            <ul className='mt-8 space-y-4'>
              <li className='flex items-center text-sm font-medium text-gray-600 hover:text-gray-900'>
                <a href='https://shopify.dev/custom-storefronts/hydrogen'>Hydrogen overview</a>
              </li>
              <li className='flex items-center text-sm font-medium text-gray-600 hover:text-gray-900'>
                <a href='https://shopify.dev/custom-storefronts/hydrogen/getting-started'>
                  Hydrogen starter template
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* copyright */}
      <div className='py-6 px-4 md:px-8 bg-gray-50'>
        <p className='text-gray-600'>© {new Date().getFullYear()} Shopify</p>
      </div>
    </footer>
  );
};

export default Footer;
