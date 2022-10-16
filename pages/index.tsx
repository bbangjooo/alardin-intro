import type { NextPage } from "next";
import Head from "next/head";
import { useRef, useState } from "react";
import HeadMeta from "../components/common/HeadMeta";
import Popup from "../components/common/PopUp";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import Mainer from "../components/mainer/Mainer";

const Home: NextPage = () => {
  const groupRef = useRef<HTMLDivElement[]>([]);
  const [isHidden, setIsHidden] = useState<boolean>(false);

  return (
    <div className="w-screen h-screen">
      <div>
        <HeadMeta />
        <Header {...{ groupRef, isHidden, setIsHidden }} />
        <Mainer {...{ isHidden, setIsHidden }} />
        <Footer />
      </div>
      <Popup {...{ isHidden, setIsHidden }} />
    </div>
  );
};

export default Home;
