import "./NoBg.css";
import warning from "./assets/warning.png";
import { useRef } from "react";
//import img from "./assets/img.png";

function NoBg(props) {
  const inputElement = useRef();

  const focusInput = () => {
    inputElement.current.click();
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
            צבע רקע
          </button>
          <input
            className="color_palate"
            type="color"
            ref={inputElement}
          ></input>
        </>
      ) : (
        <></>
      )}

      {console.log(props.img)}

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
