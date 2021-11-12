import {useState} from 'react'

const SortItems = () => {
  const [searchBy, setSearchBy] = useState('')
  const [menu, setMenu] = useState(false)
  
  const sortBy = [
    {name: 'Name: A-Z', api: ''},
    {name: 'Name: Z-A', api: ''},
    {name: 'Price', api:''}
    ]
  const handleSearch = (item) => {
    setSearchBy(item.name)
    setMenu(!menu)
  }
  const openMenu = (menu) => setMenu(!menu)
  const showMenuOptions = () => {
    return (
        <ul className="absolute z-10 mt-1 w-full bg-white shadow-lg max-h-56 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm" tabIndex="-1" role="listbox" aria-labelledby="listbox-label" aria-activedescendant="listbox-option-3">
          {sortBy?.map(item => {
                    return (
                      <li 
                        onClick={()=>handleSearch(item)}
                        className="text-gray-900
                          cursor-pointer select-none 
                          relative py-2 pl-3 pr-9
                          hover:text-blue-400 hover:bg-gray-100" 
                        id="listbox-option-0"
                        role="option"
                        aria-label={item.name}
                        key={item.name}>
                        <div className="flex items-center">
                          {/*<!-- Selected: "font-semibold", Not Selected: "font-normal" -->*/}
                          <span className="font-normal ml-3 block truncate hover:font-bold">
                          {item.name}
                          </span>
                        </div>
                      </li>
                      )
                  })}
        </ul>
    )
  }
  
	return (
		<div className="max-w-xs">
      <div className="mt-1 relative w-36">
        <button 
          onClick={()=>openMenu(menu)}
          type="button" 
          className="relative
            w-full bg-white border border-gray-300
            rounded-md shadow-sm pl-3 pr-10 py-2 
            text-left cursor-pointer
            focus:outline-none focus:ring-1 
            focus:ring-indigo-500 
            focus:border-indigo-500
            sm:text-sm" 
          aria-haspopup="listbox" 
          aria-expanded="true" 
          aria-label="Sort items by:">
          <span 
            className="flex items-center">
            <span className="ml-3 block truncate text-blue-400 font-semibold">
              {searchBy === '' ? 'Search by:' : searchBy}
            </span>
          </span>
          <span className="ml-3 absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
            <svg className="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path fillRule="evenodd" d="M10 3a1 1 0 01.707.293l3 3a1 1 0 01-1.414 1.414L10 5.414 7.707 7.707a1 1 0 01-1.414-1.414l3-3A1 1 0 0110 3zm-3.707 9.293a1 1 0 011.414 0L10 14.586l2.293-2.293a1 1 0 011.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </span>
        </button>
        {
          menu ? showMenuOptions() : null
        }
    </div>
  </div>
)
}
export {SortItems}