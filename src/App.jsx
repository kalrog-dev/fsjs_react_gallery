import { Routes, Route, Navigate } from 'react-router-dom'

import { gallery, search, navigation } from '@/data'
import { Search, Navigation, Gallery } from '@/widgets'

import apiKey from './config'
import './App.css'

const App = () => {
  return (
    <div className='container'>
      <Search data={search} />
      <Navigation data={navigation} />
      <Routes>
        <Route path='/' element={<Navigate replace to='/cats' />} />
        <Route path='/cats' element={<p>cats</p>} />
        <Route path='/dogs' element={<p>dogs</p>} />
        <Route path='/computers' element={<p>computers</p>} />
        <Route path='/search/:query' element={<Gallery data={gallery} />} />
      </Routes>
    </div>
  )
}

export default App
