import "./Backbutton.css";
// import backbutton from "src/assets/icons/backbutton.png";
import sample from "src/assets/images/Login/robot1.png";

const Backbutton = () => {
  return (
    // this back button icon
    <div className="backbutton">
      {/* <img src="src/assets/icons/Backbutton.png" alt="back-button" /> */}
      {/* <img src={backbutton} alt="back-button" /> */}
      <img src={sample} alt="back-button" />
    </div>
  );
};

export default Backbutton;
