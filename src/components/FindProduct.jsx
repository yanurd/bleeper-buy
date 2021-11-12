import {useContext} from 'react'
import {BleeperContext} from '../context'

const FindProduct = () =>{
	const { search, onSearchChange } = useContext(BleeperContext)
	return (
		<>
		<label htmlFor="search">
			<input 
				type="search"
				value={search}
				onChange={onSearchChange}
				aria-label="Type in to find an item that matches your search"
				placeholder="Product name"
				className="
					cursor-pointer 
					min-w-full
					bg-gray-100
					rounded-md
					m-3 p-1 px-12
					focus:outline-none
					focus:ring-2
					focus:ring-blue-300
					"
			/>
		</label>
		</>
	)

}

export {FindProduct}