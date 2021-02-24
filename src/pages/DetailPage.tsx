import React from 'react';
import {
  IoArrowBack,
} from "react-icons/io5";

import _ from 'lodash';
import { useParams, useHistory } from "react-router";

import { RouteEnum } from '../routes/RouteConfig';

import useStores from '../hooks/useStores';
import IconButtonComp from '../components/IconButtonComp';

function DetailPage() {
  const { currentCountry, getCountryDetail } = useStores();

  const history = useHistory();
  const { code } = useParams<{code: string}>();

  const onBackClick = React.useCallback(() => {
    history.push(RouteEnum.HOME);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  React.useEffect(() => {
    if (code) {
      getCountryDetail(code);
    } else {
      history.push(RouteEnum.HOME);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className="container mx-auto px-4">
      <div className="my-16">
        <IconButtonComp
          leftIcon={
            <IoArrowBack className="text-item dark:text-item-dark" />
          }
          label={'Back'}
          onClick={onBackClick}
        />
      </div>

      {
        currentCountry &&
        <div className="flex justify-between space-x-24">
          <div className="flex-none w-1/2">
            <img className="w-full" src={currentCountry.flag} alt={currentCountry.name} />
          </div>
          <div className="flex-auto flex flex-col justify-center">
            <div className="text-sm text-item mb-6 dark:text-item-dark">
              <span className="text-xl font-bold">
              { currentCountry.name }
              </span>
            </div>
            <div className="flex justify-between">
              <div className="w-1/2 space-y-2">
                <div className="text-base text-item space-x-2 dark:text-item-dark">
                  <span className="font-semibold">
                    Native Name:
                  </span>
                  <span>
                    { currentCountry.nativeName }
                  </span>
                </div>
                <div className="text-base text-item space-x-2 dark:text-item-dark">
                  <span className="font-semibold">
                    Population:
                  </span>
                  <span>
                    { currentCountry.population.toLocaleString() }
                  </span>
                </div>
                <div className="text-base text-item space-x-2 dark:text-item-dark">
                  <span className="font-semibold">
                    Region:
                  </span>
                  <span>
                    { currentCountry.region }
                  </span>
                </div>
                <div className="text-base text-item space-x-2 dark:text-item-dark">
                  <span className="font-semibold">
                    Sub Region:
                  </span>
                  <span>
                    { currentCountry.subregion }
                  </span>
                </div>
                <div className="text-base text-item space-x-2 dark:text-item-dark">
                  <span className="font-semibold">
                    Capital:
                  </span>
                  <span>
                    { currentCountry.capital }
                  </span>
                </div>
              </div>

              <div className="w-1/2 space-y-2">
                <div className="text-base text-item space-x-2 dark:text-item-dark">
                  <span className="font-semibold">
                    Top Level Domain:
                  </span>
                  <span>
                    {
                      _.join(currentCountry.topLevelDomain, ', ')
                    }
                  </span>
                </div>
                <div className="text-base text-item space-x-2 dark:text-item-dark">
                  <span className="font-semibold">
                    Currencies:
                  </span>
                  <span>
                    {
                      _.map(currentCountry.currencies, (currency) => currency.name)
                      .join(', ')
                    }
                  </span>
                </div>
                <div className="text-base text-item space-x-2 dark:text-item-dark">
                  <span className="font-semibold">
                    Languages:
                  </span>
                  <span>
                    {
                      _.map(currentCountry.languages, (language) => language.name)
                      .join(', ')
                    }
                  </span>
                </div>
              </div>
            </div>
            <div className="flex items-start text-base text-item space-x-2 mt-16 dark:text-item-dark">
              <span className="mt-1 flex-none font-semibold">
                Border Countries:
              </span>

              <div className="flex flex-wrap">
                {
                  _.map(currentCountry.borders, (border, i) => (
                    <div key={i}
                      className="h-8 px-6 mr-2 mb-2 text-sm flex items-center justify-center shadow text-item dark:text-item-dark bg-elem dark:bg-elem-dark">
                      <span>
                        { border }
                      </span>
                    </div>
                  ))
                }
              </div>
            </div>
          </div>
        </div>
      }
    </div>
  )
}

export default DetailPage;
