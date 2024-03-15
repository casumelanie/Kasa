import { useState, useEffect } from 'react'

const URL_LODGING = `${process.env.PUBLIC_URL}/datas/data.json`

export const useGetLodgings = (url = URL_LODGING) => {
  const [data, setData] = useState({})
  const [isLoading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    setLoading(true)
    fetch(url)
      .then((response) => response.json())
      .then((datas) => setData(datas))
      .catch((error) => setError(error))
      .finally(() => setLoading(false))
  }, [url])

  return { isLoading, data, error }
}

export const useGetLodgingById = (id, url = URL_LODGING) => {
  const [data, setData] = useState({})
  const [isLoading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    setLoading(true)
    fetch(url)
      .then((response) => response.json())
      .then((datas) => {
        const dataFiltered = datas.find((item) => item.id === id)
        if (dataFiltered) {
          setData(dataFiltered)
        } else {
          throw new Error('Erreur lors de la récupération des données')
        }
      })
      .catch((error) => setError(error))
      .finally(() => setLoading(false))
  }, [id, url])

  return { isLoading, data, error }
}
