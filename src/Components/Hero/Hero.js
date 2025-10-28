import React from 'react'
import './Hero.css'
import { useNavigate } from 'react-router-dom'

export const Hero = () => {
  const navigate = useNavigate()
  
  return (
    <div className='hero'>
      <div className='container'>
        <div className='hero-text'>
          <h1>JACCS Cleaning Services</h1>
          <p>Your Trusted Partner in Cleaning Services</p>
          <button className='btn' onClick={() => navigate('/quote')}>
            Get a Free Quote
          </button>
        </div>
      </div>
    </div>
  )
}
