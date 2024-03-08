import Banner from '../components/Banner.jsx'
import Card from '../components/Card.jsx'

const Home = () => {
  return (
    <div id="#homepage-container" className="main-container">
      <Banner />
      <div className="lodging-container">
        <Card></Card>
      </div>
    </div>
  )
}

export default Home
