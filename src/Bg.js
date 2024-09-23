import "./Bg.css";
import close from "./assets/close.png";
import logo from "./assets/logo.png";
import banner from "./assets/banner.png";
import { useState } from "react";

function Bg() {
  const [selectedTab, setSelectedTab] = useState(1);

  return (
    <>
      <div className="bg_main">
        <img src={close} className="close_icon" />
        <div className="header_title">העלאת תמונה כדי להסיר את הרקע</div>
        <button className="btn_upload">העלאת תמונה</button>
        <div className="small_text">פורמטים נתמכים: .png, .jpg</div>

        <div className="middle_screen">
          <div className="left_side">
            <div className="tabs">
              <div
                className={
                  "tab_no_bg " + (selectedTab == 1 ? "selected_tab" : "")
                }
                onClick={() => setSelectedTab(1)}
              >
                הוסר רקע
              </div>
              <div
                className={
                  "tab_with_bg " + (selectedTab == 2 ? "selected_tab" : "")
                }
                onClick={() => setSelectedTab(2)}
              >
                מקורי
              </div>
            </div>

            <div className="left_side_in"></div>
            <button className="btn_eula">תקנון החברה</button>
            <div className="eula_text">
              על ידי העלאת תמונה אתה מסכים לכל התנאים וההגבלות שלנו
            </div>
          </div>
          <div className="right_side">
            <div className="right_side_in"></div>
          </div>
        </div>

        <div className="footer">
          <img src={logo} className="logo"></img>
          <img src={banner} className="banner"></img>
        </div>
      </div>
    </>
  );
}

export default Bg;
