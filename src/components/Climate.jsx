const Climate = ({ weather }) => {
    console.log(weather);

    const pais = weather?.sys.country
    const ciudad = weather?.name
    const speedWind = weather?.wind.speed

    return (
        <article>
            <h1>Water Ap</h1>
            <div className="country">
                <h2>{ciudad}/ {pais}</h2>
            </div>
            <section>
                <header></header>
                <article>
                    <h3>"{weather?.weather[0].description}"</h3>
                    <ul>
                        <li><span>Wind Speed</span>{weather?.wind.speed} m/s</li>
                        <li><span>Clouds</span>{weather?.clouds.all}%</li>
                        <li><span>Pressure</span>{weather?.main.pressure} hPa</li>
                    </ul>
                </article>
            </section>            
        </article>
    )
}

export default Climate