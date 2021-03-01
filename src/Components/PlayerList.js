import React from 'react';
import axios from 'axios';


export default class PlayerList extends React.Component {
  state = {
    players: [],
  };

  


  componentDidMount() {
    axios.get(`https://api.npoint.io/d6bd0efc05639084eb17/`)
    .then(res =>{
      this.setState({ players: res.data.playerList });
    }).catch(error =>console.log(error))

  }


  render() { 
    return(

        <div className="container py-5">
          <div className="row">
            <div className="col">
              <h1 className="mb-5">Top 50 Football Players</h1>
              <div className="row">
              {this.state.players.map((player) =>(
                <div className="col-md-6 col-lg-3 mb-5">
                  <div className="card">
                                  
                    <img className="card-img-top" src={require(`../images/${player.Id}.jpg`).default} alt=""></img>
                    <div className="card-body">
                      <h5 className="card-title">Player Name: { player.PFName } </h5>
                    </div>
                    <ul className="list-group list-group-flush">
                      <li className="list-group-item">
                        <h5 className="card-title">Position/SKill: { player.SkillDesc }</h5>
                      </li>
                      <li className="list-group-item">Market Value: {player.Value}</li>
                      {
                        player.UpComingMatchesList.map(match => (
                          <li className="list-group-item">Upcoming Match: {match.CCode} vs {match.VsCCode} at <span className="text-muted">{match.MDate}</span></li>
                        ))
                      }
                    </ul>
                  </div>
                </div>
              ))}
              </div>
            </div>
          </div>
      </div>
    )
  }
}


