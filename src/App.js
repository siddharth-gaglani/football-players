
import React from 'react'
import './App.css';
import PlayerList from './Components/PlayerList';
import SearchBar from './Components/SearchBar';
import api from './api/api';


class App extends React.Component {
  state = {
    players: [],
  };

  onSearchSubmit = async (term) =>{
    console.log(term);
    const response = await api.get('/playerList',{
      params: {
        query: term
      }
    })
    // console.log(response.data);
    this.setState({players: response.data})
  }
  
  render() {
    return (
      <div className="App">
        <SearchBar onSubmit={this.onSearchSubmit} />
        <div className="container py-5">
          <div className="row">
          <PlayerList players = {this.state.players} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
