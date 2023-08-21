import "./signin.css";
import robothand1 from '../../assets/images/Login/robot1.png';
import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
// import texture from '../../assets/images/Login/Texture.png';


const Signin = () => {
	// POST API AND INPUT VALIDATION FOR SIGN IN
	const [formData, setFormData] = useState({
		matric_number: '',
		password: ''
		// Add more form fields as needed
	});

	const [errors, setErrors] = useState({});

	const validateForm = () => {
		const newErrors = {};

		if (!formData.matric_number.trim()) {
			newErrors.matric_number = 'Matric Number is required.';
		}

		if (!formData.password.trim()) {
			newErrors.password = 'password is required.';
		}


		// if (!formData.confirmPassword.trim()) {
		// 	newErrors.confirmPassword = 'Confirm Password is required.';
		// } else if (formData.confirmPassword !== formData.password) {
		// 	newErrors.confirmPassword = 'Passwords do not match.';
		// }

		setErrors(newErrors);
		return Object.keys(newErrors).length === 0;
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		console.log(formData)

		if (validateForm()) {
			// Perform form submission or further processing
			console.log('validation successful');
		}

		axios.post('https://amtes-api.onrender.com/api/v1/users/auth/login', formData)
		.then(response => {
		  console.log(response.status === 200);
		  alert("Login successful");
		  window.location = "/dashboard";
		})
	  .catch(error => {
	    console.error(error);
	    alert("Invalid details!!!");
		window.location = "/signin";
	  });
	};

	const handleChange = (event) => {
		const { name, value } = event.target;
		setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
		setErrors((prevErrors) => ({ ...prevErrors, [name]: '' }));
	};

	return (
		<>
			<div className="signin_section">
				<div className="signin__container1" >
					{/* <h3 className="signin__h3">AI meets humans</h3> */}
					{/* style={{ backgroundImage:`url(${texture})`,backgroundRepeat:"no-repeat", backgroundSize:"contain", height:600,width:600 }} */}
					<img src={robothand1} alt="robot-hand" className="signin__robot" />
				</div>


				<div className="signin__container2" 
				// style={{ backgroundImage:`url(${robothand1})`,  }} 
				>
					
					<div class="va-cont">
						<div class="va-inn">
							<form onSubmit={handleSubmit} class="form-container">

								<div class="form-row">
									<input type="text" class="form-textbox" placeholder="12345678" id="matric_number" name="matric_number" value={formData.matric_number} onChange={handleChange} />
									<label for="form-email" class="form-label">Matric Number</label>
									{errors.matric_number && <span className="error-msg">{errors.matric_number}</span>}
								</div>
								<div class="form-row">
									<input type="text" class="form-textbox" placeholder="Input password" id="password" name="password" value={formData.password} onChange={handleChange} />
									<label for="form-password" class="form-label">Password</label>
									<div className="error__test">{errors.password && <span className="error-msg">{errors.password}</span>}
									<span className="signin__forgotpsw"><Link to='/forgotpsw'>Forgot password?</Link></span></div>
									
									
								</div>
								<div class="form-row">
									<button type="submit" class="form-submit">Sign in</button>
								</div>
							</form>
							<p className="signin__p">Don’t have an account? <Link to='/signup' >Create an account</Link></p>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default Signin