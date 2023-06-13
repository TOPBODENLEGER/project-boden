import Image from "next/image";
import { BsFillTelephoneFill } from "react-icons/bs";
import { GrMail } from "react-icons/gr";
import { FaFacebookSquare } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { AiFillInstagram } from "react-icons/ai";
import styles from "./Footer.module.scss";
import Link from "next/link";
import { motion } from "framer-motion";

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

const Footer = () => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.2, once: true }}
      className="relative"
      id="contact"
    >
      <div>
        <Image
          src="/images/footer.png"
          width={3900}
          height={500}
          style={{
            width: "100%",
            height: "500px",
            objectFit: "cover",
            backgroundAttachment: "fixed",
          }}
          alt="footer"
        />
      </div>

      <div className={styles.wrap}>
        <div className="flex justify-center">
          <motion.h2
            variants={textAnimationV}
            custom={1}
            className="text-white font-bold"
          >
            Kontakt
          </motion.h2>
        </div>
        <div className="flex justify-center">
          <div className={styles.grid}>
            <motion.div variants={textAnimationOpacity} custom={2}>
              TELEFON:
            </motion.div>
            <motion.div variants={textAnimationOpacity} custom={2}>
              <Link
                href="tel:+4915227465638"
                className="flex justify-start items-center hover:text-[#7acfdf] duration-200"
              >
                <BsFillTelephoneFill className="mr-3" size={20} />
                +49 1522 746 56 38
              </Link>
            </motion.div>
            <motion.div variants={textAnimationOpacity} custom={3}>
              MAIL:
            </motion.div>
            <motion.div variants={textAnimationOpacity} custom={3}>
              <Link
                href="mailto:TOP-BODENSERVICE@GMAIL.COM"
                className="flex justify-start items-center hover:text-[#7acfdf] duration-200"
              >
                <GrMail className="mr-3" size={22} />
                TOP-BODENSERVICE@GMAIL.COM
              </Link>
            </motion.div>
            <motion.div variants={textAnimationOpacity} custom={4}>
              FOLGEN UNS:
            </motion.div>
            <motion.div
              variants={textAnimationOpacity}
              custom={4}
              className="flex"
            >
              <Link
                href="https://www.facebook.com"
                className="mr-6 hover:text-[#7acfdf] duration-200"
              >
                <FaFacebookSquare size={30} />
              </Link>
              <Link
                href="https://wa.me/+4915227465638"
                className="mr-5 hover:text-[#7acfdf] duration-200"
              >
                <IoLogoWhatsapp size={30} />
              </Link>
              <Link href="https://www.instagram.com">
                <AiFillInstagram
                  size={32}
                  className="hover:text-[#7acfdf] duration-200"
                />
              </Link>
            </motion.div>
          </div>
        </div>
        <div className="md:flex md:justify-around md:items-center text-white block text-center">
          <motion.div
            variants={textAnimationOpacity}
            custom={5}
            className="flex justify-center p-2"
          >
            <Image src="/images/top_b.png" width={180} height={99} alt="logo" />
          </motion.div>
          <motion.div
            variants={textAnimationOpacity}
            custom={5}
            className="m-2"
          >
            ©2023 TOP BODENSERVICE
          </motion.div>
          <motion.div variants={textAnimationOpacity} custom={5}>
            <Link href="/impressum" className={`m-2 ${styles.link}`}>
              Impressum
            </Link>
            |
            <Link href="/datenschutz" className={`m-2 ${styles.link}`}>
              Datenschutz
            </Link>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};
export default Footer;
