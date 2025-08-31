import './App.css'
import Navbar from './Components/Navbar'
import Dashboard from './pages/Dashboard'
import Loginpage from './pages/Loginpage';
import Signup from './pages/Signup'

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Router>
        {/* <Navbar /> */}
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/signup" element={<Signup />} />
          <Route path='/Login' element={<Loginpage/>}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App
