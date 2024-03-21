import { useParams } from 'react-router-dom'
import { useGetLodgingById } from '../components/api'
import Error404 from '../components/Error404.jsx'

const Lodging = () => {
  const { id } = useParams()
  const { data, isLoading, error } = useGetLodgingById(id)

  if (error) return <Error404 />
  console.log(data)

  return (
    <div>
      {isLoading ? (
        <div>Chargement en cours...</div>
      ) : (
        <span>
          Page hébergement {id} - {data?.title}
        </span>
      )}
    </div>
  )
}

export default Lodging
