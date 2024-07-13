import style from "./index.module.css";
import watch from "../../../public/assets/images/watch.png";
import Typography from "../../Typograhy";
import Image from "next/image";
const CategoryCard = ({ image, cardText }) => {
  return (
    <div>
      <div className={style.container}>
        <div>
          <div className={style.image_container}>
            <Image src={image} alt="Product" className={style.image} />
          </div>
          <Typography fontWeight="500" size="18px" align="center">
            {cardText}
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default CategoryCard;
