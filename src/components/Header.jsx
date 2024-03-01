import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <nav>
      <Link to="/">Accueil</Link>
      <Link to="/hebergements">Hébergements</Link>
      <Link to="/a-propos">À propos</Link>
    </nav>
  )
}

export default Header
