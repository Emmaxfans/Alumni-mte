import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from './pages/landing/Landing';
import Signin from './pages/sign-in/Signin';
import Dashboard from './pages/dashboard/Dashboard';
import Signup from './pages/sign-up/Signup';
import Gallery from './pages/gallery/Gallery';


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
      </Routes>
    </Router>
    </>
  )
}

export default App
