import React, { Component } from 'react';
import './App.css';

class App extends Component {

  constructor(){
    super()
    console.log("Constructor called.")

    this.state = {rows: [
      <p key="1"> This is my row.</p>,
      <p key="2"> This is my row.</p>,
      <p key="3"> This is my row.</p>
    ]}

  }

  render() {
    return (
      <div className="App">
        <table className="titleBar">
          <tbody>
            <tr>
              <td>
                <img alt="App Icon" width="70" src = "movie_db_icon.png"/>
              </td>
              <td width="8">
              </td>
              <td>
                <h1>MovieDB Search</h1>
              </td>
            </tr>
          </tbody>
        </table>  


      <input className="inputSearch" placeholder="Enter Search..."/>

      {this.state.rows}
      </div>
    );
  }
}

export default App;
