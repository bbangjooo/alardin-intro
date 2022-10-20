import Image from "next/image";
import React from "react";
import AppDownload from "../common/AppDownload";
import Logo from "../common/Logo";
import SmallLogo from "../common/SmallLogo";
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
    <div className="relative z-40">
      <div className="fixed w-screen flex px-4 py-3 justify-between items-center shadow bg-white dark:bg-[#202225]">
        <SmallLogo width={42} height={42} />
        <div className="hidden">
          <Navigation handleClick={handleClick} />
        </div>
        <AppDownload {...{ isHidden, setIsHidden }} />
      </div>
    </div>
  );
};

export default Header;
