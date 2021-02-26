import React from 'react';

import {
  IoSearch,
} from "react-icons/io5";

interface ComponentProps {
  onChange: (value: string) => void;
}

function SearchInputComp(props: ComponentProps) {
  return (
    <div className="shadow-sm rounded-md h-12 w-full px-8 flex space-x-6 items-center bg-elem dark:bg-elem-dark">
      <IoSearch size="18px" className="opacity-50 text-item dark:text-item-dark"/>
      <input
        type="text"
        placeholder="Search for a country"
        aria-label="Search country"
        title="Search country"
        className="h-full w-full text-sm font-semibold text-item dark:text-item-dark bg-elem dark:bg-elem-dark focus:outline-none"
        onChange={(event) => {
          props.onChange(event.target.value)
        }}
      />
    </div>
  )
}

export default React.memo(SearchInputComp);
