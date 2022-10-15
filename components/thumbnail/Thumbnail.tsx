import React from "react";
import AppDownload from "../common/AppDownload";
import HighLightText from "../common/HighLightText";

interface IThumbnailProps {
  isHidden: boolean;
  setIsHidden: React.Dispatch<React.SetStateAction<boolean>>;
}

const Thumbnail = ({ isHidden, setIsHidden }: IThumbnailProps) => {
  return (
    <div className="py-20 h-screen">
      <div className="h-3/6 flex flex-col justify-center items-center text-center">
        <div className="text-xxl font-semiBold font-">
          지친 하루 대신 <br />{" "}
          <HighLightText size="xxl">재미있는 순간을</HighLightText>
          경험하자
        </div>
        <div className="my-8">
          <AppDownload {...{ isHidden, setIsHidden }} />
        </div>
      </div>
      <div className="w-screen h-3/6 bg-thumbnail bg-center bg-contain bg-no-repeat"></div>
    </div>
  );
};

export default Thumbnail;
