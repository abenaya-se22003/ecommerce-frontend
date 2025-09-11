import React from 'react'
import './Footer.css'
import footer_logo from '../../assets/logo_big.png'
import instagram_icon from '../../assets/instagram_icon.png'
import pinterest_icon from '../../assets/pintester_icon.png'
import whatsapp_icon from '../../assets/whatsapp_icon.png'

function Footer () {
  return (
    <div className="footer">
  {/* Logo Section */}
  <div className="footer-logo">
    <img src={footer_logo} alt="Shopper Logo" />
    <p>SHOPPER</p>
  </div>

  {/* Links Section */}
  <ul className="footer-links">
    <li>Company</li>
    <li>Products</li>
    <li>Offices</li>
    <li>About</li>
    <li>Contact</li>
  </ul>

  {/* Social Icons Section */}
  <div className="footer-social-icon">
    <div className="footer-icons-container">
      <img src={instagram_icon} alt="Instagram" />
    </div>
    <div className="footer-icons-container">
      <img src={pinterest_icon} alt="Pinterest" />
    </div>
    <div className="footer-icons-container">
      <img src={whatsapp_icon} alt="WhatsApp" />
    </div>
  </div>

  {/* Copyright Section */}
  <div className="footer-copyright">
    <hr />
    <p>© 2025 Shopper. All Rights Reserved.</p>
  </div>
</div>

  )
}

export default Footer 