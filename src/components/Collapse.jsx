import { useState } from 'react'
import arrow from '../assets/collapse-arrow.svg'

const Collapse = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <>
      <div key={title} className="collapse">
        <div className="collapse-header">
          <span>{title}</span>
          <img
            className={`arrow ${isOpen ? 'arrow-open' : ''}`}
            onClick={() => (isOpen ? setIsOpen(false) : setIsOpen(true))}
            src={arrow}
            alt="flèche"
          />
        </div>
        <p
          className={`collapse-content ${isOpen ? 'content-open' : 'content-close'}`}
        >
          {content}
        </p>
      </div>
    </>
  )
}

export default Collapse
