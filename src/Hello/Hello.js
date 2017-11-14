import React, { Component } from 'react';

const styles = {
  helloContainer: {
    border: '1px dashed red',
    margin: 'auto',
    width: '80%',
  },
};

class Hello extends Component {
  render() {
    return (
      <div style={ styles.helloContainer }>
        <h1 className="App-title">Hello, { this.props.username }!</h1>
      </div>
    );
  }
}

export default Hello;
