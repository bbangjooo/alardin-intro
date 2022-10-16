import Head from "next/head";
import React from "react";

interface IHeadMetaProps {
  title?: string;
  description?: string;
  url?: string;
  image?: string;
}

const HeadMeta = ({ title, description, url, image }: IHeadMetaProps) => {
  return (
    <Head>
      <title>{title || "Alardin"}</title>
      <meta
        name="description"
        content={
          description ||
          "Alardin: 특정시간에만 진행할 수 있는 기능성 게임 플랫폼"
        }
      />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta property="og:title" content={title || "Alardin 앱"} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url || "https://www.alard.in"} />
      <meta
        property="og:image"
        content={image || "https://www.alard.in/meta-image.png"}
      />
      <meta property="og:article:author" content="해치웠나" />
    </Head>
  );
};

export default HeadMeta;
