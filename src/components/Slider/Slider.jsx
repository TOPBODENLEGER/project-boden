import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import styles from "./Slider.module.scss";

const Slider = ({ items }) => {
  console.log("items", items);
  return (
    <div className={styles.container} id="portfolio">
      <h2 className="font-bold text-white pt-[25px] text-center pb-7">
        Portfolio
      </h2>
      <Swiper
        navigation={true}
        pagination={{ clickable: true }}
        modules={[Navigation, Pagination]}
      >
        {items.map((item) => {
          return (
            <SwiperSlide
              key={item.sys.id}
              style={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Image
                alt="image"
                width={item.fields.image.fields.file.details.image.width}
                height={item.fields.image.fields.file.details.image.height}
                style={{
                  width: item.fields.image.fields.file.details.image.width,
                  height: "700px",
                  objectFit: "cover",
                  backgroundAttachment: "fixed",
                }}
                src={`https:${item.fields.image.fields.file.url}`}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};
export default Slider;
