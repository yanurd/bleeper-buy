import './App.css'
import "tailwindcss/tailwind.css"

import {BleeperProvider} from './context/index.jsx'

import AppUi from './containers/AppUi'
function App() {
  return (
    <BleeperProvider>
      <AppUi />
    </BleeperProvider>
  )
}

export default App
