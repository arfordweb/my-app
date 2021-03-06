import React, { Component } from 'react';

const styles = {
  helloContainer: {
    border: '1px dashed red',
    margin: 'auto',
    width: '80%',
  },
};

class Hello extends Component {
  propTypes: {
    lang: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
  }
  render() {
    return (
      <div style={ styles.helloContainer }>
        <h1 className="App-title">{this.props.lang === 'sp'
          ? `¡Hola, ${this.props.username}!`
          : `Hello, ${this.props.username}!`}</h1>
      </div>
    );
  }
}

export default Hello;
