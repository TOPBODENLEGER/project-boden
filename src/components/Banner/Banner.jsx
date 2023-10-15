import Image from "next/image";
import Link from "next/link";
import { FaFacebookSquare, FaTelegram } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { AiFillInstagram } from "react-icons/ai";
import { motion } from "framer-motion";
import styles from "./Banner.module.scss";

const textAnimation = {
  hidden: {
    x: -100,
    opacity: 0,
  },
  visible: (custom) => ({
    x: 0,
    opacity: 1,
    transition: { delay: custom * 0.2 },
  }),
};

const Banner = () => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      className="relative"
      viewport={{ once: true }}
    >
      <Image
        src="/images/banner1.png"
        width={3900}
        height={625}
        style={{
          width: "100%",
          height: "625px",
          objectFit: "cover",
          backgroundAttachment: "fixed",
        }}
        alt="banner"
      />
      <div className={`absolute top-0 ${styles.wrap}`}>
        <motion.h1
          custom={1}
          variants={textAnimation}
          className={`font-bold leading-[1.1] ${styles.h1}`}
        >
          Boden Service bietet rundum Service im Bereich Bodenverlegung an.
        </motion.h1>
        <ul className={styles.ul}>
          <motion.li
            custom={1.5}
            variants={textAnimation}
            className="flex items-center mr-3"
          >
            <Image
              src="/images/punkte.png"
              width={30}
              height={30}
              className="mr-2"
              alt="img"
            />
            <p className={styles.p}>dringend</p>
          </motion.li>
          <motion.li
            custom={2}
            variants={textAnimation}
            className="flex items-center mr-3"
          >
            <Image
              src="/images/punkte.png"
              width={30}
              height={30}
              className="mr-2"
              alt="img"
            />
            <p className={styles.p}>schnell</p>
          </motion.li>
          <motion.li
            custom={2.5}
            variants={textAnimation}
            className="flex items-center mr-3"
          >
            <Image
              src="/images/punkte.png"
              width={30}
              height={30}
              className="mr-2"
              alt="img"
            />
            <p className={styles.p}>zuverlässig</p>
          </motion.li>
        </ul>
        <motion.p
          custom={3}
          variants={textAnimation}
          className={`mb-[30px] ${styles.p}`}
        >
          Alle Arbeiten werden profisional ausgeführt!
        </motion.p>
        <motion.div
          custom={3.5}
          variants={textAnimation}
          className={styles.buttons}
        >
          <a href="tel:+4915227465638">
            <div
              className={`w-[350px] h-[60px] rounded-[50px] bg-[#0097B2] hover:bg-[#51c4d8] duration-200 flex justify-center items-center text-white font-bold ${styles.buttonContact}`}
            >
              CONTACT UNS
            </div>
          </a>
          <div className={styles.icons}>
            <Link
              href="https://t.me/+4915227465638"
              className="mr-8 hover:text-[#A2ACD7] duration-200 text-[#64486B]"
            >
              <FaTelegram size={42} />
            </Link>
            <Link
              href="https://wa.me/+4915227465638"
              className="mr-8 hover:text-[#A2ACD7] duration-200 text-[#64486B]"
            >
              <IoLogoWhatsapp size={43} />
            </Link>
            <Link href="https://www.instagram.com/topbodenservice/">
              <AiFillInstagram
                size={45}
                className="hover:text-[#A2ACD7] duration-200 text-[#64486B]"
              />
            </Link>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};
export default Banner;
