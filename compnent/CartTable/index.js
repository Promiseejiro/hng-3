import CartTableItem from "../CardTableItem";
import Typography from "../Typograhy";
import style from "./index.module.css";
import cartBtn from "../../public/assets/svg/cartyy.svg";
import Image from "next/image";
const CartTable = ({ savedProduct, actionInProduct }) => {
  return (
    <div className={style.container}>
      <table className={style.table}>
        <thead>
          <tr className={style.table_row}>
            <th className={style.product_image}></th>
            <th className={style.product_des}>Items</th>
            <th className={style.product_qu}>Quantity</th>
            <th className={style.product_price}>Price</th>
            <th className={style.product_del}></th>
          </tr>
        </thead>
        <tbody>
          {savedProduct.map((product, index) => (
            <CartTableItem
              {...product}
              actionInProduct={actionInProduct}
              key={index}
            />
          ))}
        </tbody>
      </table>
      <div>
        <button
          className={style.cartBtn}
          onClick={() => {
            actionInProduct("", "remove");
          }}
        >
          <Image src={cartBtn} alt="" />
          Clear cart
        </button>
      </div>
    </div>
  );
};

export default CartTable;
