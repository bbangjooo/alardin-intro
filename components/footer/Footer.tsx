import React from "react";
import StoreIcons from "./StoreIcons";
import Terms from "./Terms";

const Footer = () => {
  const footerTexts = [
    "Alardin",
    "서울특별시 강남구 테헤란로 311 아남타워빌딩 7층 (우편번호 : 06151) ",
    "Team 해치웠나",
    "Copyright © 2022 Alardin",
  ];
  return (
    <div className="flex flex-col justify-center items-center text-center px-5 py-6">
      <StoreIcons />
      <Terms />
      {footerTexts.map((text, index) => (
        <div key={`footer_${index}`} className="py-1">
          {text}
        </div>
      ))}
    </div>
  );
};

export default Footer;
