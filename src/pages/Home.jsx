import Banner from '../components/Banner.jsx'
import Card from '../components/Card.jsx'
import Lodging from '../pages/Lodging.jsx'
import { useEffect, useState } from 'react'

/* const Home = () => {
  const [lodgings, setLodging] = useState([])

  useEffect(() => {
    fetch(`${process.env.PUBLIC_URL}/datas/data.json`)
      .then((response) => response.json())
      .then((lodgings) => {
        setLodging(lodgings)
        console.log(lodgings)
      })
      .catch((error) => console.log(error))
  }, [])

  return (
    <div id="#homepage-container" className="main-container">
      <Banner />
      <Card lodgings={lodgings}>
        <Lodging lodgings={lodgings} />
      </Card>
    </div>
  )
} */

//test
const Home = () => {
  const [lodgings, setLodging] = useState([])

  useEffect(() => {
    fetch(`${process.env.PUBLIC_URL}/datas/data.json`)
      .then((response) => response.json())
      .then((lodgings) => {
        setLodging(lodgings)
        //console.log(lodgings)
      })
      .catch((error) => console.log(error))
  }, [])

  return (
    <div id="#homepage-container" className="main-container">
      <Banner />
      <div className="gallery">
        {lodgings.map((lodging) => {
          return (
            <Card key={lodging.id} lodging={lodging}>
              <Lodging lodging={lodging} />
            </Card>
          )
        })}
      </div>
    </div>
  )
}

export default Home
