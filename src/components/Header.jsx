import { Link } from 'react-router-dom'

const Header = ({ logo }) => {
  return (
    <div className="header">
      <img className="header-logo" src={logo} alt="Logo Kasa"></img>
      <nav className="header-nav">
        <Link className="nav-link" to="/">
          Accueil
        </Link>
        <Link className="nav-link" to="/a-propos">
          À propos
        </Link>
      </nav>
    </div>
  )
}

export default Header
