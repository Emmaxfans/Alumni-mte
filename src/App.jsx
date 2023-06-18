import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from './pages/landing/Landing';
import Signin from './pages/sign-in/Signin';
import Dashboard from './pages/dashboard/Dashboard';
import Signup from './pages/sign-up/Signup';
import Gallery from './pages/gallery/Gallery';
import ForgotPassword from './pages/forgot-password/password-reset/ForgotPassword';
import EmailReset from './pages/forgot-password/email-reset/EmailReset';


function App () {
  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/signin' element={<Signin />} />
        <Route path='/gallery' element={<Gallery />} />

        {/* forgot password  */}
        <Route path='/forgotpsw' element={<ForgotPassword />} />
        <Route path='/emailreset' element={<EmailReset />} />

      </Routes>
    </Router>
    </>
  )
}

export default App
