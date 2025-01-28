'use client'

import Blog from "@/components/Blog";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import News from "@/components/News";
import News2 from "@/components/News2";
import NewsJustDesktop from "@/components/NewsJustForDesktop";
import Quote from "@/components/Quote";

const Client = () => {

  return (
    <>
      <Header />
      <News />
      <Quote />
      <Blog />
      <News2 />
      <NewsJustDesktop />
      <Footer />

    </>

  );
}

export default Client
