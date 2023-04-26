import Image from "next/image";
import { Inter } from "next/font/google";
import { createClient } from "contentful";
import Slider from "@/components/Slider";

const inter = Inter({ subsets: ["latin"] });

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
  return (
    <main className={`${inter.className}`}>
      <h1>Top Bodenleger</h1>
      <Slider items={slider} />
    </main>
  );
}
