import { useState } from 'react'
import arrow from '../assets/collapse-arrow.svg'

const Collapse = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <>
      {!isOpen ? (
        <div className="collapse collapse-close">
          <div className="collapse-header">
            <span>{title}</span>
            <img
              className="arrow"
              onClick={() => setIsOpen(true)}
              src={arrow}
              alt="flèche"
            />
          </div>
          <p className="collapse-content content-close">{content}</p>
        </div>
      ) : (
        <div className="collapse collapse-open">
          <div className="collapse-header">
            <span>{title}</span>
            <img
              className="arrow arrow-open"
              onClick={() => setIsOpen(false)}
              src={arrow}
              alt="flèche"
            />
          </div>
          <p className="collapse-content content-open">{content}</p>
        </div>
      )}
    </>
  )
}

export default Collapse
