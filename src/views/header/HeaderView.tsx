import {
  IoMoon,
  IoMoonOutline,
} from "react-icons/io5";

import { RouteEnum } from "../../routes/RouteConfig";

import useStores from "../../hooks/useStores";

function HeaderView() {
  const { theme, toggleTheme } = useStores();

  return (
    <div className="shadow h-16 flex justify-center bg-elem dark:bg-elem-dark">
      <div className="container h-full flex items-center justify-between px-4">
        <a href={RouteEnum.HOME}>
          <span className="text-lg font-bold text-item dark:text-item-dark">
            Where in the world?
          </span>
        </a>
        <div className="flex items-center space-x-2 cursor-pointer hover:opacity-80"
          onClick={toggleTheme}>
          {
            theme === 'dark'
            ? <IoMoon size="16px" className="dark:text-item-dark"/>
            : <IoMoonOutline size="18px" className="text-item"/>
          }

          <span className="text-sm font-semibold text-item dark:text-item-dark">
            Dark mode
          </span>
        </div>
      </div>
    </div>
  )
}

export default HeaderView;
