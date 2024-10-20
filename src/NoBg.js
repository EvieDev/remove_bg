import "./NoBg.css";
import warning from "./assets/warning.png";
import { useRef, useState } from "react";

function NoBg(props) {
  const inputElement = useRef();

  const [chooseColor, setChooseColor] = useState("");

  const focusInput = () => {
    inputElement.current.click();
  };

  const saveColor = (color) => {
    setChooseColor(color);
    props.setColor(color);
  };

  return (
    <>
      {props.type == 1 ? (
        <>
          <div className="warning_cont">
            <img src={warning} className="warning_icon" />
            <div>
              אל תשכח להוריד את הקבצים שלך. הם ימחקו אוטומטית כשתצא מהדף
            </div>
          </div>
          <button className="btn_color" onClick={focusInput}>
            <span
              className="choose_color"
              style={{ backgroundColor: chooseColor }}
            ></span>
            צבע רקע
          </button>
          <input
            className="color_palate"
            type="color"
            ref={inputElement}
            onChange={(e) => saveColor(e.target.value)}
          ></input>
        </>
      ) : (
        <></>
      )}

      {props.img != "" ? (
        <img
          src={
            "http://localhost:3001/" +
            (props.type == 1 ? "no_bg_" + props.img : props.img)
          }
          className="main_image"
        />
      ) : (
        <></>
      )}
    </>
  );
}

export default NoBg;
