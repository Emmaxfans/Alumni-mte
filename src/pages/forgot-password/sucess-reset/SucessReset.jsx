import "./SucessReset.css";
import "../password-reset/ForgotPassword.css";
import ellipse2 from "../../../assets/images/forgotpsw/ellipse36.png";
import ellipse1 from "../../../assets/images/forgotpsw/ellipse37.png";
import backbutton from "../../../assets/images/forgotpsw/backbutton.png";
import vector from "../../../assets/images/forgotpsw/vector1.png";

const SucessReset = () => {
  return (
    // SUCCESS MESSAGE PAGE AFTER PASSWORD HAS BEEN RESET
    <div className="forgot__password">
      <div className="fp__section">
        <div className="fp__div1">
          <img src={ellipse1} alt="ellips1" />
        </div>

        <div className="fp__div2 successreset__content">
          <img src={backbutton} alt="back-button" />
          <span className="p__head1">
            <img src={vector} alt="email-reset" />
          </span>

          <h3>Password Reset</h3>
          <p className="p1">
            Your new password has been set successfully. Click the button below
            to magically login.
          </p>

          <button>Open the Email app</button>
        </div>

        <div className="fp__div3">
          <img src={ellipse2} alt="ellipse1" />
        </div>
      </div>
    </div>
  );
};

export default SucessReset;
