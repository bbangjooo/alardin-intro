import Link from "next/link";
import React from "react";

const Terms = () => {
  const linkData = [
    { link: "/terms/service", name: "서비스 이용약관" },
    { link: "/terms/personal", name: "개인정보처리방침" },
  ];
  return (
    <div className="flex flex-row justify-center items-center m-auto my-2">
      {linkData.map(({ link, name }, index) => (
        <div
          key={`link_${index}`}
          className="m-4 inline-block text-gray_900 font-bold dark:text-white"
        >
          <Link href={link}>{name}</Link>
        </div>
      ))}
    </div>
  );
};

export default Terms;
