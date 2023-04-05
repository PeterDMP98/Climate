import { useState } from "react";


const Climate = ({ weather, temperature }) => {

    const [change, setChange] = useState(true)

    const handeleChangeTemperature = () => setChange(!change)

    return (
        <article className="clima">
            <div className="content-targ">
                <h1>Water Ap</h1>
                <div className="country">
                    <h2>{weather?.name}/ {weather?.sys.country}</h2>
                </div>
                <section className="info">
                    <header><img src={`https://openweathermap.org/img/wn/${weather?.weather[0].icon}@2x.png`} alt="" /> </header>
                    <article className="info-descriction">
                        <h3>"{weather?.weather[0].description}"</h3>
                        <ul className="info-ul">
                            <li className="info-li wind"><span>Wind Speed: </span> <p>{weather?.wind.speed} m/s</p></li>
                            <li className="info-li cloud"><span>Clouds: </span> <p>{weather?.clouds.all} %</p></li>
                            <li className="info-li pressure"><span>Pressure: </span> <p>{weather?.main.pressure} hPa</p></li>
                        </ul>
                    </article>
                </section>
                <footer className="footer-temperature">
                    <h2>
                        {
                            change
                                ? `${temperature?.celsius} ºC`
                                : `${temperature?.fahrenhaeit} ºF`
                        }
                    </h2>
                    <button onClick={handeleChangeTemperature}>change to {change ? 'ºF' : 'ºC'}</button>
                </footer>
            </div>

        </article>
    )
}

export default Climate