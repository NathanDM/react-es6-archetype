import React, { PropTypes } from 'react';

class Core extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: 'Sheherazade Taouza' };
  }

  render() {
    return (<div>
      Hello {this.state.name} !
      {this.props.children}
    </div>);
  }
}

const propTypes = {
  children: PropTypes.element
};

Core.propTypes = propTypes;

export default Core;
