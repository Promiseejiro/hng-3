import style from "./index.module.css";
const Toast = ({ type, text }) => {
  return (
    <div className={style.toast}>
      <div
        className={style.message}
        style={{
          backgroundColor: "white",
          color: type == "success" ? "#33CC33" : "#FF3A3A",
        }}
      >
        {text}
      </div>
    </div>
  );
};

export default Toast;
