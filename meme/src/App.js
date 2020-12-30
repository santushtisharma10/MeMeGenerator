//import logo from './logo.svg';
import './App.css';
import React from "react";

class App extends React.Component {

  constructor() {

    super();
    this.state = {

      topLine: "",
      bottomLine: "",
      urlArr: [],
      randomUrl: ""
    }

    this.inputChange = this.inputChange.bind(this)
    this.genMeme = this.genMeme.bind(this)
  }

  inputChange(event) {

    const { name, value } = event.target
    this.setState({

      [name]: value
    })


  }
  genMeme(event) {

    event.preventDefault()

    const num = Math.floor(Math.random() * this.state.urlArr.length)

    this.setState({

      randomUrl: this.state.urlArr[num].url
    })

  }
  componentDidMount() {


    fetch("https://api.imgflip.com/get_memes")
      .then(res => res.json())
      .then(response => this.setState({ urlArr: response.data.memes })
      )

  }

  render() {

    return (
      <div className="meme">
        <div className="navbar">
          <a class="navbar-brand">Meme Generator</a>
        </div>
        <br /><br />
        <div className="wrapper">
        <form >
          <input
            placeholder="Enter Top Line"
            name="topLine"
            value={this.state.topLine}
            onChange={this.inputChange}
          />
          <input
            placeholder="Enter Bottom Line"
            name="bottomLine"
            value={this.state.bottomLine}
            onChange={this.inputChange}
          />
          <button type="submit" className="gen" onClick={this.genMeme}>Generate</button>
        </form>
        </div>
        
        <div className="something" width="600px" height="500px">
          <img src={this.state.randomUrl} alt="" width="600px" height="500px" />
          <div className="upper">
            <h2>{this.state.topLine} </h2>
          </div>

          <div className="lower">
            <h2>{this.state.bottomLine} </h2>
          </div>
        </div>
        
      </div>

    )
  }

}
/*
function App() {
  return (
    /*<div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
    
   <div className="navbar">
     <h1>Meme Generator</h1>
     <br /><br />
     <form>
     <input placeholder="Enter Top Line" ></input>
     <input placeholder="Enter Bottom Line"></input>
     <button type="submit" className="gen">Generate</button>
     </form>
     

   </div>
  
  );
}
*/
export default App;
