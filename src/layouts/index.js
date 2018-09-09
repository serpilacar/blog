import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../assets/styles/all.sass';

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet title="Blog | Serpil Acar" />
    <Navbar />
    <div className="main">{children()}</div>
    <Footer />
  </div>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper;
