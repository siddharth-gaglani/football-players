
import React, { Component } from 'react'
import './App.css';
import PlayerList from './Components/PlayerList';
import SearchBar from './Components/SearchBar';
import axios from 'axios';


class App extends React.Component {

  // onSearchSubmit(term){
  //   console.log(term);
  //   // axios.get(`https://api.npoint.io/d6bd0efc05639084eb17/`,{
  //   //   params: {
  //   //     query: term
  //   //   }
  //   // })
  // }
  
  render() {
    return (
      <div className="App">
        {/* <SearchBar onSubmit={this.onSearchSubmit} /> */}
        <PlayerList />
      </div>
    );
  }
}

export default App;
