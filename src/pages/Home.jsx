import Banner from '../components/Banner.jsx'
import Card from '../components/Card.jsx'
import { useGetLodgings } from '../components/api.jsx'
import Error404 from '../components/Error404.jsx'

const Home = () => {
  const { data, isLoading, error } = useGetLodgings()

  if (error) return <Error404 />

  return (
    <div id="#homepage-container" className="main-container">
      <Banner />
      <div className="gallery">
        {isLoading ? (
          <span>Chargement en cours...</span>
        ) : (
          data.map((lodging) => <Card key={lodging.id} lodging={lodging} />)
        )}
      </div>
    </div>
  )
}

export default Home
