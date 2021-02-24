import React from 'react';

interface ComponentProps {
  leftIcon: any,
  label: string,
  onClick: () => void
}

function IconButtonComp(props: ComponentProps) {
  return (
    <div className="shadow-md rounded-md inline-flex h-10 px-8 cursor-pointer hover:opacity-70 bg-elem dark:bg-elem-dark"
      onClick={props.onClick}>
      <div className="h-full items-center justify-center flex space-x-2">
        {
          props.leftIcon
        }

        <span className="text-base text-item dark:text-item-dark">
          { props.label }
        </span>
      </div>
    </div>
  )
}

export default React.memo(IconButtonComp);
