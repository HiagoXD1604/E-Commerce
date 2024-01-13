import React from 'react'
import './Hero.css'
import hand_icon from '../Assets/hand_icon.png'
import arrow_icon from '../Assets/arrow.png'
import hero_image from '../Assets/hero_image.png'

export const Hero = () => {
  return (
    <div className='hero'>
        <div className='hero-left'>
            <h2>Usuários novos apenas</h2>
            <div>
                <div className="hero-hand-icon">
                    <p>Nova</p>
                    <img src={hand_icon} alt=""/>
                </div>
                <p>Coleção</p>
                <p>Para Todos</p>
            </div>
            <div className="hero-latest-btn">
                <div>Última Coleção</div>
                <img src={arrow_icon} alt=""/>
            </div>
        </div>
        <div className="hero-right">
            <img src={hero_image} alt=""/>
        </div>
    </div>
  )
}
