
import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'
import { getRandomDimension } from './helpers/Random'
import Location from './components/Location'
import ResdidentList from './components/ResdidentList'

function App() {

  const [location, setLocation] = useState()

  const hundleSumit = (e)=>{
    e.preventDefault()
    const newLocation = (e.target.locationId.value) 
    const URL = `https://rickandmortyapi.com/api/location/${newLocation}`
axios.get(URL)
.then((res)=>setLocation(res.data))
.catch((err)=>console.log(err))

  }
  
useEffect(()=>{
  
const URL = `https://rickandmortyapi.com/api/location/${getRandomDimension()}`

axios.get(URL)
.then((res)=>setLocation(res.data))
.catch((err)=>console.log(err))

},[])


  return (
    <div className="App  text-white text-center">
      <form onSubmit={hundleSumit}>
        <div>
          <input id='locationId' placeholder='Type a location Id...' className='border-2 border-green-600 ' type="text" />
          <button className='bg-green-600 border-green-600 rounded-md'>Search <i className='bx bx-search-alt-2 border-green-600z'></i> </button>
        </div>
        <h2 className='text-green-700 text-2xl '>Welcome to the crazy universe!</h2>
      </form>
       <Location location={location} />
       <ResdidentList location={location}/>
    </div>
  )
}

export default App
