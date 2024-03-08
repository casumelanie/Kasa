import { NavLink } from 'react-router-dom'

const Header = ({ logo }) => {
  return (
    <div className="header">
      <img className="header-logo" src={logo} alt="Logo Kasa"></img>
      <nav className="header-nav">
        <NavLink className="nav-link" to="/">
          Accueil
        </NavLink>
        <NavLink className="nav-link" to="/about">
          À propos
        </NavLink>
      </nav>
    </div>
  )
}

export default Header
