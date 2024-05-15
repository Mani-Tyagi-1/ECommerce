import React, { useContext } from "react";
import Layout from "../../components/layout/Layout";
import myContext from "../../contexts/data/MyContext";
import HeroSection from "../../components/herosection/HeroSection";
import Filter from "../../components/filter/Filter";
import ProductCard from "../../components/productcard/ProductCard";
import Testimonial from "../../components/testimonials/Testimonial";
import { useDispatch, useSelector } from "react-redux";
import { addToCart , deleteFromCart } from "../../redux/cartSlide";

function Home() {
  
  return (
    <Layout>
      
      <HeroSection />
     
      <ProductCard />
      <Testimonial />
    </Layout>
  );
}

export default Home;
