import Image from "next/image";
import styles from "./Header.module.scss";
import Link from "next/link";
import { RxHamburgerMenu } from "react-icons/rx";
import { Media } from "../../media";

const Header = ({ handleMobileMenu }) => {
  console.log("handleMobileMenu", handleMobileMenu);
  return (
    <>
      <Media greaterThanOrEqual="lg">
        <div className="flex justify-center items-center">
          <div
            className={`flex justify-between items-center lg:w-[80%] ${styles.menu} `}
          >
            <Link href="/">
              <Image
                src="/images/top2.png"
                width={150}
                height={84}
                alt="logo"
                //   className="mr-10"
              />
            </Link>
            <nav>
              <ul className="flex justify-around">
                <li>
                  <Link href="/">Home</Link>
                </li>
                <li>
                  <Link href="/#services">Services</Link>
                </li>
                <li>
                  <Link href="/#company">Über uns</Link>
                </li>
                <li>
                  <Link href="/#portfolio">Portfolio</Link>
                </li>
                <li>
                  {" "}
                  <Link href="/#contact">Kontakt</Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </Media>
      <Media lessThan="lg">
        <div className="flex justify-between items-center">
          <Link href="/">
            <Image
              src="/images/top2.png"
              width={150}
              height={84}
              alt="logo"
              //   className="mr-10"
            />
          </Link>
          <button
            className="p-4 bg-[#0097B2] text-white cursor-pointer mr-3 rounded-lg hover:bg-white hover:text-[#0097B2] duration-200 hover:border-2 hover:border-[#0097B2] border-2 border-[#0097B2]"
            onClick={handleMobileMenu}
          >
            <RxHamburgerMenu size={30} />
          </button>
        </div>
      </Media>
    </>
  );
};
export default Header;
