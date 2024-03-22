import { useParams } from 'react-router-dom'
import { useGetLodgingById } from '../components/api'
import Error404 from '../components/Error404.jsx'
import Slideshow from '../components/Slideshow.jsx'

const Lodging = () => {
  const { id } = useParams()
  const { data, isLoading, error } = useGetLodgingById(id)
  if (error) return <Error404 />

  return (
    <div className="main-container">
      {isLoading ? (
        <div>Chargement en cours...</div>
      ) : (
        <Slideshow pictures={data?.pictures} />
      )}
    </div>
  )
}

export default Lodging
