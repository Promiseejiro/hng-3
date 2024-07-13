"use client";
import { useState, useEffect } from "react";
import CartTable from "../../compnent/CartTable";
import Footer from "../../compnent/Footer";
import Header from "../../compnent/Header";
import OrderSummary from "../../compnent/OrderSumary";
import Typography from "../../compnent/Typograhy";
import style from "./index.module.css";
import Link from "next/link";
import Toast from "../../compnent/Toast";
import toast from "react-hot-toast";
import Button from "../../compnent/Button";

const Checkout = () => {
  const [savedProduct, setSavedProduct] = useState([]);
  const [total, setTotal] = useState(0);
  const [cartCount, setCountCount] = useState(0);

  const calculateTotal = (arr) => {
    return arr.reduce((accumulator, item) => {
      const value = item.qty * item.price;
      return accumulator + value;
    }, 0);
  };

  const actionInProduct = (id, action) => {
    let newProduct;
    if (action === "increase") {
      newProduct = savedProduct.map((product) =>
        product.id === id ? { ...product, qty: product.qty + 1 } : product
      );
    } else if (action === "decrease") {
      newProduct = savedProduct.map((product) =>
        product.id === id ? { ...product, qty: product.qty + 1 } : product
      );
    } else if (action === "clear") {
      newProduct = savedProduct.filter((product) => product.id !== id);
      toast(<Toast text={"Item remove"} type="danger" />);
      setSavedProduct([]);
    } else if (action === "remove") {
      newProduct = [];
      toast(<Toast text={"Cart cleared"} type="danger" />);
      setSavedProduct([]);
    }
    localStorage.setItem("timbo-product", JSON.stringify(newProduct));
    setTotal(calculateTotal(newProduct));
    setCountCount(newProduct.length);
    setSavedProduct(newProduct);
  };

  const checkOutSuccess = () => {
    setSavedProduct([]);
    localStorage.removeItem("timbo-product");
  };
  

  useEffect(() => {
    let savedProduct = JSON.parse(localStorage.getItem("timbo-product"));
    savedProduct && setTotal(calculateTotal(savedProduct));
    savedProduct && savedProduct && setSavedProduct(savedProduct);
    if (savedProduct) {
      setCountCount(savedProduct.length);
    }
  }, []);

  return (
    <div>
      <div className={style.main_container}>
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
        <div className={style.header}>
          <Typography
            fontWeight="700"
            size="25px"
            lineHeight="35px"
            marginHorizontal="20px"
          >
            Checkout
          </Typography>
        </div>
        {savedProduct.length > 0 ? (
          <div className={style.flex_container}>
            <div className={style.flex_item_1}>
              <CartTable
                savedProduct={savedProduct}
                actionInProduct={actionInProduct}
              />
              {/* <div className={style.clearCarBtn}>
                {" "}
                <Button
                  verticalPadding="5px"
                  horizontalPadding="10px"
                  clickHandler={() => {
                    actionInProduct("clear");
                  }}
                >
                </Button>
              </div> */}
            </div>

            <div className={style.flex_item_2}>
              <OrderSummary total={total} checkOutSuccess={checkOutSuccess} />
            </div>
          </div>
        ) : (
          <div className={style.empty_cart}>
            <div>
              <Typography
                fontWeight="500"
                size="18px"
                lineHeight="35px"
                marginHorizontal="20px"
              >
                Cart is empty
              </Typography>
            </div>
          </div>
        )}
        <div className={style.back_container}>
          {" "}
          <Link href="/" className={style.link}>
            <Typography
              fontWeight="500"
              size="14px"
              lineHeight="35px"
              marginHorizontal="20px"
              color=" #056050"
            >
              Continue shopping
            </Typography>
          </Link>
        </div>

        <div></div>

        <Footer />
      </div>
    </div>
  );
};

export default Checkout;
