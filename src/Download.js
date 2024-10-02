import "./Download.css";
import check from "./assets/check.png";
import new_icon from "./assets/new.png";

function Download(props) {
  return (
    <div
      className={
        "Download_cont " + (props.title != "Pro" ? "border_bottom" : "")
      }
    >
      <div
        className={
          "Download_title " + (props.title == "Pro" ? "margin_right" : "")
        }
      >
        {props.title}
      </div>
      <div className="Download_sub_title">{props.sub_title}</div>

      <button
        className="Download_btn"
        onClick={() => props.open_download_popup()}
      >
        {props.btn_text}
      </button>

      <div className="Download_small_text">{props.small_text}</div>

      <img className="check" src={check} />

      {props.title == "Pro" ? (
        <img className="new_icon" src={new_icon} />
      ) : (
        <></>
      )}
    </div>
  );
}

export default Download;
