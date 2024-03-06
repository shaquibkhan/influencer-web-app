import React from 'react'
import { Link } from 'react-router-dom'

export const Body = () => {
  return (
    <>
    <div className='cards'>
    <div className="card1"><Link to='/islamic'><img className='img-res' src='./islamic.jpg' alt='Islamic' />Islamic Influencer</Link></div>
    <div className="card2"><Link to='/techie'><img className='img-res' src='./techie.jpeg' alt='Islamic' />Techie Influencer</Link></div>
    <div className="card3"><Link to='/athletic'><img className='img-res' src='./athletic.jpeg' alt='Islamic' />Athletic Influencer</Link></div>
    </div>
    </>
  )
}
