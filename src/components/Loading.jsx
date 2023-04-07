import React, { useEffect, useState } from 'react'
import sun from '../assets/image/sun.png'
import moon from '../assets/image/moon.png'
import cloud from '../assets/image/cloud.png'

const Loading = ({hour}) => {
  
  
  let sunMoon=String(hour)

  return (
    <div className='loading'>
      <div className='cielo'>

        <div className='clouds'>
          <img src={cloud} alt="nubes" />
          <img src={cloud} alt="nubes" />
          <img src={cloud} alt="nubes" />
          <img src={cloud} alt="nubes" />
          <img src={cloud} alt="nubes" />
          <img src={cloud} alt="nubes" />
          <img src={cloud} alt="nubes" />
          <img src={cloud} alt="nubes" />
          <img src={cloud} alt="nubes" />
          <img src={cloud} alt="nubes" />
        </div>

        {
          sunMoon.includes("d") 
          ?<div className='sun'>
          <img src={sun} alt="sun" />
          </div>
          : <div className='moon'>
          <img src={moon} alt="mon" />
          </div>
        }
      </div>
    </div>
  )
}

export default Loading