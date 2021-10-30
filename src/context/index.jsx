import {createContext, useState} from 'react'

const BleeperContext = useContext()

const BleeperProvider = (props) => {
	const [loading, setLoading] = useState(false)
	const [error, setError] = useState(false)

	return (
		<BleeperContext.Provider 
			value={{
				loading,
				setLoading,
				error,
				setError
			}}>
		{props.children}
		</BleeperContext.Provider>
	)
}