import { useParams } from 'react-router-dom'
import { useGetLodgingById } from '../components/api'
import Error404 from '../components/Error404.jsx'
import Slideshow from '../components/Slideshow.jsx'

const Lodging = () => {
  const { id } = useParams()
  const { data, isLoading, error } = useGetLodgingById(id)
  const pictures = data.pictures

  if (error) return <Error404 />
  //console.log(data)
  //console.log(pictures)

  return (
    <div className="main-container">
      {isLoading ? (
        <div>Chargement en cours...</div>
      ) : (
        <div className="main-container">
          <Slideshow id={id} pictures={pictures} />
        </div>
      )}
    </div>
  )
}

export default Lodging
