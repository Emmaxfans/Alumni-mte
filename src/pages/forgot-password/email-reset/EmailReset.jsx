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

                <div className='fp__div2'>
                    <img src={backbutton} alt='back-button' />
                </div>

                <div className='fp__div3'>
                    <img src={ellipse2} alt="ellipse1"/> 
                </div>

            </div>
        </div>
  )
}

export default EmailReset