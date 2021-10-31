import {useState, useEffect } from 'react'

import {API_URL} from '../utils/index'

export function useProducts() {
  const [loading,setLoading] = useState(false)
  const [error, setError] = useState(false)
  const [products, setProducts] = useState([])

  useEffect(()=>{
    setTimeout(()=>{
      setLoading(true)
    fetch(API_URL)
    .then(data => data.json())
    .then(response => setProducts(response))
    .catch(()=> {
      setLoading(false)
      setError(true)
    })
    .finally(()=> setLoading(false))
    
    return function cleanup(){
      unsuscribe()
    }
    },3000)
    
  },[])

  return {
    loading,
    error,
    products
  }
}