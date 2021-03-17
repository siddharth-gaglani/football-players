import React from 'react';

const PlayerList = props =>{
  const images = props.players.map((player)=>{
    return(
            // <div className="">
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
    // </div>
    )
  });

  return(
      <div className="col-md-6 col-lg-3 mb-5">{ images }</div>
  ) 

};

export default PlayerList;


