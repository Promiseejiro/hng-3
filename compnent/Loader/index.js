import { BallTriangle } from "react-loader-spinner";
import style from "./index.module.css";
const Loader = ({ small, height, width }) => {
  return (
    <div className={style.container}>
      <BallTriangle
        height={height ? height : 100}
        width={width ? width : 100}
        radius={5}
        color=" #056050"
        ariaLabel="ball-triangle-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </div>
  );
};

export default Loader;
