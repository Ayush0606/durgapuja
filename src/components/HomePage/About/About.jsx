import React, { useEffect } from 'react'
import './about.css'
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import dholak from '../../../Assets/dholak.png'
import harmonium from '../../../Assets/harmonium.png'
import guitar from '../../../Assets/guitar.png'
import trumpet from '../../../Assets/trumpet.png'
import music from '../../../Assets/music.png';
import sitar from '../../../Assets/sitar.png';
// import { useEffect } from 'react'
import gsap from 'gsap'
const About = () => {
  useEffect(function () {
    gsap.registerPlugin(ScrollTrigger);
    const tl = gsap.timeline();
    tl.from('.plane1', {
      x: -35,
      y: 50,
      duration: 1,
      rotate: -40,
      scrollTrigger:{
        trigger:'.plane1',
        scroller: '.App',
       
      }
      
    });

    tl.from('.plane2', {
      x: 20,
      y: -25,
      rotate: -20,
      duration: 0.5,  
    });
  }, []);
  return (

    <>
      <div className='fest__about'>
        <div className='fest__about-container'>
          <div className='a1'>
            <img src={sitar} alt='arrowr\R' />
          </div>
          <div className='content'>
            <h1>🙏DURGA PUJA🙏</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo eum, in velit esse repudiandae cupiditate distinctio labore? Laborum, cum voluptates blanditiis nam ipsam exercitationem possimus reprehenderit cupiditate? Veritatis, eum placeat!</p>
          </div>
          <div className='a2'>
            <img src={dholak} alt='ar2' />
          </div>
           <div className='guitar'>
            <img src={harmonium} alt='guitar' />
  </div>
          <div className='music'>
            <img src={trumpet} alt='music' />
          </div>
          <div className='plane1'>
            <img src={guitar} alt='plane1'/>
          </div>
          <div className='plane2'>
            <img src={music} alt='plane2'/>
          </div> 
        </div>



      </div>



    </>
  )
}

export default About;

//////<div className='aero1'>
////<img  src={aero}  alt='aero'/>
//</div>
//<div className='aero'>
//<img  src={aero}  alt='aero'/>
//</div>