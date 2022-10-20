import React from "react";
import HighLightText from "../common/HighLightText";

const Inquiry = () => {
  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <div className="h-2/6 flex flex-col justify-center items-center text-center">
        <div className="text-xxl font-semiBold item-animation">
          여러분의 목소리로{" "}
          <HighLightText size="xxl">더 즐거운 하루를</HighLightText>
          보내세요
        </div>
      </div>
      <div className="w-screen h-3/6 bg-product_three bg-contain bg-center bg-no-repeat item-animation"></div>
    </div>
  );
};

export default Inquiry;
