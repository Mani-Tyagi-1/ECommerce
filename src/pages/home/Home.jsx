import React, { useContext } from "react";
import Layout from "../../components/layout/Layout";
import myContext from "../../contexts/data/MyContext";
import HeroSection from "../../components/herosection/HeroSection";
import Filter from "../../components/filter/Filter";
import ProductCard from "../../components/productcard/ProductCard";
import Testimonial from "../../components/testimonials/Testimonial";

function Home() {

  const context = useContext(myContext);
  console.log(context);

  
  return (
    <Layout>
      <HeroSection />
      <Filter />
      <ProductCard />
      <Testimonial/>
    </Layout>
  );
}

export default Home;
