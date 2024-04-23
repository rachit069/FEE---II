import React from 'react'
import './About.css'
import about_img from '../../assets/about.png'
import play_icon from '../../assets/play-icon.png'

const About = () => {
  return (
    <div className='about'>
      <div className="about-left">
        <img src={about_img} alt="" className='about-img' />
        <img src={play_icon} alt="" className='play-icon' />
      </div>
      <div className="about-right">
        <h3>ABOUT UNIVERSITY</h3>
        <h2>Nurturing Tomorrow's Leaders Today</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis a obcaecati, 
           neque totam ea assumenda inventore fugiat velit hic repudiandae. Ex animi possimus eum quam,
           consequatur dolorum porro numquam voluptate!</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi quis similique
           pariatur assumenda labore eligendi a velit omnis consequuntur, quam numquam nesciunt,
           necessitatibus dolorem asperiores voluptatibus suscipit! Modi, doloribus sunt!</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, ad. Eaque maiores hic,
           earum vero necessitatibus, dolorum, magni ex illo beatae enim perferendis consequatur
           cupiditate perspiciatis recusandae repellat laudantium ab.</p>
      </div>
    </div>
  )
}
export default About
