import Image from "next/image";
import { BsFillTelephoneFill } from "react-icons/bs";
import { GrMail } from "react-icons/gr";
import { FaTelegram } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { AiFillInstagram } from "react-icons/ai";
import styles from "./Footer.module.scss";
import Link from "next/link";

const Footer = () => {
  return (
    <div
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
          <h2 className="text-white font-bold">Kontakt</h2>
        </div>
        <div className="flex justify-center">
          <div className={styles.grid}>
            <div>TELEFON:</div>
            <div className="flex">
              <a
                href="tel:+4915227465638"
                className="flex justify-start items-center hover:text-[#7acfdf] duration-200"
              >
                <BsFillTelephoneFill className="mr-3" size={20} />
                +49 1522 746 56 38;&nbsp;
              </a>
              <a
                href="tel:+491604645544"
                className="flex justify-start items-center hover:text-[#7acfdf] duration-200"
              >
                +49 160 464 55 44
              </a>
            </div>
            <div>MAIL:</div>
            <div>
              <Link
                href="mailto:TOP-BODENSERVICE@GMAIL.COM"
                className="flex justify-start items-center hover:text-[#7acfdf] duration-200"
              >
                <GrMail className="mr-3" size={22} />
                TOP-BODENSERVICE@GMAIL.COM
              </Link>
            </div>
            <div custom={4}>FOLGEN UNS:</div>
            <div custom={4} className="flex">
              <Link
                href="https://t.me/+4915227465638"
                className="mr-6 hover:text-[#7acfdf] duration-200"
              >
                <FaTelegram size={30} />
              </Link>
              <Link
                href="https://wa.me/+4915227465638"
                className="mr-5 hover:text-[#7acfdf] duration-200"
              >
                <IoLogoWhatsapp size={30} />
              </Link>
              <Link href="https://www.instagram.com/topbodenservice/">
                <AiFillInstagram
                  size={32}
                  className="hover:text-[#7acfdf] duration-200"
                />
              </Link>
            </div>
          </div>
        </div>
        <div className="md:flex md:justify-around md:items-center text-white block text-center">
          <div custom={5} className="flex justify-center p-2">
            <Image src="/images/top_b.png" width={180} height={99} alt="logo" />
          </div>
          <div custom={5} className="m-2">
            ©2023 TOP BODENSERVICE
          </div>
          <div custom={5}>
            <Link href="/impressum" className={`m-2 ${styles.link}`}>
              Impressum
            </Link>
            |
            <Link href="/datenschutz" className={`m-2 ${styles.link}`}>
              Datenschutz
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;
