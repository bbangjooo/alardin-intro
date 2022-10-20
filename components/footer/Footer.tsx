import React from "react";
import Logo from "../common/Logo";
import StoreIcons from "./StoreIcons";
import Terms from "./Terms";

const Footer = () => {
  const footerTexts = [
    "alardin.cs@gmail.com",
    "서울특별시 강남구 테헤란로 311 아남타워빌딩 7층 (우편번호 : 06151) ",
    "Team 해치웠나",
    "Copyright © 2022 Alardin",
  ];
  return (
    <div className="flex flex-col items-start">
      <StoreIcons />
      <Terms />
      <div className="w-screen h-2/5 p-5 shadow bg-gray_200 dark:bg-[#2F3136] rounded-t-lg">
        <Logo width={120} height={48} />
        {footerTexts.map((text, index) => (
          <div
            key={`footer_${index}`}
            className="py-1 text-gray_900 dark:text-white"
          >
            {text}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Footer;
