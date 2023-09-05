import "./ForgotPassword.css";
import Bottomcircle from "../../components/forgot-password/Bottomcircle";
import Topcircle from "../../components/forgot-password/Topcircle";
import Backbutton from "../../components/forgot-password/Backbutton";

const ForgotPassword = () => {
  return (
    // RESET PASSWORD PAGE
    <div className="forgot__password">
      <div className="fp__section">
        <Bottomcircle />

        <div className="fps__content">
          <Backbutton />
          <h3>Forgot Password?</h3>
          <p>
            Input the email address associated with your account and we’ll send
            you a link to reset password.
          </p>

          <form>
            <input
              type="text"
              class="form-textbox"
              id="reset__email"
              placeholder="youremail@gmail.com"
            />
            <label for="reset__email" className="reset__label">
              Email
            </label>
            <button>Continue</button>
          </form>
        </div>

        <Topcircle />
      </div>
    </div>
  );
};

export default ForgotPassword;
