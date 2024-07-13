import Logo from "../Logo";
import style from "./index.module.css";
import cart from "../../public/assets/svg/cart.svg";
import notify from "../../public/assets/svg/notification.svg";
import bar from "../../public/assets/svg/3bar.svg";
// import { Link } from "react-router-dom";
import Link from "next/link";
import SideBar from "../SideBar";
import { useState } from "react";
import Image from "next/image";
const Header = ({ count }) => {
  const [openSideBar, setOpenSideBar] = useState(false);
  const sideBarOpenHandler = () => {
    setOpenSideBar(!openSideBar);
  };
  return (
    <header className={style.header}>
      <div>
        <div className={style.logo_container}>
          <Logo />
        </div>
      </div>
      <div>
        <div className={style.header_list}>
          <Link href="/">Home</Link>
          <a href="#category" className={style.link}>
            Category
          </a>
          <a href="#blog" className={style.link}>
            Blog
          </a>
          <a href="#contact" className={style.link}>
            Contacts
          </a>
        </div>
      </div>
      <div className={style.icon_container}>
        <Link href="/cart">
          <div className={style.cartContainer}>
            <div className={style.count}>
              <p> {count}</p>
            </div>

            <Image src={cart} className={style.header_icon} alt="" />
          </div>
        </Link>
        <div>
          <Image src={bar} className={style.bar} onClick={sideBarOpenHandler} alt="" />
        </div>
      </div>
      {openSideBar && <SideBar closeSideBar={sideBarOpenHandler} />}
    </header>
  );
};

export default Header;
