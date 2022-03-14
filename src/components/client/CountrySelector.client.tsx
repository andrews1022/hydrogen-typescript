import React, { useCallback, useMemo } from 'react';
import { useAvailableCountries, useCountry } from '@shopify/hydrogen/client';
import { Listbox } from '@headlessui/react';

// svg components
import ArrowIconAlt from '../svgs/ArrowIconAlt';
import CheckIcon from '../svgs/CheckIcon';

// A client component that selects the appropriate country to display for products on a website
const CountrySelector = () => {
  const availableCountries = useAvailableCountries();

  const countries = useMemo(
    () => [...availableCountries].sort((a, b) => a.name.localeCompare(b.name)),
    [availableCountries]
  );

  const [selectedCountry, setSelectedCountry] = useCountry();

  const setCountry = useCallback(
    (isoCode) => {
      setSelectedCountry(countries.find((country) => country.isoCode === isoCode)!);
    },
    [countries, setSelectedCountry]
  );

  return (
    <div className='hidden lg:block'>
      <Listbox onChange={setCountry} value={selectedCountry}>
        {({ open }) => (
          <>
            <Listbox.Button className='andrew font-medium text-sm h-8 p-2 flex items-center'>
              <span className='mr-4'>{selectedCountry?.name}</span>
              <ArrowIconAlt isOpen={open} />
            </Listbox.Button>

            <Listbox.Options className='absolute z-10 mt-2'>
              <div className='bg-white p-4 rounded-lg drop-shadow-2xl'>
                <Listbox.Option
                  className='p-2 text-md text-left font-medium uppercase'
                  disabled
                  value={open}
                >
                  Country
                </Listbox.Option>

                {countries.map((country) => {
                  const isSelected = country.isoCode === selectedCountry?.isoCode;

                  return (
                    <Listbox.Option key={country.isoCode} value={country.isoCode}>
                      {({ active }) => (
                        <div
                          className={`w-36 py-2 px-3 flex justify-between items-center text-left cursor-pointer rounded
                          ${active ? 'bg-gray-200' : null}`}
                        >
                          {country.name}
                          {isSelected ? <CheckIcon /> : null}
                        </div>
                      )}
                    </Listbox.Option>
                  );
                })}
              </div>
            </Listbox.Options>
          </>
        )}
      </Listbox>
    </div>
  );
};

export default CountrySelector;
