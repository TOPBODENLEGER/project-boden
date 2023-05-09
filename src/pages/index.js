import Image from "next/image";
import { Inter, Montserrat } from "next/font/google";
import { createClient } from "contentful";
import dynamic from "next/dynamic";
import Slider from "@/components/Slider";
import Banner from "@/components/Banner/Banner";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import { useState } from "react";
import MobileMenu from "@/components/MobileMenu/MobileMenu";

const montserrat = Montserrat({ subsets: ["latin"] });

const DynamicHeader = dynamic(() => import("../components/Header/Header"), {
  ssr: false,
});

export async function getStaticProps() {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY,
  });

  const advantage = await client.getEntries({ content_type: "advantage" });
  const slider = await client.getEntries({ content_type: "slider" });

  return {
    props: {
      advantage: advantage.items,
      slider: slider.items,
    },
  };
}

export default function Home({ advantage, slider }) {
  console.log("advantage", advantage);
  console.log("slider", slider);
  const [isMobileMenu, setIsMobileMenu] = useState(false);
  const handleMobileMenu = () => {
    setIsMobileMenu(!isMobileMenu);
  };
  console.log("isMobileMenu", isMobileMenu);
  return (
    <main className={`${montserrat.className}`}>
      {/* <div>
        <Image src="/images/top2.png" width={300} height={300} />
      </div> */}
      <DynamicHeader handleMobileMenu={() => handleMobileMenu()} />
      <Banner />
      <Footer />
      {isMobileMenu ? (
        <MobileMenu
          isMobileMenu={isMobileMenu}
          handleMobileMenu={() => handleMobileMenu()}
        />
      ) : (
        <></>
      )}

      {/* <Slider items={slider} /> */}
    </main>
  );
}
