import { Link } from 'react-router-dom'

const Card = ({ lodging }) => {
  return (
    <Link className="lodging-card" to={`/lodging/${lodging.id}`}>
      <img src={lodging.cover} alt={lodging.title} className="lodging-cover" />
      <span className="lodging-title">{lodging.title}</span>
    </Link>
  )
}

export default Card
