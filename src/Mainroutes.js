import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from './components/HomePage'
import RickandMorty from './components/RickandMorty'
import RickandMortyDetail from './components/RickandMortyDetail'
const Mainroutes = () => {
  return (
    
      <Routes>
        <Route path='' element={<HomePage />} />
        <Route path='/Rick' element={<RickandMorty />} />
        <Route path='/Rick/:id' element={<RickandMortyDetail />} />
      </Routes>
  )
}

export default Mainroutes
