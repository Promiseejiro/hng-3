import timesIcon from "../../public/assets/svg/times.svg";
import success from "../../public/assets/svg/Mask group.svg";
import style from "./index.module.css";
import Typography from "../Typograhy";
import Button from "../Button";
import Link from "next/link";
import Image from "next/image";
const CheckOutModal = ({ closeCheckout }) => {
  return (
    <section className={style.modal}>
      <div className={style.content}>
        <Image src={success} className={style.successIcon} alt="" />
        <Typography
          fontWeight="600"
          size="18px"
          lineHeight="25px"
          color="#056050"
          marginHorizontal="0"
        >
          Congratulations
        </Typography>
        <Typography
          fontWeight="500"
          size="14px"
          lineHeight="25px"
          marginHorizontal="0"
          color="#056050"
        >
          Checkout successfull
        </Typography>
        <Link href="/" className={style.link}>
          <Button
            verticalPadding="5px"
            horizontalPadding="50px"
            fontSize="14px"
            fontWeight="400"
            clickHandler={closeCheckout}
          >
            Back to shop
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default CheckOutModal;
