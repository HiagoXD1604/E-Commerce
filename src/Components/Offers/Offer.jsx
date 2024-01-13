import React from 'react'
import './Offer.css'
import exclusive_image from '../Assets/exclusive_image.png'

export const Offer = () => {
  return (
    <div className='offers'>
        <div className="offers-left">
            <h1>Exclusivo</h1>
            <h1>Para você</h1>
            <p>Apenas as melhores ofertas</p>
            <button>VEJA AGORA!!</button>
        </div>
        <div className="offers-right">
            <img src={exclusive_image} alt=""/>
        </div>
    </div>
  )
}
