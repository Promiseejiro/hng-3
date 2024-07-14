"use client";
import style from "./index.module.css";
import Typography from "../../compnent/Typograhy";
import Button from "../../compnent/Button";
import Header from "../../compnent/Header";
import Footer from "../../compnent/Footer";
import { useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import toast from "react-hot-toast";
import Toast from "../../compnent/Toast";
import Loader from "@/compnent/Loader";
const SingleProduct = ({ params }) => {
  const [savedProduct, setSavedProduct] = useState([]);
  const [currentProduct, setCurrentProduct] = useState([]);
  const [isLoading, setIsloading] = useState(true);
  const [cartCount, setCountCount] = useState(0);
  const [quantity, setQuantity] = useState(0);
  const updateCartCount = (count) => {
    setCountCount(count);
  };
  const addToCart = () => {
    console.log("first");
    let savedProduct = JSON.parse(localStorage.getItem("timbo-product"));
    if (!savedProduct) {
      savedProduct = [
        {
          id: currentProduct.id,
          image: currentProduct.image,
          name: currentProduct.name,
          rating: currentProduct.rating,
          price: currentProduct.price,
          url: currentProduct.url,
          qty: 1,
        },
      ];
      localStorage.setItem("timbo-product", JSON.stringify(savedProduct));
      updateCartCount(savedProduct.length);
      toast(<Toast text={"Item Added to cart"} type="success" />);
    } else {
      const prevProduct = localStorage.getItem("timbo-product");
      const checkIfProductIsincart = JSON.parse(prevProduct).filter(
        (product) => product.id === params.product
      );
      if (checkIfProductIsincart.length === 1) {
        toast(<Toast text={"Item Already in cart"} type="success" />);
      } else {
        savedProduct = [
          ...savedProduct,
          {
            id: currentProduct.id,
            image: currentProduct.image,
            name: currentProduct.name,
            rating: currentProduct.rating,
            price: currentProduct.price,
            url: currentProduct.url,
            qty: 1,
          },
        ];

        toast(<Toast text={"Item Added to cart"} type="success" />);
        updateCartCount(savedProduct.length);
        setSavedProduct(savedProduct);
        localStorage.setItem("timbo-product", JSON.stringify(savedProduct));
      }
    }
  };

  const actionInProduct = (id, action) => {
    console.timeLog(savedProduct);
    let newProduct;
    if (action === "increase") {
      newProduct = savedProduct.map((product) =>
        product.id === id ? { ...product, qty: product.qty + 1 } : product
      );
      setCurrentProduct({ ...currentProduct, qty: currentProduct.qty + 1 });
    } else if (action === "decrease") {
      newProduct = savedProduct.map((product) =>
        product.id === id ? { ...product, qty: product.qty - 1 } : product
      );
      setCurrentProduct({ ...currentProduct, qty: currentProduct.qty - 1 });
    } else if (action === "clear") {
      newProduct = savedProduct.filter((product) => product.url !== url);
      toast(<Toast text={"Item remove"} type="danger" />);
      setSavedProduct([]);
    } else if (action === "remove") {
      newProduct = [];
      toast(<Toast text={"Cart cleared"} type="danger" />);
      setSavedProduct([]);
    }
    localStorage.setItem("timbo-product", JSON.stringify(newProduct));
    setSavedProduct(newProduct);
  };

  const getProduct = async () => {
    try {
      const response = await axios.get(`../../api/single/${params.product}`);
      if (response.data) {
        const itemdate = {
          id: response.data.id,
          image: `https://api.timbu.cloud/images/${response.data.photos[0].url}`,
          name: response.data.name,
          des: response.data.description,
          price: response.data.current_price,
        };
        setCurrentProduct(itemdate);
        setIsloading(false);
      }
    } catch (error) {
      console.error("There was an error making the request:", error);
    }
  };

  useEffect(() => {
    getProduct();
    const localPro = localStorage.getItem("timbo-product");
    let savedProduct = localPro ? JSON.parse(localPro) : [];
    console.log(params.product);
    const productexistIncart = savedProduct.filter(
      (prod) => prod.id === params.product
    );
    if (productexistIncart) {
      // setQuantity(productexistIncart[0].qty);
    }
    if (savedProduct) {
      setCountCount(savedProduct.length);
    }
  }, []);

  return (
    <section>
      {!isLoading ? (
        <div>
          {" "}
          <Header count={cartCount} />
          <div className={style.back_container}>
            <Link href="/" className={style.link}>
              <Typography
                fontWeight="500"
                size="18px"
                lineHeight="35px"
                color=" #056050"
                marginVertical="0"
              >
                Back
              </Typography>
            </Link>
          </div>
          {currentProduct && (
            <div>
              <div className={style.flex_container}>
                <div className={style.flex_item}>
                  <div>
                    <h4 className={style.productName}>{currentProduct.name}</h4>
                    <h5 className={style.productDetails}>
                      <span className={style.details}>Product Details:</span>{" "}
                      {currentProduct.des}
                    </h5>
                    <div className={style.btn_container}>
                      <div className={style.price_container}>
                        <Typography
                          fontWeight="500"
                          size="16px"
                          lineHeight="25px"
                        >
                          &#8358;{currentProduct.price.toLocaleString()}
                        </Typography>
                      </div>
                      <div>
                        <div className={style.quty}>
                          <span
                            className={style.buton}
                            onClick={() => {
                              actionInProduct(currentProduct.id, "decrease");
                            }}
                          >
                            -
                          </span>

                          <span className={style.value}>
                            {savedProduct.filter(
                              (prod) => prod.id === params.product
                            )[0]
                              ? savedProduct.filter(
                                  (prod) => prod.id === params.product
                                )[0].qty
                              : 0}
                          </span>
                          <span
                            className={style.buton}
                            onClick={() => {
                              actionInProduct(currentProduct.id, "increase");
                            }}
                          >
                            +
                          </span>
                        </div>
                        <Button verticalMargin="10px" clickHandler={addToCart}>
                          Add to cart
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={style.flex_item}>
                  <div>
                    <Image
                      alt="Product Image"
                      src={currentProduct.image}
                      width={500}
                      height={50}
                      className={style.image}
                    />
                  </div>
                </div>
              </div>
            </div>
          )}
          <Footer />
        </div>
      ) : (
        <Loader />
      )}
    </section>
  );
};

export default SingleProduct;
