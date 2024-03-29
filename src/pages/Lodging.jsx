import { useParams } from 'react-router-dom'
import { useGetLodgingById } from '../components/api'
import Error404 from '../components/Error404.jsx'
import Slideshow from '../components/Slideshow.jsx'
import Collapse from '../components/Collapse.jsx'
import { ReactComponent as RatingActiveIcon } from '../assets/active-star.svg'
import { ReactComponent as RatingInactiveIcon } from '../assets/inactive-star.svg'

const Lodging = () => {
  const { id } = useParams()
  const { data, isLoading, error } = useGetLodgingById(id)
  if (error) return <Error404 />
  //console.log(data)

  //rating
  const fullStar = Array(5).fill(RatingActiveIcon)
  const emptyStar = Array(5).fill(RatingInactiveIcon)

  return (
    <div className="main-container">
      {isLoading ? (
        <div>Chargement en cours...</div>
      ) : (
        <>
          <Slideshow pictures={data?.pictures} />
          <div className="lodging-content">
            <div>
              <div className="presentation">
                <p className="name">{data.title}</p>
                <p className="location">{data.location}</p>
                <p className="tags">
                  {data.tags.map((tag) => (
                    <span className="tag" key={tag}>
                      {tag}
                    </span>
                  ))}
                </p>
              </div>

              <div className="about">
                <div className="host">
                  <span className="host-name">{data.host.name}</span>
                  <img
                    src={data.host.picture}
                    alt={`Portrait de ${data.host.name}`}
                    className="host-picture"
                  />
                </div>
                <div className="rating">
                  {fullStar.slice(5 - data.rating).map((fullRating, index) => {
                    return <RatingActiveIcon className="star" key={index} />
                  })}
                  {emptyStar.slice(data.rating).map((emptyRating, index) => {
                    return <RatingInactiveIcon className="star" key={index} />
                  })}
                </div>
              </div>
            </div>

            <div className="more-informations">
              <Collapse title={'Description'} content={data.description} />
              <Collapse
                title={'Équipements'}
                content={
                  <ul className="equipments">
                    {data.equipments.map((equipment) => (
                      <li key={equipment}>{equipment}</li>
                    ))}
                  </ul>
                }
              />
            </div>
          </div>
        </>
      )}
    </div>
  )
}

export default Lodging
