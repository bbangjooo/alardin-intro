import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGooglePlay, faAppStore } from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";

interface IAppDownloadProps {
  isHidden: boolean;
  setIsHidden: React.Dispatch<React.SetStateAction<boolean>>;
}

const AppDownload = ({ isHidden, setIsHidden }: IAppDownloadProps) => {
  return (
    <div className="inline-block">
      <button
        className="bg-primary_400 hover:bg-primary_600 text-white px-3 py-2 rounded-md"
        onClick={() => setIsHidden(!isHidden)}
      >
        앱 다운로드
      </button>
    </div>
  );
};

export default AppDownload;
