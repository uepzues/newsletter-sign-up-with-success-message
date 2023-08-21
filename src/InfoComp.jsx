import iconList from "./assets/images/icon-list.svg";
import "./InfoComp.css";

export function InfoComp({ info }) {
  return (
    <div>
      <img className="check" src={iconList} alt="check" /> <p className="info">{info}</p>
    </div>
  );
}
