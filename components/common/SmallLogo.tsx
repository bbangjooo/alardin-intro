import React from "react";

type SmallLogoProps = {
  width?: number;
  height?: number;
  fill?: string;
};

const SmallLogo = ({ width, height, fill, ...etc }: SmallLogoProps) => (
  <svg
    width={`${width}`}
    height={`${height}`}
    viewBox="0 0 120 96"
    {...etc}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M88.1542 35.4371C92.3957 32.1207 95.1273 26.9629 95.1273 21.1636C95.1273 11.1622 87.0197 3.05453 77.0182 3.05453C71.2189 3.05453 66.0567 5.78617 62.7447 10.0276C58.1498 8.3389 53.184 7.41817 48 7.41817C42.816 7.41817 37.8546 8.3389 33.2553 10.0276C29.9433 5.78617 24.7811 3.05453 18.9818 3.05453C8.98038 3.05453 0.872742 11.1622 0.872742 21.1636C0.872742 26.9629 3.60438 32.1251 7.84583 35.4371C6.15711 40.032 5.23638 44.9978 5.23638 50.1818C5.23638 73.7978 24.384 92.9455 48 92.9455C56.1862 92.9455 63.8313 90.6458 70.3287 86.6574C71.8866 90.096 75.2029 92.5614 79.1302 92.9018V92.9455H90.7593V50.7534H90.7506C90.7506 50.5614 90.7593 50.3738 90.7593 50.1818C90.7593 45.0022 89.8386 40.0364 88.1498 35.4371H88.1542ZM48 71.5636C36.192 71.5636 26.6182 61.9898 26.6182 50.1818C26.6182 38.3738 36.192 28.8 48 28.8C59.808 28.8 69.3818 38.3738 69.3818 50.1818C69.3818 61.9898 59.808 71.5636 48 71.5636V71.5636Z"
      className="fill-primary_600 dark:fill-white"
    />
  </svg>
);

export default SmallLogo;
