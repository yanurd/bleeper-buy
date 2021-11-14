import {useContext} from 'react'
import {BleeperContext} from '../context'

const Pagination = () => {
	const {paginate, searchedProducts,itemPerPage} = useContext(BleeperContext)
	const pageNumbers = [];

	for (let i = 1; i <= Math.ceil(searchedProducts.length / itemPerPage); i++) {
    pageNumbers.push(i);
	}
	return	(
		<div className="flex justify-center">
			<ul className="flex">
				{pageNumbers?.map(number => {
					return (
						<li 
							className="
								text-blue-400
								hover:text-black hover:bg-gray-100
								p-2 mx-1
								cursor-pointer"
							key={number}
							onClick={()=>paginate(number)}
							>{number}
						</li>
					)
				})}
			</ul>
		</div>
		)
}

export {Pagination}