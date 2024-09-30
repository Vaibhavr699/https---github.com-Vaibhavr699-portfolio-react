import React from 'react'
import './Hero.css'
import profile_img from '../../assets/profile.png'
import resume from '../../assets/result.pdf'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Hero = () => {
  return (
    <div id='home' className='hero'>
        <img src={profile_img} alt=''/>
        <h1><span>I'm Vaibhav Raj,</span> Full Stack developer.</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
        <div className='hero-action'>
            <div className='hero-connect'><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect with Me</AnchorLink></div>
            <a href='' download={resume} ><div className='hero-resume'>
                My Resume
            </div>
            </a>
        </div>
    </div>
  )
}

export default Hero