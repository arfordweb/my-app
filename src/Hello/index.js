import React, { Component } from 'react';

const styles = {
  helloContainer: {
    border: '1px dashed red',
    margin: 'auto',
    width: '80%',
  },
};

class Hello extends Component {
  constructor(props) {
    super(props);
    this.state = { lang: 'en' };
  }
  toggleLanguage() {
    this.setState({ lang: (this.state.lang === 'sp' ? 'en' : 'sp') });
  }
  render() {
    return (
      <div style={ styles.helloContainer }>
        <h1 className="App-title">{this.state.lang === 'sp'
          ? `¡Hola, ${this.props.username}!`
          : `Hello, ${this.props.username}!`}</h1>
        <button onClick={ () => { this.toggleLanguage() } }>
          {this.state.lang === 'sp' ? 'A Inglés' : 'To Spanish'}</button>
      </div>
    );
  }
}

export default Hello;
