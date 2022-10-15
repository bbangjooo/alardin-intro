import Image from "next/image";
import React from "react";
import HighLightText from "../common/HighLightText";

const ProdFirst = () => {
  return (
    <div className="relative h-screen bg-wake_up bg-bottom bg-cover bg-no-repeat">
      <div className="absolute w-screen h-screen left-0 top-0 bg-black bg-opacity-60"></div>
      <div className="absolute w-full h-screen flex flex-col justify-center items-center text-center z-1">
        <div className="text-xxl font-semiBold">
          좋아하는 <HighLightText size="xxl">연인, 친구, 동료</HighLightText>
          함께 특별하게 <br /> 일어나보세요
        </div>
        <div className="my-6"></div>
      </div>
    </div>
  );
};

export default ProdFirst;
