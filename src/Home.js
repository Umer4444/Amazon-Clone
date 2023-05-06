import React from 'react'
import bannerImg from './imgs/Prime-Video.jpg';
import './Home.css';

function Home() {
  return (
    <div className='home'>
      <img className='home__image' src={bannerImg} alt="image" />

      {/* PRODUCT ID, TITILE,PRICING */}
      <Product id={123455} title="abc"/>
      {/* PRODUCT */}
    </div>
  )
}

export default Home
