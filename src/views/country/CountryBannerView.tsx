import React from "react";
import { useHistory } from "react-router";

import { RouteEnum } from "../../routes/RouteConfig";

import useStores from "../../hooks/useStores";

import { TCountry } from "../../types/countryTypes";

interface ComponentProps {
  country: TCountry
}

function CountryBannerView(props: ComponentProps) {
  const history = useHistory();
  const { updateCurrentCountry } = useStores();

  const [url, setUrl] = React.useState('');

  const onBannerClick = () => {
    updateCurrentCountry(props.country);
    history.push(url);
  };

  React.useEffect(() => {
    const code = props.country.alpha2Code;
    const currentUrl = RouteEnum.DETAIL.replace(':code', code);
    setUrl(currentUrl);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <a onClick={onBannerClick}
      className="hover:opacity-70 cursor-pointer">
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
