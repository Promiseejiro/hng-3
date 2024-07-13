import Button from "../Button";
import Product from "../ProductCard";
import Typography from "../Typograhy";
import style from "./index.module.css";
import { useState, useEffect } from "react";
import Image from "next/image";
import toast from "react-hot-toast";
import Toast from "../Toast";
import axios from "axios";
const BestSellersProduct = ({ products, updateCartCount }) => {
  console.log(products);
  const [singleProd, setSingleProd] = useState();
  const addToCart = () => {
    let savedProduct = JSON.parse(localStorage.getItem("timbo-product"));
    if (!savedProduct) {
      savedProduct = [
        {
          id: singleProd.id,
          image: singleProd.image,
          name: singleProd.name,
          rating: 4,
          price: singleProd.price,
          qty: 1,
        },
      ];
      localStorage.setItem("timbo-product", JSON.stringify(savedProduct));
    } else {
      const prevProduct = localStorage.getItem("timbo-product");
      const checkIfProductIsincart = JSON.parse(prevProduct).filter(
        (product) => product.id === singleProd.id
      );
      if (checkIfProductIsincart.length > 0) {
        toast(<Toast text={"Item Already in cart"} type="success" />);
      } else {
        savedProduct = [
          ...savedProduct,
          {
            id: singleProd.id,
            image: singleProd.image,
            name: singleProd.name,
            rating: 4,
            price: singleProd.price,
            qty: 1,
          },
        ];
        toast(<Toast text={"Item added to cart"} type="success" />);
        updateCartCount(savedProduct.length);
        localStorage.setItem("timbo-product", JSON.stringify(savedProduct));
      }
    }
  };

  const getProduct = async () => {
    try {
      const response = await axios.get(
        `../../api/single/7d4293981df24a689cc2bfa6c6ead2d2`
      );
      if (response.data) {
        const itemdate = {
          id: response.data.id,
          image: `https://api.timbu.cloud/images/${response.data.photos[0].url}`,
          name: response.data.name,
          des: response.data.description,
          price: response.data.current_price,
        };
        setSingleProd(itemdate);
      }
    } catch (error) {
      console.error("There was an error making the request:", error);
    }
  };
  useEffect(() => {
    getProduct();
  }, []);
  return (
    <section>
      <div className={style.flex_container}>
        <div className={`${style.first_container} ${style.content}`}>
          {singleProd && (
            <div className={style.singleproductDetail}>
              <div className={style.image_container}>
                <Image
                  src={singleProd.image}
                  className={style.image}
                  alt=""
                  width={500}
                  height={500}
                />
              </div>
              <div className={style.singleproductcontent}>
                <Typography
                  fontWeight="500"
                  size="16px"
                  lineHeight="25px"
                  align="left"
                  width="65%"
                  marginVertical="0"
                >
                  {singleProd.name}
                </Typography>
                <Typography
                  fontWeight="500"
                  size="16px"
                  lineHeight="25px"
                  align="left"
                  width="65%"
                  marginVertical="0"
                >
                  {singleProd.price}
                </Typography>
                <div className={style.btn_container}>
                  <Button
                    fontWeight="400"
                    textSize="14px"
                    verticalPadding="5px"
                    horizontalPadding="40px"
                    verticalMargin="10px"
                    clickHandler={() => {
                      addToCart();
                    }}
                  >
                    Add to cart
                  </Button>
                </div>
              </div>
            </div>
          )}
        </div>

        <div className={style.second_flex}>
          <div className={style.card_list}>
            {products.slice(0, 6).map((item, index) => (
              <Product
                {...item}
                key={index}
                updateCartCount={updateCartCount}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BestSellersProduct;
