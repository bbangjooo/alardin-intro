/* eslint-disable @next/next/no-sync-scripts */

import type { NextPage } from "next";
import Head from "next/head";
import { useEffect, useRef, useState } from "react";
import ChannelService from "../components/channel/channelService";
import HeadMeta from "../components/common/HeadMeta";
import Popup from "../components/common/PopUp";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import Mainer from "../components/mainer/Mainer";

const Home: NextPage = () => {
  const groupRef = useRef<HTMLDivElement[]>([]);
  const [isHidden, setIsHidden] = useState<boolean>(false);

  useEffect(() => {
    const targets = document.querySelectorAll(".item-animation");

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        console.log(entry);

        if (entry.isIntersecting) {
          entry.target.classList.add("animate-fade-in-up");
        }
      });
    });

    targets.forEach(function (target) {
      target.classList.add("opacity-0");
      observer.observe(target);
    });
  }, []);

  return (
    <div className="w-screen h-screen">
      <HeadMeta />
      <ChannelService />
      <Header {...{ groupRef, isHidden, setIsHidden }} />
      <Mainer {...{ isHidden, setIsHidden }} />
      <Footer />
      <Popup {...{ isHidden, setIsHidden }} />
    </div>
  );
};

export default Home;
