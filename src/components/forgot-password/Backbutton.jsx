import "./Backbutton.css";
import backbutton from "src/assets/icons/backbutton.png";

const Backbutton = () => {
  return (
    // this back button icon
    <div className="backbutton">
      <img src={backbutton} alt="back-button" />
    </div>
  );
};

export default Backbutton;
