import Button from "../Button";
import Typography from "../Typograhy";
import style from "./index.module.css";
import watch from "../../public/assets/images/watch.png";
import { useEffect, useRef } from "react";
import Image from "next/image";
// import { useLocation } from "react-router-dom";
const Hero = () => {
  const containerRef = useRef();
  // const location = useLocation();

  // useEffect(() => {
  //   if (location.hash == "#home") {
  //     window.scrollTo({
  //       top: containerRef.current.getBoundingClientRect().top - 120,
  //       behavior: "smooth",
  //     });
  //   }
  // }, [location]);
  return (
    <div className={style.hero_container} ref={containerRef}>
      <div className={style.top_hero}>
        <h5>
          Stay connected, Stay fit,Stay stylish with <span>Timbo Cloud</span>
          watches
        </h5>
      </div>
      <div className={style.flex_container}>
        <div className={style.flex_item}>
          <div>
            <Typography fontWeight="600" size="34px" lineHeight="40px">
              T5 Mini Smart Watch
            </Typography>
            <Typography fontWeight="600" size="18px" lineHeight="25px">
              Stay connected and healthy with our latest smart watches! Track
              your workouts and recieve notification on a go.
            </Typography>
            <div className={style.btn_container}>
              <Button verticalMargin="32px">Explore product</Button>
            </div>
          </div>
        </div>
        <div className={style.flex_item}>
          <div>
            <Image src={watch} className={style.image} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
