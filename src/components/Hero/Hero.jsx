import React from 'react'
import './Hero.css'
import dark_arrow from '../../assets/dark-arrow.png'

export const Hero = () => {
  return (
    <div className='hero container' id='hero'>
        <div className="hero-text">
            <h1>
            Мы гарантируем лучшее разочарование в мире IT
            </h1>
            <p>Добро пожаловать в наш уголок виртуальных страданий и программирования. Мы здесь, чтобы убедиться, что ваши ожидания никогда не совпадут с реальностью. Наслаждайтесь нашими услугами и подготовьтесь к неожиданным сюрпризам!
            </p>
            <button className='btn'>Узнать больше
            <img src={dark_arrow} alt="" /></button>
        </div>
    </div>
  )
}
