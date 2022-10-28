import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGooglePlay, faAppStore } from "@fortawesome/free-brands-svg-icons";
import React from "react";
import Link from "next/link";
import HighLightText from "./HighLightText";

interface IPopupProps {
  isHidden: boolean;
  setIsHidden: React.Dispatch<React.SetStateAction<boolean>>;
}

const Popup = ({ isHidden, setIsHidden }: IPopupProps) => {
  const handleClick = () => {
    setIsHidden(false);
  };
  return (
    <div
      className={`w-screen h-screen fixed flex top-0 left-0 flex-col bg-black bg-opacity-70 justify-center items-center ${
        !isHidden && "hidden"
      }`}
    >
      <div className="bg-white dark:bg-[#202225] w-80 h-80 flex flex-col rounded-lg">
        <div className="text-black text-center font-semiBold my-4">
          <HighLightText size="s">
            이용자의 스마트폰 플랫폼을 선택해주세요.
          </HighLightText>
        </div>
        <div className="flex w-full h-4/6 flex-col self-center">
          <Link href="https://play.google.com/store/apps/details?id=com.alardinapp">
            <div className="flex h-3/6 justify-center items-center hover:bg-gray_200 dark:hover:bg-[#2F3136] cursor-pointer">
              <FontAwesomeIcon
                width={28}
                height={28}
                className="mr-2"
                icon={faGooglePlay}
              />
              <a className="text-l text-gray_900 dark:text-white cursor-pointer">
                Android
              </a>
            </div>
          </Link>
          <Link href="https://apps.apple.com/kr/app/alardin/id1644668374">
            <div className="flex flex-row h-3/6 justify-center items-center hover:bg-gray_200 dark:hover:bg-[#2F3136] cursor-pointer">
              <FontAwesomeIcon
                width={28}
                height={28}
                className="mr-2"
                icon={faAppStore}
              />
              <a className="text-l text-gray_900 dark:text-white cursor-pointer">
                iOS
              </a>
            </div>
          </Link>
        </div>
        <div
          className="w-full h-1/6 py-3 bg-primary_400 text-center self-end rounded-b-lg text-white"
          onClick={handleClick}
        >
          닫기
        </div>
      </div>
    </div>
  );
};

export default Popup;
