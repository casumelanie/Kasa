import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles/main.scss'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Lodging from './pages/Lodging'
import About from './pages/About'
import Error404 from './components/Error404'
import Header from './components/Header'
import Footer from './components/Footer'
import logo from './assets/LOGO.svg'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <Router>
    <Header logo={logo} />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/lodging/:id" element={<Lodging />} />
      <Route path="/about" element={<About />} />
      <Route path="*" element={<Error404 />} />
    </Routes>
    <Footer logo={logo} />
  </Router>,
)
