import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from './pages/landing/Landing';
import Dashboard from './pages/dashboard/Dashboard';
import Signin from './pages/sign-in/signin';
import Signup from './pages/sign-up/signup';
import Error from './pages/error/error';

function App () {
  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element= {<Landing />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/signin' element={<Signin />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='*' element={<Error />} />
      </Routes>
    </Router>
    </>
  )
}

export default App