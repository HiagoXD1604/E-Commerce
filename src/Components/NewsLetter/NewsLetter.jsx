import React from 'react'
import './NewsLetter.css'
export const NewsLetter = () => {
  return (
    <div className="newsletter">
        <h1>Tenha Ofertas Exclusivas por Email</h1>
        <p>Se inscreva nas nossa NewsLetter e fique atualizado!</p>
        <div>
            <input type='email' placeholder='seu Email'/>
            <button>Se inscreva</button>
        </div>
    </div>
  )
}
