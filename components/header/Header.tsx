import React from "react";
import AppDownload from "../common/AppDownload";
import Logo from "../common/Logo";
import Navigation from "./Navigation";

interface IHeaderProps<T> {
  groupRef: React.MutableRefObject<T>;
  isHidden: boolean;
  setIsHidden: React.Dispatch<React.SetStateAction<boolean>>;
}

const Header = ({
  groupRef,
  isHidden,
  setIsHidden,
}: IHeaderProps<HTMLDivElement[]>) => {
  const handleClick = (index: number) => {
    if (groupRef.current) {
      groupRef.current[index].scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="fixed w-screen flex px-3 py-2 justify-between items-center bg-black">
      <Logo size="small" />
      <div className="hidden sm:blo">
        <Navigation handleClick={handleClick} />
      </div>
      <AppDownload {...{ isHidden, setIsHidden }} />
    </div>
  );
};

export default Header;
