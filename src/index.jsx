import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles/main.scss'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Lodging from './pages/Lodging'
import Error404 from './components/Error404'
import Header from './components/Header'
import Footer from './components/Footer'
import logo from './assets/LOGO.svg'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <Router>
      <Header logo={logo} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hebergements" element={<Lodging />} />
        <Route path="/a-propos" element={<About />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
      <Footer logo={logo} />
    </Router>
  </React.StrictMode>,
)
