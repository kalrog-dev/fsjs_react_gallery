import apiKey from './config'

import { Search, Navigation, Gallery } from './widgets'
import { gallery, search, navigation } from './data'

import './App.css'

const App = () => {
  return (
    <div className='container'>
      <Search data={search} />
      <Navigation data={navigation} />
      <Gallery data={gallery} />
    </div>
  )
}

export default App
