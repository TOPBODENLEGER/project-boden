import Image from "next/image";

const Banner = () => {
  return (
    <div>
      <Image
        src="/images/banner1.png"
        width={3900}
        height={300}
        style={{
          width: "100%",
          height: "625px",
          objectFit: "cover",
          backgroundAttachment: "fixed",
        }}
      />
    </div>
  );
};
export default Banner;
