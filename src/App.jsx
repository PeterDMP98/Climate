import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios';
import Climate from './components/Climate';
import Loading from './components/Loading';

function App() {
  const [latlon, setLatlon] = useState()
  const [weather, setWeather] = useState()
  const [temperature, setTemperature] = useState()

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
        .then(res => {
          setWeather(res.data)
          const celsius = (res.data.main.temp -273.15).toFixed(1)
          const fahrenhaeit = (celsius*9/5 + 32).toFixed(1)
          setTemperature({celsius, fahrenhaeit})
        })
        .catch(err => console.log(err))
      } 
    
    }, [latlon])



  return (
    <div className="App">

      <div className='capa'>
      </div>

      <video muted autoPlay loop>
        <source src="/public/image/pexels-magda-ehlers-3040808-3840x2160-30fps.mp4"/>
      </video>

      {
        weather
        ? <Climate 
        weather={weather}
        temperature={temperature}
        />
        : <Loading/>
      }

    </div>
  )
}

export default App
