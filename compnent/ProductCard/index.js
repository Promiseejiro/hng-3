import Button from "../Button";
// import FavoriteBtn from "../FavouriteBtn";
import Rating from "../Rating";
import Typography from "../Typograhy";
import style from "./index.module.css";
import toast from "react-hot-toast";
import Toast from "../Toast";
import Link from "next/link";
import Image from "next/image";
import { MdFavorite } from "react-icons/md";
import { useState } from "react";
const Product = ({ id, image, name, rating, price, updateCartCount }) => {
  const [liked, setLiked] = useState(false);
  const addToCart = () => {
    let savedProduct = JSON.parse(localStorage.getItem("timbo-product"));
    if (!savedProduct) {
      savedProduct = [{ id, image, name, rating, price, qty: 1 }];
      localStorage.setItem("timbo-product", JSON.stringify(savedProduct));
      updateCartCount(savedProduct.length);
      toast(<Toast text={"Item Added to cart"} type="success" />);
    } else {
      const prevProduct = localStorage.getItem("timbo-product");
      const checkIfProductIsincart = JSON.parse(prevProduct).filter(
        (product) => product.id === id
      );
      if (checkIfProductIsincart.length === 1) {
        toast(<Toast text={"Item Already in cart"} type="success" />);
      } else {
        savedProduct = [
          ...savedProduct,
          { id, image, name, rating, price, qty: 1 },
        ];
        toast(<Toast text={"Item Added to cart"} type="success" />);
        updateCartCount(savedProduct.length);
        localStorage.setItem("timbo-product", JSON.stringify(savedProduct));
      }
    }
  };
  return (
    <div className={style.container}>
      <MdFavorite
        style={{ color: liked ? "red" : "" }}
        className={style.like_btn}
        onClick={() => {
          setLiked(true);
        }}
      />
      <Link href={`/${id}`}>
        <div className={style.image_container}>
          <Image
            alt="Product Image"
            src={image}
            onClick={() => {}}
            width={500}
            height={500}
            className={style.image}
          />
        </div>
        <div className={style.product_info}>
          <div className={style.rating}>
            <Rating rating={rating} />
          </div>
          <p className={style.name}>{name}</p>
          <p className={style.productPrice}>&#8358;{price.toLocaleString()}</p>
        </div>
      </Link>
      <div className={style.btn_container}>
        <Button
          textSize="12px"
          fontWeight="300"
          verticalPadding="5px"
          clickHandler={() => {
            addToCart();
          }}
        >
          Add to cart
        </Button>
      </div>
    </div>
  );
};

export default Product;
