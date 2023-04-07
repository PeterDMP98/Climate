import dia1 from '../assets/video/dia1.mp4';
import diaDefault from '../assets/video/dia-default.mp4';
import diaNubes from '../assets/video/dia-nubes.mp4';
import diaNublado from '../assets/video/dia-nublado.mp4';
import diaLluvia from '../assets/video/dia-lluvia.mp4';
import diaNieve from '../assets/video/dia-nieve.mp4';
import diaNeblina from '../assets/video/dia-neblina.mp4';

import noche1 from '../assets/video/noche-despejada.mp4';
import nocheNubes from '../assets/video/noche-nubes.mp4';
import nocheNublado from '../assets/video/noche-nublada.mp4';
import nocheLluvia from '../assets/video/noche-lluvia.mp4';
import nocheNieve from '../assets/video/noche-nieve.mp4';
import nocheNeblina from '../assets/video/noche-nublado.mp4';

import tormenta from '../assets/video/tormenta.mp4';

const Fondo = ({forecast}) => {

  const fondos= String(forecast)

  return (
    <div>
      <div className='capa'>

      </div>

      {
        fondos.includes("01d" || " 02d") /*dia soliado*/
          ? <video muted autoPlay loop>
            <source src={dia1} />
          </video>

          : fondos.includes("03d") /*nuves dispersas dia*/
            ? <video muted autoPlay loop>
              <source src={diaNubes} />
            </video>

            : fondos.includes("01n" || " 02n") /*noche despejada*/
              ? <video muted autoPlay loop>
                <source src={noche1} />
              </video>

              : fondos.includes("03n") /*nuves dispertas noche*/
                ? <video muted autoPlay loop>
                  <source src={nocheNubes} />
                </video>

                : fondos.includes("04d") /*muy nublado dia*/
                  ? <video muted autoPlay loop>
                    <source src={diaNublado} />
                  </video>

                  : fondos.includes("04n") /*muy nublado noche*/
                    ? <video muted autoPlay loop>
                      <source src={nocheNublado} />
                    </video>

                    : fondos.includes("09d" || "10d") /*lluvia dia*/
                      ? <video muted autoPlay loop>
                        <source src={diaLluvia} />
                      </video>

                      : fondos.includes("09n" || "10n") /*lluvia noche*/
                        ? <video muted autoPlay loop>
                          <source src={nocheLluvia} />
                        </video>

                        : fondos.includes("11d" || "11n") /*tormentas*/
                          ? <video muted autoPlay loop>
                            <source src={tormenta} />
                          </video>

                          : fondos.includes("13d") /*nieve dia*/
                            ? <video muted autoPlay loop>
                              <source src={diaNieve} />
                            </video>

                            : fondos.includes("13n") /*nieve noche*/
                              ? <video muted autoPlay loop>
                                <source src={nocheNieve} />
                              </video>

                              : fondos.includes("50d") /*neblina dia*/
                                ? <video muted autoPlay loop>
                                  <source src={diaNeblina} />
                                </video>

                                : fondos.includes("50n") /*neblina noche*/
                                  ? <video muted autoPlay loop>
                                    <source src={nocheNeblina} />
                                  </video>

                                  : <video muted autoPlay loop>
                                    <source src={diaDefault} />
                                  </video>

      }

    </div>
  )
}

export default Fondo