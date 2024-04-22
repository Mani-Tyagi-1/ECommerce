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

  const dispatch = useDispatch();
  const cartItem = useSelector((state) => state.cart);

  const addCart = () => {
    dispatch(addToCart("shirt"))
  }

  const deleteCart = () => {
    dispatch(deleteFromCart("shirt"));
    
  } 

  console.log(cartItem);


  // const context = useContext(myContext);
  // console.log(context);

  
  return (
    <Layout>
      <div className="flex gap-5 justify-center">
        <button className="bg-gray-400" onClick={() => addCart()}>
          ADD
        </button>
        <button className="bg-gray-400"   onClick={() => deleteCart()}>
          Remove
        </button>
      </div>
      <HeroSection />
      <Filter />
      <ProductCard />
      <Testimonial />
    </Layout>
  );
}

export default Home;
