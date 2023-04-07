import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios';
import Climate from './components/Climate';
import Loading from './components/Loading';
import './loading.css'
import Fondo from './components/Fondo';

function App() {
  
  /*datos del estado del clima */
  const [latlon, setLatlon] = useState()
  const [weather, setWeather] = useState()
  const [temperature, setTemperature] = useState()

  /*longtiud y latitud */
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
    navigator.geolocation.getCurrentPosition(success, error)

  }, []) +

  /*api: estado del clima */
    useEffect(() => {
      if (latlon) {
        const ApiKey = `313f7d89f41d329d57e1f5b25d45aaab`;
        const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latlon.lat}&lon=${latlon.lon}&appid=${ApiKey}`
        axios.get(url)
          .then(res => {
            setWeather(res.data)
            const celsius = (res.data.main.temp - 273.15).toFixed(1)
            const fahrenhaeit = (celsius * 9 / 5 + 32).toFixed(1)
            setTemperature({ celsius, fahrenhaeit })
          })
          .catch(err => console.log(err))
      }

    }, [latlon])

  return (
    <div className="App">
      {
        weather
          ? <div>
            <Climate
              weather={weather}
              temperature={temperature}
            />
            <div className='capa'>
            </div>
            <Fondo forecast={weather?.weather[0].icon} />
          </div>
          : <Loading hour={weather?.weather[0].icon} />
      }
    </div>
  )
}

export default App
