"use client";
import BestSellers from "@/compnent/BestSellers";
import BestSellersProduct from "@/compnent/BestSellersProduct";
import Category from "@/compnent/Category";
import FeaturedProduct from "@/compnent/FeaturedProducts";
import Header from "@/compnent/Header";
import Hero from "@/compnent/Hero";
import Footer from "@/compnent/Footer";
import ShippingCards from "@/compnent/ShippingCard";
import { useEffect, useState } from "react";
import axios from "axios";
import CategoryCard from "@/compnent/Category/CategotyCard";
import Loader from "@/compnent/Loader";
const HomePage = () => {
  const [products, setProducts] = useState([]);
  const [bestSellerProduct, setBestSelerProd] = useState([]);
  const [cartCount, setCountCount] = useState(0);
  const [page, setPage] = useState(1);
  const [isLoading, seIsLoading] = useState(false);
  const updateCartCount = (count) => {
    setCountCount(count);
  };

  const getProduct = async () => {
    try {
      let productArray = [];
      seIsLoading(true);
      const response = await axios.get(`/api/product?page=1`);
      response.data.product.items.map((item) => {
        const itemdate = {
          id: item.id,
          image: `https://api.timbu.cloud/images/${item.photos[0].url}`,
          name: item.name,
          des: item.description,
          price: item.current_price[0].NGN[0],
        };
        productArray.push(itemdate);
        setProducts(productArray);
        seIsLoading(false);
      });
    } catch (error) {
      console.error("There was an error making the request:", error);
    }
  };

  const fetchPagePerPage = async (page) => {
    console.log(page);
    try {
      let productArray = [];
      const response = await axios.get(`/api/product?page=${page}`);
      response.data.product.items.map((item) => {
        const itemdate = {
          id: item.id,
          image: `https://api.timbu.cloud/images/${item.photos[0].url}`,
          name: item.name,
          des: item.description,
          price: item.current_price[0].NGN[0],
        };
        console.log(productArray);
        productArray.push(itemdate);
        setProducts(productArray);
      });
      return productArray;
    } catch (error) {
      console.error("There was an error making the request:", error);
    }
  };

  useEffect(() => {
    getProduct();
  }, []);

  useEffect(() => {
    let savedProduct = JSON.parse(localStorage.getItem("timbo-product"));
    if (savedProduct) {
      setCountCount(savedProduct.length);
    }
  }, []);

  return (
    <section>
      {isLoading ? (
        <Loader />
      ) : (
        <div>
          <Header count={cartCount} />
          <Hero />
          <Category />
          <FeaturedProduct
            updateCartCount={updateCartCount}
            products={products}
            loadMorePoduct={fetchPagePerPage}
          />
          <BestSellers updateCartCount={updateCartCount} />
          <BestSellersProduct
            updateCartCount={updateCartCount}
            products={products}
          />
          <ShippingCards />
          <Footer />
        </div>
      )}
    </section>
  );
};

export default HomePage;
