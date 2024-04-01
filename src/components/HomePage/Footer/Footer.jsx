import React from 'react'
import './footer.css';
import pic2 from '../../../Assets/pic2.png'
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
const Footer = () => {
  return (
    <div className='fest__footer'>
      <div className='footer'>
      <div className='fest__footer-groupA'>
        <div className='fest__footer-groupA_content'>
      <h3>Contact US</h3>  
      <div>
        <h5>Ayush upadhyay</h5>
        <p>9310771547</p>
        </div>
        <div className='icons'>
         <InstagramIcon/>
         <LinkedInIcon/>
         <FacebookIcon/>
         <YouTubeIcon/>
        </div>
        <div className='mail'>
        <h4>Mail Us</h4>
       <div className='mailid'>
       <p>ayushupadhyay0606@gmail.com</p>
       </div>
        </div>
        </div>
      </div>
      <div className='fest__footer-groupB'>
         <img src={pic2} alt='abhyudaya'/>
      </div>
      <div className='fest__footer-groupC'>
         <h3>Reach Us</h3>
         <div className='name1'>
         <h5>Naveen Lohani</h5>
         <h5>Almora-Bageshwar-Munsyari Rd,<br /> Bageshwar, Dikra, Uttarakhand <br /> 263642</h5>
         <p>9412496006</p>
         </div>
         
      </div>   
      </div>
      <div className='copy'>
      <p>2024, All Copyright Reserved</p>
      </div>
     
    </div>
  )
}

export default Footer