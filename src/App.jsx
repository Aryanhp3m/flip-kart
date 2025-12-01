import React from 'react'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import Winter from './pages/Winter'
import Toppicks from './pages/Toppicks'
import Fashion from './pages/Fashion'
import Electronics from './pages/Electronics'





const App = () => {
    return (

        <Router>
            <Routes>

                <Route path="/" element={<Home />} />
                <Route path="/winter" element={<Winter />} />
                <Route path="/Toppicks" element={<Toppicks />} />
                <Route path="/Fashion" element={<Fashion />} />
                <Route path="/Electronics" element={<Electronics />} />



            </Routes>
        </Router>







    )
}

export default App

