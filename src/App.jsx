import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios';
import Climate from './components/Climate';

function App() {
  const [latlon, setLatlon] = useState()
  const [weather, setWeather] = useState()

  useEffect(() => {
      
    const success = position => {
      const obj = {
        lat: position.coords.latitude,
        lon: position.coords.longitude
      }
      setLatlon(obj)
    }
  
    const error = err => {
      console.log(err);
    }
    navigator.geolocation.getCurrentPosition(success,error)
  
    }, [])+

    useEffect(() => {
      if (latlon) {
        const ApiKey = `313f7d89f41d329d57e1f5b25d45aaab`;
        const url =`https://api.openweathermap.org/data/2.5/weather?lat=${latlon.lat}&lon=${latlon.lon}&appid=${ApiKey}`
        axios.get(url)
        .then(res => setWeather(res.data))
        .catch(err => console.log(err))
      } 
    
    }, [latlon])

  return (
    <div className="App">
      <Climate weather={weather}/> 
    </div>
  )
}

export default App
