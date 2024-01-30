import "./App.css"
import Navigations from './components/Navigations'
import { Routes, Route } from 'react-router-dom'
import Locations from './components/Locations'
import Location from './components/Location'
import Resorts from './components/Resorts'
import Resort from './components/Resort'
import Maps from './components/Maps'
import Map from './components/Map'



function App() {

  return (
    <>
    <div>
      <Navigations />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/locations' element={<Locations />} />
        <Route path='/locations/:id' element={<Location />} />
        <Route path='/resorts' element={<Resorts />} />
        <Route path='/resorts/:id' element={<Resort />} />
        <Route path='/maps' element={<Maps />} />
        <Route path='/maps/:id' element={<Map />} />
      </Routes>
      </div>
    </>
  )
}

export default App