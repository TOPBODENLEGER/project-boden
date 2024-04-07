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
    <div id="al" aria-label="Menu">
      <Drawer onClose={handleMobileMenu} isOpen={isMobileMenu}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader borderBottomWidth="1px" className="mx-auto my-0">
            <Link href="/">
              <Image src="/images/top2.png" width={90} height={51} alt="logo" />
            </Link>
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
                    <Link href="/#services" onClick={handleMobileMenu}>
                      Services
                    </Link>
                  </li>
                  <li>
                    <Link href="/#company" onClick={handleMobileMenu}>
                      Über uns
                    </Link>
                  </li>
                  <li>
                    <Link href="/#portfolio" onClick={handleMobileMenu}>
                      Portfolio
                    </Link>
                  </li>
                  <li>
                    <Link href="/#price" onClick={handleMobileMenu}>
                      Preis
                    </Link>
                  </li>
                  <li>
                    <Link href="/#contact" onClick={handleMobileMenu}>
                      Kontakt
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </div>
  );
};

export default MobileMenu;
