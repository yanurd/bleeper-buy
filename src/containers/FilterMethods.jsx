import {FindProduct} from '../components/FindProduct'
import {SortItems} from '../components/SortItems'
import {CheckAllItems} from '../components/CheckAllItems'
const FilterMethods = () =>{
	return (
		<section>
			<FindProduct/>
			<div className=" mx-4 flex justify-between">
				<CheckAllItems/>
				<SortItems/>
			</div>
		</section>
		)
}

export {FilterMethods}