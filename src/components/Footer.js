import React from 'react';
import "../styles/Footer.css";
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

function Footer() {
  return (
    <div>
      <div className ="footer">
        <div className ="socialMedia">
<InstagramIcon/><TwitterIcon/><FacebookIcon/><LinkedInIcon/>

        </div>
        <p>&copy; 2021 pedrotechpizza.com</p>
      </div>
     
    </div>
  )
}

export default Footer
