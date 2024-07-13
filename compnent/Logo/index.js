import style from "./index.module.css";
import logo from "../../public/assets/svg/logo.svg";
import Link from "next/link";
import Image from "next/image";
const Logo = () => {
  return (
    <div className={style.logo_container}>
      <Link href={`/`}>
        <Image src={logo} className={style.logo} alt="" />
      </Link>
    </div>
  );
};

export default Logo;
