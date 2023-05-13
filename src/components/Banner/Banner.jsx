import Image from "next/image";
import Link from "next/link";
import { FaFacebookSquare } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { AiFillInstagram } from "react-icons/ai";
import styles from "./Banner.module.scss";

const Banner = () => {
  return (
    <div className="relative">
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
        <h1 className={`font-bold leading-[1.1] ${styles.h1}`}>
          Boden Service bietet rundum Service im Bereich Bodenverlegung an.
        </h1>
        <ul className={styles.ul}>
          <li className="flex items-center mr-3">
            <Image
              src="/images/punkte.png"
              width={30}
              height={30}
              className="mr-2"
              alt="img"
            />
            <p className={styles.p}>dringend</p>
          </li>
          <li className="flex items-center mr-3">
            <Image
              src="/images/punkte.png"
              width={30}
              height={30}
              className="mr-2"
              alt="img"
            />
            <p className={styles.p}>schnell</p>
          </li>
          <li className="flex items-center mr-3">
            <Image
              src="/images/punkte.png"
              width={30}
              height={30}
              className="mr-2"
              alt="img"
            />
            <p className={styles.p}>zuverlässig</p>
          </li>
        </ul>
        <p className={`mb-[30px] ${styles.p}`}>
          Alle Arbeiten werden profisional ausgeführt!
        </p>
        <div className={styles.buttons}>
          <Link href="tel:+4915227465638">
            <div
              className={`w-[350px] h-[60px] rounded-[50px] bg-[#0097B2] hover:bg-[#51c4d8] duration-200 flex justify-center items-center text-white font-bold mr-9 ${styles.buttonContact}`}
            >
              CONTACT UNS
            </div>
          </Link>
          <div className={styles.icons}>
            <Link
              href="https://www.facebook.com"
              className="mr-8 hover:text-[#A2ACD7] duration-200 text-[#64486B]"
            >
              <FaFacebookSquare size={42} />
            </Link>
            <Link
              href="https://www.facebook.com"
              className="mr-8 hover:text-[#A2ACD7] duration-200 text-[#64486B]"
            >
              <IoLogoWhatsapp size={43} />
            </Link>
            <Link href="https://www.facebook.com">
              <AiFillInstagram
                size={45}
                className="hover:text-[#A2ACD7] duration-200 text-[#64486B]"
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Banner;
