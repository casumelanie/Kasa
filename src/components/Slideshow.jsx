import { useGetLodgingById } from '../components/api'
import arrowRight from '../assets/slideshow-arrow_right.svg'
import arrowLeft from '../assets/slideshow-arrow_left.svg'
import { useState } from 'react'

const Slideshow = ({ id, pictures }) => {
  const { data, isLoading, error } = useGetLodgingById(id)
  const [activeSlide, setActiveSlide] = useState(0)
  const prevSlide = activeSlide === 0 ? pictures.length : activeSlide - 1
  const nextSlide = activeSlide === pictures.length ? 0 : activeSlide + 1
  console.log(pictures)

  return (
    <>
      {isLoading ? (
        //chargement
        <div>Chargement en cours...</div>
      ) : pictures.length === 1 ? (
        // une seule image
        <div className="slideshow-container">
          <img className="picture" src={pictures} alt="test" />
        </div>
      ) : (
        // plusieurs images
        <div className="slideshow-container">
          <img
            className="slideshow-arrow arrow-left"
            src={arrowLeft}
            alt="Flèche précédent"
            onClick={() => setActiveSlide(prevSlide)}
          />
          <img
            className="slideshow-arrow arrow-right"
            src={arrowRight}
            alt="Flèche suivant"
            onClick={() => setActiveSlide(nextSlide)}
          />
          <>
            <img className="picture" src={pictures[activeSlide]} alt="test" />
            <span>
              {activeSlide + 1}/{pictures.length}
            </span>
          </>
        </div>
      )}
    </>
  )
}

export default Slideshow
