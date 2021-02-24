import React from 'react';

import _ from 'lodash';

import useStores from '../hooks/useStores';

import DropdownComp from '../components/DropdownComp';
import SearchInputComp from '../components/SearchInputComp';

import CountryBannerView from '../views/country/CountryBannerView';

function HomePage() {
  const { countries, getCountries } = useStores();
  const [ filterName, setFilterName ] = React.useState('');
  const [ filterRegion, setFilterRegion ] = React.useState('');

  const onFilterNameChange = React.useCallback((value: string) => {
    setFilterName(value);
  }, []);

  const onFilterRegionChange = React.useCallback((value: string) => {
    setFilterRegion(value);
  }, []);

  React.useEffect(() => {
    getCountries();
  }, []);

  return (
    <>
      <div className="flex flex-col items-center">
        <div className="container w-full px-4 mt-16 mb-16 flex justify-between items-center">
          <div className="w-2/5">
            <SearchInputComp onChange={onFilterNameChange}/>
          </div>
          <div>
            <DropdownComp onChange={onFilterRegionChange}/>
          </div>
        </div>
        <div className="container w-full px-4 pb-8 grid grid-cols-1 auto-rows-max gap-16 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2">
          {
            _.chain(countries)
              .filter((country) => {
                return country.name.toLowerCase().includes(filterName.toLowerCase())
                    && country.region.toLowerCase().includes(filterRegion.toLowerCase());
              })
              .map((country, i) => (
                <CountryBannerView key={i} country={country}/>
              ))
              .value()
          }
        </div>
      </div>
    </>
  )
}

export default HomePage;
