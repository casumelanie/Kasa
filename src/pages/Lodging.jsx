import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

/* const Lodging = ({ lodgingData }) => {
  console.log(lodgingData)
  return <div>Page hébergement {lodgingData.title} </div>
} */

//test
const Lodging = ({ lodging }) => {
  //const { lodgingName } = useParams()
  console.log(lodging)
  return <div>Page hébergement </div>
}

export default Lodging
