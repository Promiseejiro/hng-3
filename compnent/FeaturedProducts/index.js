import Product from "../ProductCard";
import Typography from "../Typograhy";
import style from "./index.module.css";
import { useEffect, useState } from "react";
import axios from "axios";
import Button from "../Button";
const FeaturedProduct = ({ updateCartCount, products, loadMorePoduct }) => {
  const [page, setPage] = useState(1);
  const [prevLoading, setPrevLoading] = useState(false);
  const [nextLoading, setNextLoading] = useState(false);
  return (
    <div className={style.section}>
      <Typography
        fontWeight="600"
        size="30px"
        lineHeight="40px"
        align="left"
        marginVertical="20px"
      >
        Featured Product
      </Typography>
      <div className={style.flex_container}>
        <div className={style.second_flex}>
          <div className={style.card_list}>
            {products.map((item, index) => (
              <Product
                {...item}
                key={index}
                updateCartCount={updateCartCount}
              />
            ))}
          </div>
        </div>
      </div>
      <div className={style.loadMore}>
        <Button
          disable={page == 1 ? true : false}
          loading={prevLoading}
          fontWeight="400"
          textSize="14px"
          verticalPadding="10px"
          horizontalPadding="20px"
          verticalMargin="10px"
          clickHandler={async () => {
            page > 1 && setPrevLoading(true);
            const product = page > 1 && (await loadMorePoduct(page - 1));
            product && setPrevLoading(false);
            product && setPage(page - 1);
          }}
        >
          Previous
        </Button>
        <Button
          disable={page === 3 ? true : false}
          loading={nextLoading}
          fontWeight="400"
          textSize="14px"
          verticalPadding="10px"
          horizontalPadding="20px"
          verticalMargin="10px"
          clickHandler={async () => {
            page < 3 && setNextLoading(true);
            const product = page < 3 && (await loadMorePoduct(page + 1));
            product && setPage(page + 1);
            product && setNextLoading(false);
          }}
        >
          Next
        </Button>
      </div>
    </div>
  );
};

export default FeaturedProduct;
