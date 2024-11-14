import React from 'react'
import Image from 'next/image'
import './page.css';  

function Banner() {
  return (
    <section>
      <div className='banner-container'>
        <div className='banner-image-container'>
          <Image
            src='/about.png'
            alt='banner'
            width={300}
            height={300}
            className='banner-image'
          />
        </div>
        <div className='banner-text-container'>
          <div className='banner-text'>
            <div className='banner-about-us-line'></div>
            <h3 className='banner-main-heading'>We Speak the Good Language for Food</h3>
            <p>There are many variations of Lorem Ipsum available, but the majority have suffered alteration in form, by injected humour, randomised words which don't look even slightly believable.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
export default Banner;
