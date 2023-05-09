import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
} from "@chakra-ui/react";
import Link from "next/link";
import Image from "next/image";
import styles from "./MobileMenu.module.scss";

const MobileMenu = ({ handleMobileMenu, isMobileMenu }) => {
  return (
    <>
      <Drawer onClose={handleMobileMenu} isOpen={isMobileMenu}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader borderBottomWidth="1px" className="mx-auto my-0">
            <Image
              src="/images/top2.png"
              width={90}
              height={300}
              //   className="mr-10"
            />
          </DrawerHeader>
          <DrawerBody>
            <div className={` ${styles.menu} `}>
              <nav>
                <ul className="block">
                  <li>
                    <Link href="/" onClick={handleMobileMenu}>
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link href="/" onClick={handleMobileMenu}>
                      Services
                    </Link>
                  </li>
                  <li>
                    <Link href="/" onClick={handleMobileMenu}>
                      Portfolio
                    </Link>
                  </li>
                  <li>
                    <Link href="/" onClick={handleMobileMenu}>
                      Über uns
                    </Link>
                  </li>
                  <li>
                    <Link href="/" onClick={handleMobileMenu}>
                      Kontakt
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default MobileMenu;
