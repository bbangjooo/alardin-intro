import Image from "next/image";
import React from "react";

interface ILogoProps {
  size: "large" | "medium" | "small";
}

const Logo = ({ size }: ILogoProps) => {
  const squareSize = size === "large" ? 100 : size === "small" ? 60 : 40;
  return (
    <Image
      width={squareSize}
      height={squareSize}
      src="/favicon.ico"
      alt="logo_image"
    />
  );
};

export default Logo;
