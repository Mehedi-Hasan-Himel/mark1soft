"use client";
import Aos from "aos";
import "aos/dist/aos.css";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import PortfolioProjectCard from "@/components/Portfolio/PortfolioProjectCard";
import { useEffect } from "react";

function Page() {
  useEffect(() => {
    Aos.init({
      easing: "ease-out-cubic",
      once: true,
      offset: 50,
      duration: 500,
    });
  }, []);
  return (
    <>
      <Navbar />
      <PortfolioProjectCard />
      <Footer />
    </>
  );
}

export default Page;
