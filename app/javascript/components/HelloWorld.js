import React from "react"
import PropTypes from "prop-types"
import Iframe from 'react-iframe'

class HelloWorld extends React.Component {
  render () {
    return (
      <React.Fragment>
        React renders finally # Greeting: {this.props.greeting}

        <Iframe url="https://bannersso-preprod.dartmouth.edu/ssomanager/saml/login?relayState=/c/auth/SSB?pkg=twbkwssb.set_origin?launch_page=zwskmadd.maintain_addresses"
        width="600px"
        height="600px"
        id="myId"
        className="myClassname"
        display="initial"
        position="relative"/>
      </React.Fragment>
    );
  }
}

HelloWorld.propTypes = {
  greeting: PropTypes.string
};
export default HelloWorld
