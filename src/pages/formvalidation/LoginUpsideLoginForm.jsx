// import React, { useState } from 'react';

// import { version } from "prettier";

// const FormValidate = () => {
//   const [formData, setFormData] = useState({
//     username: '',
//     name: '',
//     email: '',
//     password: '',
//     confirmPassword: '',
//     // Add more form fields as needed
//   });

//   const [errors, setErrors] = useState({});

//   const validateForm = () => {
//     const newErrors = {};

//     if (!formData.username.trim()) {
//       newErrors.username = 'Username is required.';
//     }

//     if (!formData.email.trim()) {
//       newErrors.email = 'Email is required.';
//     }

//     if (!formData.password.trim()) {
//       newErrors.password = 'Password is required.';
//     }

//     if (!formData.confirmPassword.trim()) {
//       newErrors.confirmPassword = 'Confirm Password is required.';
//     } else if (formData.confirmPassword !== formData.password) {
//       newErrors.confirmPassword = 'Passwords do not match.';
//     }

//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     console.log(formData)

//     if (validateForm()) {
//       // Perform form submission or further processing
//       console.log('Form submitted successfully!');
//     }
//   };

//   const handleChange = (event) => {
//     const { name, value } = event.target;
//     setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
//     setErrors((prevErrors) => ({ ...prevErrors, [name]: '' }));
//     // setFormData((prevFormData) => ({ ...prevFormData1, [email]: value }));
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <div>
//         <label htmlFor="username">Username:</label>
//         <input
//           type="text"
//           id="username"
//           name="username"
//           value={formData.username}
//           onChange={handleChange}
//         />
//         {errors.username && <span>{errors.username}</span>}
//       </div>

//       <div>
//         <label htmlFor="email">Email:</label>
//         <input
//           type="email"
//           id="email"
//           name="email"
//           value={formData.email}
//           onChange={handleChange}
//         />
//         {errors.email && <span>{errors.email}</span>}
//       </div>

//       {/* Exclude validation for a specific input section */}
//       <div>
//         <label htmlFor="email">name:</label>
//         <input
//           type="text"
//           id="name"
//           name="name"
//           value={formData.name}
//           onChange={handleChange}
//         />
//         {errors.email && <span>{errors.email}</span>}
//       </div>

//       <div>
//         <label htmlFor="password">Password:</label>
//         <input
//           type="password"
//           id="password"
//           name="password"
//           value={formData.password}
//           onChange={handleChange}
//         />
//         {/* Error message will not be displayed for this input */}
//       </div>

//       <div>
//         <label htmlFor="confirmPassword">Confirm Password:</label>
//         <input
//           type="password"
//           id="confirmPassword"
//           name="confirmPassword"
//           value={formData.confirmPassword}
//           onChange={handleChange}
//         />
//         {errors.confirmPassword && <span>{errors.confirmPassword}</span>}
//       </div>

//       <button type="submit">Submit</button>
//     </form>
//   );
// };

// export default FormValidate;

//Import Libraries/Packages
import React, { useRef } from 'react'


//Import Styles
import "./LoginUpsideLoginForm.css"

import Loginfprint from "../../assets/icons/Login-fprint.png"

function LoginUpsideLoginForm() 
{
  /* React Referans Hook  */
  const inputEl = useRef(null)

  /* This Function is for toggle show/hide password */
  const ShowPassword = () => {if(inputEl.current.type == "password"){ return inputEl.current.type = "text"};inputEl.current.type = "password"}




  /* -------------------------------- These functions will be updated in the future regarding the user authentication logic -------------------------------- */
  const validateForm = () => 
  {
    //const { username, password } = values;
    //if (username === "") { show error for username; return false;} 
    //else if (password === "") {toast.error("Email and Password is required.", toastOptions);return false;}
    return true;
  };


  const handleSubmit = async (event) => 
  {
    event.preventDefault();

    if (validateForm()) {
      //const { username, password } = values;
      //const { data } = await axios.post(loginRoute, {username,password,});


      //if (data.status === false) {}
      //if (data.status === true) {navigate("/");}

      console.log(event)
    }
  };
  /* -------------------------------- These functions will be updated in the future regarding the user authentication logic -------------------------------- */





  return (
    <>
        <div id='Login-Upside-login-form'>
            <form action=""  onSubmit={(event) => handleSubmit(event)}>
              <label for="email"></label><input type='text' id='email' placeholder='Email Address'/>
              <label for="password"></label><input type='password' id='password' placeholder='Password' ref={inputEl} /><i id="togglePassword" onClick={ShowPassword}></i>
              <div id='Login-Upside-login-form-rmpswrd-forget'>
                <div>
                  <input type='checkbox' name='rememberPassword' />
                  <label for="rememberPassword">Remember password</label>
                </div>
                  <a href='/forget'>Forget Password</a>
              </div>
              <button type="submit">Login</button>
            </form>

            <div id='form_downside'>footer</div>


            {/* <div id='Login-downside'>
            <img src={Loginfprint} alt='finger-print icon'/>
            <p>Login with touch ID</p>
        </div> */}
        </div>

    </>
  )
}

export default LoginUpsideLoginForm