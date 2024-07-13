import Typography from "../Typograhy";
import style from "./index.module.css";
import Button from "../Button";
import CheckOutModal from "../CheckoutModal";
import { useState } from "react";
const OrderSummary = ({ total, checkOutSuccess }) => {
  const [openCheckout, setOpenCheckout] = useState(false);

  const checkOutHandler = () => {
    setOpenCheckout(!openCheckout);
  };

  return (
    <div className={style.container}>
      <div className={style.header}>
        <Typography
          fontWeight="600"
          size="22px"
          lineHeight="25px"
          marginHorizontal="0"
        >
          Order Summary
        </Typography>
      </div>
      <div className={style.flex_container}>
        <Typography
          fontWeight="500"
          size="18px"
          lineHeight="25px"
          marginHorizontal="0"
        >
          Subtotal
        </Typography>
        <Typography
          fontWeight="500"
          size="18px"
          lineHeight="25px"
          marginHorizontal="0"
        >
          &#8358;{total.toLocaleString()}
        </Typography>
      </div>
      <div className={style.flex_container}>
        <Typography
          fontWeight="500"
          size="18px"
          lineHeight="25px"
          marginHorizontal="0"
        >
          Discount
        </Typography>
        <Typography
          fontWeight="500"
          size="18px"
          lineHeight="25px"
          marginHorizontal="0"
        >
          &#8358;0
        </Typography>
      </div>
      <div className={style.flex_container}>
        <Typography
          fontWeight="500"
          size="18px"
          lineHeight="25px"
          marginHorizontal="0"
        >
          Shipping
        </Typography>
        <Typography
          fontWeight="500"
          size="18px"
          lineHeight="25px"
          marginHorizontal="0"
        >
          &#8358;0
        </Typography>
      </div>
      <div className={style.flex_container}>
        <Typography
          fontWeight="500"
          size="18px"
          lineHeight="25px"
          marginHorizontal="0"
        >
          Total
        </Typography>
        <Typography
          fontWeight="500"
          size="18px"
          lineHeight="25px"
          marginHorizontal="0"
        >
          &#8358;{total.toLocaleString()}
        </Typography>
      </div>
      <div>
        <Button
          verticalPadding="5px"
          horizontalPadding="50px"
          clickHandler={checkOutHandler}
        >
          Checkout
        </Button>
      </div>
      {openCheckout && <CheckOutModal closeCheckout={checkOutSuccess} />}
    </div>
  );
};

export default OrderSummary;
