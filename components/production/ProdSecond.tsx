import React from "react";
import HighLightText from "../common/HighLightText";

const ProdSecond = () => {
  return (
    <div className="mb-20 h-screen">
      <div className="h-3/6 flex flex-col justify-center items-center text-center">
        <div className="text-xxl font-semiBold">
          Alardin의 <br />{" "}
          <HighLightText size="xxl">기능성 게임으로</HighLightText>
          서로에게 집중해 보세요
        </div>
      </div>
      <div className="w-screen h-3/6 bg-product_one bg-contain bg-center bg-no-repeat"></div>
    </div>
  );
};

export default ProdSecond;
