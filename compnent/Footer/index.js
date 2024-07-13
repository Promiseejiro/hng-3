import Typography from "../Typograhy";
import style from "./index.module.css";
import icon from "../../public/assets/svg/messageIcon.svg";
import { useEffect, useRef } from "react";
import Image from "next/image";
const Footer = () => {
  const containerRef = useRef();

  useEffect(() => {}, []);
  return (
    <section className={style.section} ref={containerRef}>
      <div>
        <div className={style.flex_container}>
          <div className={style.list}>
            <Typography
              fontWeight="500"
              size="16px"
              lineHeight="18px"
              align="left"
              marginHorizontal="20px"
              color="#fff"
            >
              About
            </Typography>
            <Typography
              fontWeight="400"
              size="12px"
              lineHeight="18px"
              align="left"
              marginHorizontal="20px"
              marginVertical="10px"
              color="#fff"
            >
              Marketplace
            </Typography>
            <Typography
              fontWeight="400"
              size="12px"
              lineHeight="18px"
              align="left"
              marginHorizontal="20px"
              marginVertical="10px"
              color="#fff"
            >
              Services
            </Typography>
            <Typography
              fontWeight="400"
              size="12px"
              lineHeight="18px"
              align="left"
              marginHorizontal="20px"
              marginVertical="10px"
              color="#fff"
            >
              Seller
            </Typography>
          </div>
          <div className={style.list}>
            <Typography
              fontWeight="500"
              size="16px"
              lineHeight="18px"
              align="left"
              marginHorizontal="20px"
              color="#fff"
            >
              Categories
            </Typography>
            <Typography
              fontWeight="400"
              size="12px"
              lineHeight="18px"
              align="left"
              marginHorizontal="20px"
              marginVertical="10px"
              color="#fff"
            >
              Phones
            </Typography>
            <Typography
              fontWeight="400"
              size="12px"
              lineHeight="18px"
              align="left"
              marginHorizontal="20px"
              marginVertical="10px"
              color="#fff"
            >
              Laptops
            </Typography>
            <Typography
              fontWeight="400"
              size="12px"
              lineHeight="18px"
              align="left"
              marginHorizontal="20px"
              marginVertical="10px"
              color="#fff"
            >
              Ear pod
            </Typography>
            <Typography
              fontWeight="400"
              size="12px"
              lineHeight="18px"
              align="left"
              marginHorizontal="20px"
              marginVertical="10px"
              color="#fff"
            >
              Head phones
            </Typography>
          </div>
          <div className={style.list}>
            <Typography
              fontWeight="500"
              size="16px"
              lineHeight="18px"
              align="left"
              marginHorizontal="20px"
              color="#fff"
            >
              Help
            </Typography>
            <Typography
              fontWeight="400"
              size="12px"
              lineHeight="18px"
              align="left"
              marginHorizontal="20px"
              marginVertical="10px"
              color="#fff"
            >
              Get help
            </Typography>
            <Typography
              fontWeight="400"
              size="12px"
              lineHeight="18px"
              align="left"
              marginHorizontal="20px"
              marginVertical="10px"
              color="#fff"
            >
              About us
            </Typography>
            <Typography
              fontWeight="400"
              size="12px"
              lineHeight="18px"
              align="left"
              marginHorizontal="20px"
              marginVertical="10px"
              color="#fff"
            >
              Contact Us
            </Typography>
            <Typography
              fontWeight="400"
              size="12px"
              lineHeight="18px"
              align="left"
              marginHorizontal="20px"
              marginVertical="10px"
              color="#fff"
            >
              FAQs
            </Typography>
            <Typography
              fontWeight="400"
              size="12px"
              lineHeight="18px"
              align="left"
              marginHorizontal="20px"
              marginVertical="10px"
              color="#fff"
            >
              Self Hepls
            </Typography>
          </div>
          <div className={style.newLetter}>
            <Typography
              fontWeight="500"
              size="16px"
              lineHeight="18px"
              marginHorizontal="20px"
              color="#fff"
            >
              Newsletter
            </Typography>
            <p className={style.text}>
              Subscribe to timbo cloud newsletter below.
            </p>
            <div className={style.subscribe_form}>
              <input
                className={style.footer_input}
                placeholder="Email address"
              />
              <div className={style.subcribe_btn}>
                <Image src={icon} alt="" />
              </div>
            </div>
            <Typography
              fontWeight="400"
              size="12px"
              lineHeight="18px"
              marginHorizontal="20px"
              marginVertical="10px"
              color="#fff"
            >
              Email address
            </Typography>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
