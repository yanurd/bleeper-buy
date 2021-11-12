/*
Responsible for showing pic, product name, stock, price
*/

import {useContext} from 'react'
import {BleeperContext} from '../context'

const ProductItem = () =>{
	const {searchedProducts} = useContext(BleeperContext)

	return (
		<div className="md:min-w-min md:max-w-4xl m-2 grid md:grid-cols-2 gap-5 lg:gap-2">
			{
				searchedProducts?.map(product => {
					return (
						<div 
							key={product.id}
							className="
								rounded-md border border-gray-200 flex justify-evenly 
								bg-white hover:border-gray-400 
								transition-colors duration-300 ease-in-out 
								p-5 h-22
								min-w-min
								md:min-w-max">
							<figure className="mx-3">
							<img 
								alt={product.title}
								src={product.image}
								loading="lazy"
								className="w-14 h-20 object-cover"
								/>
							</figure>
						<div className="flex justify-evenly">
							<div className="my-1 text-md">
								<h2>{product.title.substring(0,25)}</h2>
								<span className="font-medium text-sm">Rating: <span className="font-light">{product.rating.count}</span></span>
							</div>
							<div className="justify-end font-medium text-md w-30">
								<p>${product.price}</p>
							</div>
							
						</div>
					</div>
				)})
			}
		</div>
		)
}

export {ProductItem}