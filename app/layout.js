import AutoSlider from "./components/AutoSlider";
import BackToTop from "./components/BackToTop";
import Footer from "./components/Footer";
import Header from "./components/Header";
import TopBar from "./components/TopBar";
import "./globals.css";

export const metadata = {
  title: "American Tamil Medical Association",
  description:
    "ATMA is an organization formed to promote charitable work through their foundation (ATMA-CF) nationally and internationally",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <TopBar />
        <Header />
        {children}
        <AutoSlider />
        <Footer />
        <BackToTop />
      </body>
    </html>
  );
}
