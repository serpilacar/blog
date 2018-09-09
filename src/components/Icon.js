import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faGithub, faTwitter, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const loadIconLibrary = () => new Promise((resolve) => {
  resolve(library.add(faGithub, faTwitter, faLinkedin, faInstagram))
});

class Icon extends React.Component {
  state = {
    loaded: false
  }

  componentDidMount() {
    loadIconLibrary()
      .then(() => this.setState({ loaded: true }))
      .catch(() => alert("Oops! Cannot load font awesome!"))
  }

  render() {
    const { name } = this.props;
    const { loaded } = this.state;
    return (
      loaded ? <FontAwesomeIcon size="lg" icon={["fab", `${name}`]} /> : null
    );
  }
}

export default Icon;