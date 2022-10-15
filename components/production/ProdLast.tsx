import React from "react";
import HighLightText from "../common/HighLightText";

const ProdLast = () => {
  return (
    <div className="mt-20 h-screen">
      <div className="w-screen h-3/6 bg-product_two bg-center bg-contain bg-no-repeat"></div>
      <div className="h-2/6 flex flex-col justify-center items-center text-center">
        <div className="my-6"></div>
        <div className="text-xxl font-semiBold">
          하루가 새로워져도 <br />{" "}
          <HighLightText size="xxl">여러분의 하루를</HighLightText>
          맞춰 나가겠습니다
        </div>
      </div>
    </div>
  );
};

export default ProdLast;
