import "./Bg.css";
import close from "./assets/close.png";
import logo from "./assets/logo.png";
import banner from "./assets/banner.png";
import Download from "./Download";
import { useState } from "react";
import close1 from "./assets/close1.png";
import NoBg from "./NoBg";
import DownloadFolder from "./assets/Downloads Folder.png";

function Bg() {
  const [selectedTab, setSelectedTab] = useState(1);
  const [eulaPopup, setEulaPopup] = useState(false);
  const [downloadPopup, setDownloadPopup] = useState(false);

  function OpenDownloadPopup() {
    setDownloadPopup(true);
  }

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

            <div className="left_side_in">
              {selectedTab == 1 ? <NoBg type="1" /> : <NoBg type="2" />}
            </div>
            <button className="btn_eula" onClick={() => setEulaPopup(true)}>
              תקנון החברה
            </button>
            <div className="eula_text">
              על ידי העלאת תמונה אתה מסכים לכל התנאים וההגבלות שלנו
            </div>
          </div>
          <div className="right_side">
            <div className="right_side_in">
              <Download
                open_download_popup={OpenDownloadPopup}
                title="תמונה חינם"
                sub_title="612xתצוגה מקדימה של תמונה 408"
                btn_text="הורד"
                small_text="איכות טובה עד 0.25 מגה פיקסל"
              ></Download>
              <Download
                open_download_popup={OpenDownloadPopup}
                title="Pro"
                sub_title="1280xתמונה מלאה 1920"
                btn_text="HD הורד"
                small_text="האיכות הטובה היותר עד 25 מגה פיקסל"
              ></Download>
            </div>
          </div>
        </div>

        <div className="footer">
          <img src={logo} className="logo"></img>
          <img src={banner} className="banner"></img>
        </div>
      </div>

      {eulaPopup == true ? (
        <div className="layout">
          <div className="eula_text_popup">
            תקנון
            <img
              className="close_img"
              src={close1}
              onClick={() => setEulaPopup(false)}
            ></img>
          </div>
        </div>
      ) : (
        <></>
      )}

      {downloadPopup == true ? (
        <div className="layout">
          <div className="download_text_popup">
            <img
              className="close_img"
              src={close1}
              onClick={() => setDownloadPopup(false)}
            />

            <div className="download_folder">
              <img src={DownloadFolder} className="download_folder_img" />
            </div>

            <div className="download_approve_text">אישור להורדת תמונה</div>

            <div className="download_question">האם להוריד את התמונה?</div>

            <div className="not_robot_cont">
              <input type="checkbox" />
              <div className="not_robot_text">אני לא רובוט</div>
            </div>
          </div>
        </div>
      ) : (
        <></>
      )}
    </>
  );
}

export default Bg;
