import React from 'react';
import './App.css';


function Header(props) {
  return (
    <header className="Header ">
      <p>{props.text}</p>
    </header>
  );
}

function Footer(props) {
  return (
    <footer className="Footer">
      <p>Copyrights reserved to {props.trademark}</p>
    </footer>
  );
}

class Odometer extends React.Component {
  constructor() {
    super();
    this.state = {
      odometer: 0
    }
  }
  
  plus_1() {
    if (this.state.odometer + 1 > 9999) {
      this.setState(() => ({
        odometer: this.state.odometer + 1 - 9999
      }));
    }
    else {
      this.setState(() => ({
        odometer: this.state.odometer + 1
      }));
    }
  }

  plus_10() {
    if (this.state.odometer + 10 > 9999) {
      this.setState(() => ({
        odometer: this.state.odometer + 10 - 9999
      }));
    }
    else {
      this.setState(() => ({
        odometer: this.state.odometer + 10
      }));
    }
  }

  plus_100() {
    if (this.state.odometer + 100 > 9999) {
      this.setState(() => ({
        odometer: this.state.odometer + 100 - 9999
      }));
    }
    else {
      this.setState(() => ({
        odometer: this.state.odometer + 100
      }));
    }
  }

  plus_1000() {
    if (this.state.odometer + 1000 > 9999) {
      this.setState(() => ({
        odometer: this.state.odometer + 1000 - 9999
      }));
    }
    else {
      this.setState(() => ({
        odometer: this.state.odometer + 1000
      }));
    }
  }

  reset() {
    this.setState(() => ({
      odometer: 0
    }));
  }

  render() {
    console.log(this.state.odometer)
    return (
      <>
        <h1>{this.state.odometer}</h1>

        <button onClick={() => this.plus_1()}>+1</button>
        <button onClick={() => this.plus_10()}>+10</button>
        <button onClick={() => this.plus_100()}>+100</button>
        <button onClick={() => this.plus_1000()}>+1000</button>
        <button onClick={() => this.reset()}>RESET</button>
      </>
    );
  }
}

function Main(props) {
  return (
    <main>

      <div className="Main">
        <h1>Your can control Odometer here!</h1>
      </div>
      <Odometer />
    </main>
  );
}

function App() {

  return (
    <>
      <Header text="Odometer Application" />
      <Main />
      <Footer trademark="Batool" />

    </>
  );
}


export default App;