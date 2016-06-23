import React from 'react';

class NoMatch extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: 'nana' };
  }

  render() {
    return (
      <div>
        Damn {this.state.name} you look a little bit Lost ! <br />
        Plz don't do the hacker with strange url ... <br />
      </div>
    );
  }
}

const propTypes = {};

NoMatch.propTypes = propTypes;

export default NoMatch;
