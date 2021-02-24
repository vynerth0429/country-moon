import React from 'react';

import _ from 'lodash';

import {
  IoChevronUp,
  IoChevronDown,
} from "react-icons/io5";

const Regions = [
  '', 'Africa', 'Americas', 'Asia', 'Europe', 'Oceania'
] as const;

interface ComponentProps {
  onChange: (value: string) => void;
}

function DropdownComp(props: ComponentProps) {
  const [region, setRegion] = React.useState('');
  const [showItems, setShowItems] = React.useState(false);

  const onItemClick = (regionItem: string) => {
    setRegion(regionItem);
    toggleShowItems();
    props.onChange(regionItem);
  };

  const toggleShowItems =() => {
    setShowItems(!showItems);
  };

  return (
    <div className="relative shadow-sm rounded-md h-12 w-full">
      <div className="h-full flex items-center px-6 space-x-6 bg-elem dark:bg-elem-dark cursor-pointer hover:opacity-80"
        onClick={toggleShowItems}>
        <span className="text-sm text-item dark:text-item-dark">
          { region || 'Filter by Region' }
        </span>
        {
          showItems
          ? <IoChevronUp size="18px" className="opacity-50 text-item dark:text-item-dark"/>
          : <IoChevronDown size="18px" className="opacity-50 text-item dark:text-item-dark"/>
        }
      </div>

      {
        showItems &&
        <div className="absolute left-0 right-0 top-14 shadow-sm bg-elem dark:bg-elem-dark">
          <div className="h-full flex flex-col py-4 space-y-2">
            {
              _.map(Regions, (regionItem, i) => (
                <div key={i} className="px-6 bg-elem dark:bg-elem-dark cursor-pointer hover:opacity-80"
                  onClick={() => onItemClick(regionItem)}>
                  <span className={`text-sm text-item dark:text-item-dark ${!regionItem && 'italic opacity-60'}`}>
                    {
                      regionItem || 'All'
                    }
                  </span>
                </div>
              ))
            }
          </div>
        </div>
      }
    </div>
  )
}

export default React.memo(DropdownComp);
