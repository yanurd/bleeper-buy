import {createContext, useState} from 'react'
import { useProducts } from '../hooks/useProducts'

const BleeperContext = createContext()

const BleeperProvider = (props) => {
	const {loading,error,products} = useProducts();
	const [search, setSearch] = useState("");
	const [currentPage, setCurrentPage] = useState(1)
	const [itemPerPage] = useState(4)

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

	//Pagination
	const indexOfLastItem =  currentPage * itemPerPage
	const indexOfFirstItem = indexOfLastItem - itemPerPage
	const currentItems = searchedProducts.slice(indexOfFirstItem,indexOfLastItem)
	const paginate = (number) => setCurrentPage(number)
	return (
		<BleeperContext.Provider 
			value={{
				error,
				loading,
				searchedProducts,
				search,
				onSearchChange,
				paginate,
				currentItems,
				itemPerPage
			}}>
		{props.children}
		</BleeperContext.Provider>
	)
}

export {BleeperProvider, BleeperContext}