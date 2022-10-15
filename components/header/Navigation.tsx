import React from "react";
import AppDownload from "../common/AppDownload";

interface INavigationProps {
  handleClick: (index: number) => void;
}

const Navigation = ({ handleClick }: INavigationProps) => {
  const liText = ["소개", "특징", "문의"];

  return (
    <ul className="inline-block">
      {liText.map((text, index) => (
        <li
          className="inline-block mx-4 my-1 cursor-pointer"
          key={`li_${index}`}
        >
          <a onClick={() => handleClick(index)}>{text}</a>
        </li>
      ))}
    </ul>
  );
};

export default Navigation;
