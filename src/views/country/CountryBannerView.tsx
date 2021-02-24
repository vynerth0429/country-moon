import React from "react";

import { TCountry } from "../../types/countryTypes";

interface ComponentProps {
  country: TCountry
}

function CountryBannerView(props: ComponentProps) {
  return (
    <a href="/" className="hover:opacity-70 cursor-pointer">
      <div className="w-60 mx-auto rounded-md shadow-md bg-elem dark:bg-elem-dark">
        <div className="flex justify-center">
          <img className="h-40" src={props.country.flag} alt={props.country.name} />
        </div>

        <div className="p-6">
          <div className="text-base text-item font-bold mb-6 dark:text-item-dark">
            { props.country.name }
          </div>
          <div className="text-sm text-item mb-1 space-x-2 dark:text-item-dark">
            <span className="font-semibold">
              Population:
            </span>
            <span>
              { props.country.population }
            </span>
          </div>
          <div className="text-sm text-item mb-1 space-x-2 dark:text-item-dark">
            <span className="font-semibold">
              Region:
            </span>
            <span>
              { props.country.region }
            </span>
          </div>
          <div className="text-sm text-item mb-1 space-x-2 dark:text-item-dark">
            <span className="font-semibold">
              Capital:
            </span>
            <span>
              { props.country.capital }
            </span>
          </div>
        </div>
      </div>
    </a>
  )
}

export default React.memo(CountryBannerView);
