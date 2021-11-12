import {createContext, useState} from 'react'
import { useProducts } from '../hooks/useProducts'

const BleeperContext = createContext()

const BleeperProvider = (props) => {
	const {loading,error,products} = useProducts();
	const [search, setSearch] = useState("");

	let searchedProducts = [];

	if (!search.length >= 1) {
		searchedProducts = products
	}
	else {
		searchedProducts =  products?.filter(product => {
			const itemName = product.title.toLowerCase()
			const searchedItem = search.toLowerCase()
			return itemName.includes(searchedItem)
		})
	}

	const onSearchChange = (event) => {
		setSearch(event.target.value)
	}
	return (
		<BleeperContext.Provider 
			value={{
				error,
				loading,
				searchedProducts,
				search,
				onSearchChange,
			}}>
		{props.children}
		</BleeperContext.Provider>
	)
}

export {BleeperProvider, BleeperContext}