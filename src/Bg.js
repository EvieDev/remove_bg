import "./Bg.css";
import close from "./assets/close.png";

function Bg() {
  return (
    <div className="bg_main">
      <img src={close} className="close_icon" />
      <div className="header_title">העלאת תמונה כדי להסיר את הרקע</div>
      <button className="btn_upload">העלאת תמונה</button>
    </div>
  );
}

export default Bg;
