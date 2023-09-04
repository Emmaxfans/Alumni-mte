import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./pages/landing/Landing";
import Signin from "./pages/sign-in/Signin";
import Dashboard from "./pages/dashboard/Dashboard";
import Signup from "./pages/sign-up/Signup";
import Gallery from "./pages/gallery/Gallery";
import ForgotPassword from "./pages/forgot-password/password-reset/ForgotPassword";
import EmailReset from "./pages/forgot-password/email-reset/EmailReset";
import SucessReset from "./pages/forgot-password/sucess-reset/SucessReset";
import ResetInput from "./pages/forgot-password/password-reset-input/ResetInput";
import LoginUpsideLoginForm from "./pages/formvalidation/LoginUpsideLoginForm";
import Error from "./pages/error/Error";
// import FormTest from './pages/formvalidation/formTest';
// import FormValidate from './pages/formvalidation/FormValidate';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="*" element={<Error />} />

          {/* forgot password  */}
          <Route path="/forgotpsw" element={<ForgotPassword />} />
          <Route path="/resetinput" element={<ResetInput />} />
          <Route path="/emailreset" element={<EmailReset />} />
          <Route path="/resetpsw" element={<SucessReset />} />
          <Route path="/form" element={<LoginUpsideLoginForm />} />
          {/* <Route path='/form1' element={<FormTest />} /> */}
        </Routes>
      </Router>
    </>
  );
}

export default App;
