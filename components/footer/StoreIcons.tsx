import Image from "next/image";
import React from "react";

const StoreIcons = () => (
  <div className="w-full h-14 flex flex-row justify-center">
    <div className="mx-4 item-animation">
      <Image
        width={140}
        height={64}
        src="/icons/app-store-badge.svg"
        alt="app-store-badge"
      />
    </div>
    <div className="mx-4 item-animation">
      <Image
        width={140}
        height={64}
        src="/icons/play-store-badge.svg"
        alt="play-store-badge"
      />
    </div>
  </div>
);

export default StoreIcons;
