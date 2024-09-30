import React from 'react'
import './About.css'
import theme_pattern from '../../assets/bgg.png'
import profile1 from '../../assets/profile11.png'

const About = () => {
  return (
    <div id='about' className='about'>
        <div className='about-title'>
            <h1>About Me</h1>
            <img src={theme_pattern} alt="" />
        </div>
        <div className='about-sections'>
            <div className='about-left'>
                <img src={profile1} alt="" />
            </div>
            <div className='about-right'>
                <div className='about-para'>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam cum sunt provident omnis non odio?</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam aperiam suscipit quaerat ut consequatur esse quis ratione sit, magni maxime.</p>
                </div>
                <div className='about-skills'>
                    <div className='about-skill'><p>HTML & CSS</p><hr style ={{width:"50%"}}/></div>
                    <div className='about-skill'><p>React Js</p><hr style ={{width:"70%"}}/></div>
                    <div className='about-skill'><p>Javascript</p><hr style ={{width:"60%"}}/></div>
                    <div className='about-skill'><p>Next Js</p><hr style ={{width:"40%"}}/></div>
                </div>
            </div>
        </div>
        <div className='about-achievements'>
            <div className='about-achievement'>
                <h1>10+</h1>
                <p>Years of Experience</p>
            </div>
            <hr/>
            <div className='about-achievement'>
                <h1>90+</h1>
                <p>Projects Completed</p>
            </div>
            <hr/>
            <div className='about-achievement'>
                <h1>15+</h1>
                <p>Happy Clients</p>
            </div>
        </div>

    </div>
  )
}

export default About