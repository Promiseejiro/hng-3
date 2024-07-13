import Button from "../Button";
import Typography from "../Typograhy";
import watch from "../../public/assets/svg/bestSellers.svg";
import style from "./index.module.css";
import { useEffect, useRef } from "react";
import toast from "react-hot-toast";
import Toast from "../Toast";
import Image from "next/image";
const BestSellers = ({ updateCartCount }) => {
  const containerRef = useRef();
  // const location = useLocation();

  // useEffect(() => {
  //   if (location.hash == "#blog") {
  //     window.scrollTo({
  //       top: 120,
  //       behavior: "smooth",
  //     });
  //   }
  // }, [location]);
  return (
    <section className={style.section} ref={containerRef}>
      <div className={style.flex_container}>
        <div className={`${style.flex_item} ${style.content}`}>
          <div>
            <h6 className={style.header}>Best sellers</h6>
            <p>Take a look at our top selling product of the week.</p>
            <div className={style.btn_container}>
              <a
                href="#product"
                style={{
                  color: "#056050",
                }}
              >
                <Button
                  fontWeight="400"
                  textSize="14px"
                  verticalPadding="5px"
                  horizontalMargin="10px"
                >
                  Shop now
                </Button>
              </a>
            </div>
          </div>
        </div>
        <div className={style.flex_item}>
          <div className={style.image_container}>
            <Image src={watch} className={style.image} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BestSellers;
