import { createClient } from "contentful";
import Slider from "@/components/Slider/Slider";
import Banner from "@/components/Banner/Banner";
import Company from "@/components/Company/Company";
import Price from "@/components/Price/Price";
import Service from "@/components/Service/Service";
import Layout from "@/components/Layout/Layout";

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

export default function Home({ slider }) {
  return (
    <>
      <Layout
        title=""
        description="Parkett schleifen. Verlegung neuer Böden (Parkett, Laminat, Vinyl), Professionelles Abschleifen von Parkett und Dielen Versiegelung mit umweltfreundlichem lacken auf Wasserbasis, Öl oder Hartwachsöl. Renovierung alter Holzböden (abschleifen, ölen, versiegeln), Restaurierung von Holztreppen. Köln, Bergisch Gladbach, Bonn, Düsseldorf"
      >
        <Banner />
        <Service />
        <Company />
        <Slider items={slider} />
        <Price />
      </Layout>
    </>
  );
}
