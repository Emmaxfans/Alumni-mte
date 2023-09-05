import Backbutton from "../../../components/forgot-password/Backbutton";
import Bottomcircle from "../../../components/forgot-password/Bottomcircle";
import Topcircle from "../../../components/forgot-password/Topcircle";
import "./SucessReset.css";
// import vector__success from "../../../assets/icons/vector1.png";

const SucessReset = () => {
  return (
    // SUCCESS MESSAGE PAGE AFTER PASSWORD HAS BEEN RESET
    <div className="forgot__password">
      <div className="fp__section">
        <Bottomcircle />

        <div className="successreset__content">
          <Backbutton />
          <center>
            <h1 className="p__head1">
              {/* <img src={vector__success} alt="email-reset" /> */}
            </h1>
          </center>

          <h3>Password Reset</h3>
          <p className="p1">
            Your new password has been set successfully. Click the button below
            to magically login.
          </p>

          <button>Open the Email app</button>
        </div>

        <Topcircle />
      </div>
    </div>
  );
};

export default SucessReset;
