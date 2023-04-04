import { useState } from "react";


const Climate = ({ weather, temperature }) => {

    const [change, setChange] = useState(true)

    console.log(weather);
    
    const handeleChangeTemperature = () => setChange(!change)

    return (
        <article className="clima">
            <h1>Water Ap</h1>
            <div className="country">
                <h2>{weather?.name}/ {weather?.sys.country}</h2>
            </div>
            <section>
                <header><img src={`https://openweathermap.org/img/wn/${weather?.weather[0].icon}@2x.png`} alt="" /> </header>
                <article>
                    <h3>"{weather?.weather[0].description}"</h3>
                    <ul>
                        <li><span>Wind Speed</span>{weather?.wind.speed} m/s</li>
                        <li><span>Clouds</span>{weather?.clouds.all}%</li>
                        <li><span>Pressure</span>{weather?.main.pressure} hPa</li>
                    </ul>
                </article>
            </section>
            <footer>
                <h2>
                {
                    change 
                    ?`${temperature?.celsius} ºC`
                    :`${temperature?.fahrenhaeit} ºF`
                }
                </h2>
                <button onClick={handeleChangeTemperature}>change to {change ? 'ºF' : 'ºC'}</button>
            </footer>        
        </article>
    )
}

export default Climate