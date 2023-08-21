import "./ResetInput.css";
import vector__resetinput from "../../../assets/icons/vector-reset.png";
import Bottomcircle from "../../../components/forgot-password/Bottomcircle";
import Topcircle from "../../../components/forgot-password/Topcircle";
import Backbutton from "../../../components/forgot-password/Backbutton";

const ResetInput = () => {
  return (
    <div className="forgot__password">
      <div className="fp__section1">
        <Bottomcircle />

        <div className="resetinput__content">
          <Backbutton />
          <span className="p__head3">
            <img src={vector__resetinput} alt="email-reset" />
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
        <Topcircle />
      </div>
    </div>
  );
};

export default ResetInput;
