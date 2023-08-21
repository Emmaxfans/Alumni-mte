import React from "./ResetInput.css";
import "../password-reset/ForgotPassword.css";
import ellipse2 from "../../../assets/images/forgotpsw/ellipse36.png";
import ellipse1 from "../../../assets/images/forgotpsw/ellipse37.png";
import backbutton from "../../../assets/images/forgotpsw/backbutton.png";
import vector from "../../../assets/images/forgotpsw/vector3.png";

const ResetInput = () => {
  return (
    <div className="forgot__password">
      <div className="fp__section1">
        <div className="fp__div1">
          <img src={ellipse1} alt="ellips1" />
        </div>

        <div className="fp__div2 resetinput__content">
          <img src={backbutton} alt="back-button" />
          <span className="p__head3">
            <img src={vector} alt="email-reset" />
          </span>
          <div className="resetinput-text">
            <h3>Set New Password</h3>
            <p>
              Your new password must be different from previously used
              passwords.
            </p>
          </div>

          <form>
            <input placeholder="Input password" />
            <input placeholder="Input password" />
            <button>Reset Password</button>
          </form>
        </div>

        <div className="fp__div3">
          <img src={ellipse2} alt="ellipse1" />
        </div>
      </div>
    </div>
  );
};

export default ResetInput;
