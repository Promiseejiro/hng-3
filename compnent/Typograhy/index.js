import style from "./index.module.css";

const Typography = ({
  marginVertical = "10px",
  marginHorizontal = "10px",
  lineHeight = "25px",
  text,
  children,
  color,
  size = "16px",
  fontWeight = "500",
  align,
  width,
  display,
}) => {
  return (
    <p
      className={style.paragraph}
      style={{
        margin: `${marginVertical} ${marginHorizontal}`,
        lineHeight: `${lineHeight}`,
        color: `${color}`,
        fontSize: `${size}`,
        fontWeight: `${fontWeight}`,
        width: `${width}`,
        display: `${display && display}`,
      }}
    >
      {children || text}
    </p>
  );
};
export default Typography;
