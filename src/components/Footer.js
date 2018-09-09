import React from 'react'
import socialLinks from '../assets/social-links';
import Icon from './Icon';

const Footer = () => (
  <footer className="footer">
    <div className="container">
      { socialLinks.map((item) => {
        return (
          <a key={item.name} href={item.link} className="footer-icon">
            <Icon name={item.icon} />
          </a>
        )
      }) }
    </div>
  </footer>
)

export default Footer;
