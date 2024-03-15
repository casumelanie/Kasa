import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'

/* const Card = ({ lodgings }) => {
  const { lodgingName } = useParams()
  return (
    <div className="gallery">
      {lodgings.map((lodging) => {
        return (
          <Link
            key={lodging.id}
            className="lodging-card"
            to={`/lodging/:${lodging.title}`}
            lodgingData={lodging}
          >
            <img
              src={lodging.cover}
              alt={lodging.title}
              className="lodging-cover"
            />
            <span className="lodging-title">{lodging.title}</span>
          </Link>
        )
      })}
    </div>
  )
} */

//test
const Card = ({ lodging }) => {
  //const { lodgingName } = useParams()
  console.log(lodging)
  return (
    <Link className="lodging-card" to={`/lodging/${lodging.title}`}>
      <img src={lodging.cover} alt={lodging.title} className="lodging-cover" />
      <span className="lodging-title">{lodging.title}</span>
    </Link>
  )
}

export default Card
