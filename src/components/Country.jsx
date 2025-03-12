import React, {useState, useEffect} from 'react'
import AxiosInstance from './axios'
import { useParams } from 'react-router-dom'

const Country = () => {
  const [countryData, setCountryData] = useState()

  const pageParam = useParams()
  const pageId = pageParam.id
  console.log(pageId)

  const getData = () => {
    AxiosInstance.get(`country/${pageId}/`)
    .then(res => {
        setCountryData(res.data)
        console.log(countryData)
    })
  }
  
  useEffect(() => {
    getData()
  })


  return (
    <div>Country</div>
  )
}

export default Country