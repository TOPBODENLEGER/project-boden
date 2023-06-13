import Footer from "../Footer/Footer";
import Meta from "../seo/Meta";
import dynamic from "next/dynamic";
import { Montserrat } from "next/font/google";
import { useSelector } from "react-redux";
import { useActions } from "@/hooks/useActions";
import MobileMenu from "@/components/MobileMenu/MobileMenu";

const montserrat = Montserrat({ subsets: ["latin"] });
const DynamicHeader = dynamic(() => import("@/components/Header/Header"), {
  ssr: false,
});

export default function Layout({ children, title, description }) {
  const isMenuOpen = useSelector((state) => state.menu.isMenuOpen);
  const { setIsMenuOpen } = useActions();
  return (
    <Meta title={title} description={description}>
      <main className={`${montserrat.className}`}>
        <div className="!sticky !top-0 backdrop-blur-sm bg-[#ffffffb5] z-30">
          <DynamicHeader handleMobileMenu={() => setIsMenuOpen()} />
        </div>
        {isMenuOpen && (
          <MobileMenu
            isMobileMenu={isMenuOpen}
            handleMobileMenu={() => setIsMenuOpen()}
          />
        )}
        {children}
        <Footer />
      </main>
    </Meta>
  );
}
