import { Montserrat } from "next/font/google";
import { createClient } from "contentful";
import dynamic from "next/dynamic";
import Slider from "@/components/Slider/Slider";
import Banner from "@/components/Banner/Banner";
import Footer from "@/components/Footer/Footer";
import MobileMenu from "@/components/MobileMenu/MobileMenu";
import Company from "@/components/Company/Company";
import Service from "@/components/Service/Service";
import Head from "next/head";
import { useSelector } from "react-redux";
import { useActions } from "@/hooks/useActions";
import Layout from "@/components/Layout/Layout";

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
  const { setIsCartOpen } = useActions();
  const isCartOpen = useSelector((state) => state.cart.isCartOpen);

  console.log("isCartOpen", isCartOpen);
  console.log("advantage", advantage);
  console.log("slider", slider);
  return (
    <>
      <Layout
        title="TOP BODENSERVICE"
        description="Verlegung neuer Böden (Parkett, Laminat, Vinyl), Professionelles Abschleifen von Parkett und Dielen Versiegelung mit umweltfreundlichem lacken auf Wasserbasis, Öl oder Hartwachsöl. Renovierung alter Holzböden (abschleifen, ölen, versiegeln), Restaurierung von Holztreppen"
      >
        {/* <Head>
        <title>TOP BODENSERVICE</title>
        <link
          rel="apple-touch-icon"
          sizes="57x57"
          href="/apple-icon-57x57.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="60x60"
          href="/apple-icon-60x60.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="72x72"
          href="/apple-icon-72x72.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="76x76"
          href="/apple-icon-76x76.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="114x114"
          href="/apple-icon-114x114.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="120x120"
          href="/apple-icon-120x120.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="144x144"
          href="/apple-icon-144x144.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="152x152"
          href="/apple-icon-152x152.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-icon-180x180.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="192x192"
          href="/android-icon-192x192.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="96x96"
          href="/favicon-96x96.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
        <meta name="theme-color" content="#ffffff" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="Verlegung neuer Böden (Parkett, Laminat, Vinyl), Professionelles Abschleifen von Parkett und Dielen Versiegelung mit umweltfreundlichem lacken auf Wasserbasis, Öl oder Hartwachsöl. Renovierung alter Holzböden (abschleifen, ölen, versiegeln), Restaurierung von Holztreppen"
        />
      </Head>
      <main className={`${montserrat.className}`}>
        <div className="!sticky !top-0 backdrop-blur-sm bg-[#ffffffb5] z-30">
          <DynamicHeader handleMobileMenu={() => setIsCartOpen()} />
        </div>
        <Banner />
        <Service />
        <Company />
        {isCartOpen && (
          <MobileMenu
            isMobileMenu={isCartOpen}
            handleMobileMenu={() => setIsCartOpen()}
          />
        )}
        <Slider items={slider} />
        <Footer />
      </main> */}
        <Banner />
        <Service />
        <Company />
        <Slider items={slider} />
      </Layout>
    </>
  );
}
