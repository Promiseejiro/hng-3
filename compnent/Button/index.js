import style from "./index.module.css";

const Button = ({
  clickHandler,
  horizontalMargin = "0px",
  verticalMargin = "16px",
  children,
  textSize = "16px",
  color = "#ffffff",
  fontWeight = "500",
  verticalPadding = "8px",
  horizontalPadding = "16px",
  loading,
  disable,
}) => {
  return (
    <button
      className={style.btn}
      style={{
        margin: `${verticalMargin} ${horizontalMargin}`,
        fontWeight: `${fontWeight}`,
        fontSize: `${textSize}`,
        padding: `${verticalPadding} ${horizontalPadding}`,
        backgroundColor: `${disable ? " #ffffffb3" : " #056050"}`,
        color: `${disable ? "black" : "white"}`,
        border: `${disable && "1px solid black"}`,
      }}
      onClick={clickHandler}
    >
      {!loading ? children : "Loading..."}
    </button>
  );
};

export default Button;
