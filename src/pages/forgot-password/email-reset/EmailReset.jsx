import "./EmailReset.css";
import "../password-reset/ForgotPassword.css";
import ellipse2 from "../../../assets/images/forgotpsw/ellipse36.png";
import ellipse1 from "../../../assets/images/forgotpsw/ellipse37.png";
import backbutton from "../../../assets/images/forgotpsw/backbutton.png";
import vector from "../../../assets/images/forgotpsw/vector.png";

const EmailReset = () => {
  return (
    // PASSWORD RESET LINK TO EMAIL
    <div className="forgot__password">
      <div className="fp__section">
        <div className="fp__div1">
          <img src={ellipse1} alt="ellips1" />
        </div>

        <div className="fp__div2 emailreset__content">
          <img src={backbutton} alt="back-button" />
          <span className="p__head">
            <img src={vector} alt="email-reset" />
          </span>

          <h3>Check Your Mail</h3>
          <p className="p1">
            We’ve sent a password recovery instruction to your email address.
          </p>

          <button>Open the Email app</button>
          <p className="p2">
            Didn’t receive any email? <a href="/#">Resend link.</a>{" "}
          </p>
        </div>

        <div className="fp__div3">
          <img src={ellipse2} alt="ellipse1" />
        </div>
      </div>
    </div>
  );
};

export default EmailReset;
