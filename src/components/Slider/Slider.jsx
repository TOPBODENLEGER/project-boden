import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import { motion } from "framer-motion";
import styles from "./Slider.module.scss";

const textAnimationOpacity = {
  hidden: {
    // x: -100,
    opacity: 0,
  },
  visible: (custom) => ({
    // x: 0,
    opacity: 1,
    transition: { delay: custom * 0.3 },
  }),
};

const textAnimationV = {
  hidden: {
    y: 100,
    opacity: 0,
  },
  visible: (custom) => ({
    y: 0,
    opacity: 1,
    transition: { delay: custom * 0.2 },
  }),
};

const Slider = ({ items }) => {
  console.log("items", items);
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.1, once: true }}
      className={styles.container}
      id="portfolio"
    >
      <motion.h2
        variants={textAnimationV}
        custom={1}
        className="font-bold text-white pt-[25px] text-center pb-7"
      >
        Portfolio
      </motion.h2>
      <motion.div variants={textAnimationOpacity} custom={2}>
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
      </motion.div>
    </motion.div>
  );
};
export default Slider;
