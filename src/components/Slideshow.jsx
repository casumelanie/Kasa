import arrowRight from '../assets/slideshow-arrow_right.svg'
import arrowLeft from '../assets/slideshow-arrow_left.svg'
import { useState } from 'react'

const Slideshow = ({ pictures }) => {
  const [activeSlide, setActiveSlide] = useState(0)
  const prevSlide = activeSlide === 0 ? pictures.length - 1 : activeSlide - 1
  const nextSlide = activeSlide === pictures.length - 1 ? 0 : activeSlide + 1

  return (
    <>
      {pictures.length === 1 ? (
        // une seule image
        <div className="slideshow-container">
          <img className="picture" src={pictures} alt="Chambre" />
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
            <img
              className="picture"
              src={pictures[activeSlide]}
              alt="Images de la chambre"
            />
            <span className="slide-counter">
              {activeSlide + 1}/{pictures.length}
            </span>
          </>
        </div>
      )}
    </>
  )
}

export default Slideshow
