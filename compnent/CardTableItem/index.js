import { useState } from "react";
import delIcon from "../../public//assets/svg/delete.svg";
import gr from "../../public/assets/svg/greater.svg";
import lw from "../../public/assets/svg/lower.svg";
import Typography from "../Typograhy";
import style from "./index.module.css";
import Image from "next/image";
const CartTableItem = ({
  image,
  name,
  rating,
  price,
  qty,
  actionInProduct,
  id,
}) => {
  console.log(id);
  const [quantity, setQuantity] = useState(qty);
  return (
    <tr className={style.container}>
      <td>
        <div className={style.image_container}>
          <Image
            alt=""
            src={image}
            className={style.image}
            width={500}
            height={500}
          />
        </div>
      </td>
      <td>
        <div className={style.header}>
          <p className={style.product_name}>{name}</p>
        </div>
        <div></div>
      </td>
      <td>
        <div className={style.qty}>
          <div className={style.num}>
            <Typography
              fontWeight="500"
              size="14px"
              align="left"
              marginHorizontal="0"
              marginVertical="0"
            >
              {quantity}
            </Typography>
          </div>
          <div className={style.control}>
            <Image
              alt=""
              width={20}
              height={20}
              src={lw}
              className={style.controlbtn}
              onClick={() => {
                setQuantity(quantity + 1);
                actionInProduct(id, "increase");
              }}
            />
            <Image
              alt=""
              width={20}
              height={20}
              src={gr}
              className={style.controlbtn}
              onClick={() => {
                if (quantity > 1) {
                  setQuantity(quantity - 1);
                  actionInProduct(id, "decrease");
                } else {
                  setQuantity(0);
                  actionInProduct(id, "clear");
                }
              }}
            />
          </div>
        </div>
      </td>
      <td>&#8358;{price.toLocaleString()}</td>
      <td>
        <div>
          <Image
            alt=""
            width={35}
            height={35}
            className={style.clearItem}
            src={delIcon}
            onClick={() => {
              actionInProduct(id, "clear");
            }}
          />
        </div>
      </td>
    </tr>
  );
};

export default CartTableItem;
