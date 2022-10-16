import React from "react";

interface IHightLightText {
  size?: "xxs" | "xs" | "s" | "m" | "l" | "xl" | "xxl";
  options?: "bold" | "semiBold" | "light";
  children: any;
}

const HighLightText = ({ size, options, children }: IHightLightText) => (
  <div
    className={`${size ? `text-${size}` : `text-m`} ${
      options ? `font-${options}` : `font-normal`
    } font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-purple-600`}
  >
    {children}
  </div>
);

export default HighLightText;
