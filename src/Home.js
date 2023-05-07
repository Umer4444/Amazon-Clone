import React from 'react';
import bannerImg from './imgs/Prime-Video.jpg';
import './Home.css';
import Product from './Product';
import firstProduct from './imgs/frozen.webp'
import secondProduct from './imgs/13ProMAx.webp'
import thirdProduct from './imgs/microsd.jpg'
import fourthProduct from './imgs/wind.webp'
import fifthProduct from './imgs/shirts.webp'
import sixthProduct from './imgs/51QBHKpw5dL._AC_UY327_FMwebp_QL65_.webp'

function Home() {
  return (
    <div className='home'>
      <img className='home__image' src={bannerImg} alt="image" />

      {/* PRODUCT ID, TITILE,PRICING */}
      <div className="home__row">
        <Product
          id={1}
          title="Amazon Fire HD 8 Kids tablet, 8' HD display , ages 3-7, includes 2-year worry-free guarantee, Kid-Proof Case, 32 GB, (2022 release), Blue"
          price={11.96}
          rating={5}
          image={firstProduct}
        />
        <Product
          id={2}
          title="Evo Check for iPhone 13 Pro Max –TPU Ultra-Protective Phone Case with 16ft Multi-Drop Protection, Black"
          price={239}
          rating={5}
          image={secondProduct}
        />
      </div>

      <div className="home__row">
        <Product
          id={3}
          title="Amazon Basics microSDXC Memory Card with Full Size Adapter, A2, U3, Read Speed up to 100 MB/s, 256 GB"
          price={199.99}
          rating={5}
          image={thirdProduct}
        />
        <Product
          id={4}
          title="Sunset Vista Design Studios Trailer Park Collection Bear Wind Chime"
          price={98.99}
          rating={5}
          image={fourthProduct}
        />
        <Product
          id={6}
          title="Men's Dress Shirts Solid Long Sleeve Stretch Wrinkle-Free Formal Shirt Business Casual Button Down Shirts"
          price={11.96}
          rating={5}
          image={fifthProduct}
        />
      </div>

      <div className="home__row">
        <Product
          id={7}
          title='Amazon Fire TV 50" 4-Series 4K UHD smart TV, stream live TV without cable'
          price={11.96}
          rating={5}
          image={sixthProduct}
        />
      </div>
      {/* PRODUCT */}
    </div>
  )
}

export default Home
