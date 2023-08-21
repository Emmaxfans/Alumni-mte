import "./ForgotPassword.css";
import ellipse2 from "../../../assets/images/forgotpsw/ellipse36.png";
import ellipse1 from "../../../assets/images/forgotpsw/ellipse37.png";
import backbutton from "../../../assets/images/forgotpsw/backbutton.png";

const ForgotPassword = () => {
  return (
    // RESET PASSWORD PAGE
    <div className="forgot__password">
      <div className="fp__section">
        <div className="fp__div1">
          <img src={ellipse1} alt="ellips1" />
        </div>

        <div className="fp__div2 fps__content">
          <img src={backbutton} alt="back-button" />
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

        <div className="fp__div3">
          <img src={ellipse2} alt="ellipse1" />
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
