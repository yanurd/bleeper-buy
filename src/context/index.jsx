import {createContext} from 'react'
import { useProducts } from '../hooks/useProducts'

const BleeperContext = createContext()

const BleeperProvider = (props) => {
	const {loading,error,products} = useProducts()
	return (
		<BleeperContext.Provider value={{error,loading,products}}>
		{props.children}
		</BleeperContext.Provider>
	)
}

export {BleeperProvider, BleeperContext}