import { Fragment, useEffect } from 'react';
import { Link } from '@shopify/hydrogen/client';
import { FocusTrap } from '@headlessui/react';

import MobileCountrySelector from './MobileCountrySelector.client';
import OpenIcon from '../svgs/OpenIcon';
import ArrowRightIcon from '../svgs/ArrowRightIcon';

let scrollPosition = 0;

const CloseIcon = () => {
  return (
    <svg width='18' height='18' viewBox='0 0 18 18' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <path
        d='M1 17L17 1M1 1L17 17'
        stroke='black'
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
};

// A client component that defines the navigation for a mobile storefront
const MobileNavigation = ({ collections, isOpen, setIsOpen }) => {
  const OpenFocusTrap = isOpen ? FocusTrap : Fragment;

  useEffect(() => {
    if (isOpen) {
      scrollPosition = window.scrollY;
      document.body.style.position = 'fixed';
    } else if (document.body.style.position) {
      document.body.style.position = '';
      window.scrollTo(0, scrollPosition);
    }
  }, [isOpen]);

  return (
    <div className='lg:hidden'>
      <OpenFocusTrap>
        <button
          type='button'
          className='flex justify-center items-center w-7 h-full'
          onClick={() => setIsOpen((previousIsOpen) => !previousIsOpen)}
        >
          {isOpen ? <CloseIcon /> : <OpenIcon />}
        </button>
        {isOpen ? (
          <div className='fixed -left-0 top-20 w-full h-screen z-10 bg-gray-50 px-4 md:px-12 py-7'>
            <ul>
              {collections.map((collection) => (
                <li className='border-b border-gray-200' key={collection.id}>
                  <Link
                    className='group py-5 text-gray-700 flex items-center justify-between'
                    to={`/collections/${collection.handle}`}
                    onClick={() => setIsOpen(false)}
                  >
                    {collection.title}
                    <ArrowRightIcon className='hidden group-hover:block' />
                  </Link>
                </li>
              ))}
            </ul>
            <MobileCountrySelector />
          </div>
        ) : null}
      </OpenFocusTrap>
    </div>
  );
};

export default MobileNavigation;
