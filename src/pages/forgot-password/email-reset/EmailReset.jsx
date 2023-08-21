import "./EmailReset.css";
import vector__reset from "../../../assets/icons/vector.png";
import Bottomcircle from "../../../components/forgot-password/Bottomcircle";
import Topcircle from "../../../components/forgot-password/Topcircle";
import Backbutton from "../../../components/forgot-password/Backbutton";

const EmailReset = () => {
  return (
    // PASSWORD RESET LINK TO EMAIL
    <div className="forgot__password">
      <div className="fp__section">
        <Bottomcircle />

        <div className="emailreset__content">
          <Backbutton />

          <center>
            <h1 className="p__head">
              <img src={vector__reset} alt="email-reset" />
            </h1>
          </center>

          <h3>Check Your Mail</h3>
          <p className="p1">
            We’ve sent a password recovery instruction to your email address.
          </p>

          <button>Open the Email app</button>
          <p className="p2">
            Didn’t receive any email? <a href="/#">Resend link.</a>{" "}
          </p>
        </div>

        <Topcircle />
      </div>
    </div>
  );
};

export default EmailReset;
