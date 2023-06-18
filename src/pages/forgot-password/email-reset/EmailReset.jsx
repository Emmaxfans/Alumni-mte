import './EmailReset.css'
import '../password-reset/ForgotPassword.css';
import ellipse2 from '../../../assets/images/forgotpsw/ellipse36.png';
import ellipse1 from '../../../assets/images/forgotpsw/ellipse37.png';
import backbutton from '../../../assets/images/forgotpsw/backbutton.png';

const EmailReset = () => {
  return (
    <div className='forgot__password'>
            <div className='fp__section'>

                <div className='fp__div1'>
                    <img src={ellipse1} alt="ellips1"/>
                </div>

                <div className='fp__div2 fps__content'>
                    <img src={backbutton} alt='back-button' />
                        <h3>Check Your Mail</h3>
                        <p>We’ve sent a password recovery instruction to your email address.</p>

                        <form>
                            <button>Open the Email app</button>
                        </form>
                </div>

                <div className='fp__div3'>
                    <img src={ellipse2} alt="ellipse1"/> 
                </div>

            </div>
        </div>
  )
}

export default EmailReset