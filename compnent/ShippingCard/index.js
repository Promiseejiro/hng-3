import style from "./index.module.css";
import car from "../../public/assets/svg/car.svg";
import card from "../../public/assets/svg/card.svg";
import tone from "../../public/assets/svg/tone.svg";
import Typography from "../Typograhy";
import Image from "next/image";
const ShippingCards = ({ icon, text, header }) => {
  return (
    <div className={style.container}>
      <div className={style.card_list}>
        <div className={style.item1}>
          <div className={style.shippingCard}>
            <Image src={car} className={style.image} />
            <h5>Free shipping</h5>
            <p>Enjoy free delivery on all order from our company.</p>
          </div>
        </div>

        <div className={style.item2}>
          {" "}
          <div className={style.shippingCard}>
            <Image src={card} className={style.image} />
            <h5>Secure payment</h5>
            <p>Benefit from secure payment option with our company.</p>
          </div>
        </div>
        <div className={style.last}>
          <div className={`${style.shippingCard} `}>
            <Image src={tone} className={style.image} />
            <h5>24 hour support</h5>
            <p>we offer 24 hour customer supportto our customers</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShippingCards;
