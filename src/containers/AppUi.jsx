import {useContext} from 'react'
import {BleeperContext} from '../context'
import {ProductItem} from '../components/ProductItem'

import {FilterMethods} from '../containers/FilterMethods'
import SideBar from './SideBar'
const AppUi = () =>{
  const {loading, error} = useContext(BleeperContext)
  return (
    <>
      <SideBar/>
      <FilterMethods/>
      {
        loading ? <h1 className="blue-500">Loading</h1> : null
      }
      {
        error ? <h1 className="red-900">ERROR!</h1> : null
      }
      <ProductItem/>
    </>
  )
}

export default AppUi