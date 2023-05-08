import Image from "next/image";
import styles from "./Header.module.scss";
import Link from "next/link";
import { RxHamburgerMenu } from "react-icons/rx";
import { Media } from "../../media";

const Header = () => {
  return (
    <>
      <Media greaterThanOrEqual="lg">
        <div className="flex justify-center items-center">
          <div
            className={`flex justify-between items-center lg:w-[80%] ${styles.menu} `}
          >
            <Image
              src="/images/top2.png"
              width={150}
              height={300}
              //   className="mr-10"
            />
            <nav>
              <ul className="flex justify-around">
                <li>
                  <Link href="/">Home</Link>
                </li>
                <li>
                  <Link href="/">Services</Link>
                </li>
                <li>
                  <Link href="/">Portfolio</Link>
                </li>
                <li>
                  <Link href="/">Über uns</Link>
                </li>
                <li>
                  {" "}
                  <Link href="/">Kontakt</Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </Media>
      <Media lessThan="lg">
        <div className="flex justify-between items-center">
          <Image
            src="/images/top2.png"
            width={150}
            height={300}
            //   className="mr-10"
          />
          <div className="p-4 bg-[#0097B2] text-white cursor-pointer mr-3 rounded-lg hover:bg-white hover:text-[#0097B2] duration-200 hover:border-2 hover:border-[#0097B2] border-2 border-[#0097B2]">
            <RxHamburgerMenu size={30} />
          </div>
        </div>
      </Media>
    </>
  );
};
export default Header;
