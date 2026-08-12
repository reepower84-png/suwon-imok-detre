import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Overview from "@/components/Overview";
import Benefit from "@/components/Benefit";
import Location from "@/components/Location";
import Premium from "@/components/Premium";
import Gallery from "@/components/Gallery";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import FloatingCall from "@/components/FloatingCall";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Overview />
        <Benefit />
        <Location />
        <Premium />
        <Gallery />
        <Contact />
      </main>
      <Footer />
      <FloatingCall />
    </>
  );
}
