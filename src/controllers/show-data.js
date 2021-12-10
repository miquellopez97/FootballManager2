import PlayersFCB from '../mock/TeamPlayer.json'
import TeamsEspanya from '../mock/teams.json'

import {getTeams} from '../model/modelHandler'

document.addEventListener("DOMContentLoaded", async (oEvent) => {

  // Load Mocks
  let oTeams = TeamsEspanya

  let oPlayers = PlayersFCB

  // let oTeams = await getTeams(sIdTeam)

  printTeam(oTeams);

  let teamsDiv = document.getElementsByClassName("team");

  for (let i = 0; i < teamsDiv.length; i++) {
    teamsDiv[i].addEventListener("click", (aoTeamDiv) => {
      onTeamSelect(aoTeamDiv.currentTarget.id);
    });
  }

  const onTeamSelect = async (sIdTeam) => {
    if (sIdTeam) {
      
      printPlayers(oPlayers.response);
      localStorage.setItem("currentTeam", JSON.stringify(oPlayers.response));
    }
  };
  
  const printPlayers = (aoPlayers) => {
    let playersDivColumn = document.getElementById("playerColumn")

    while(playersDivColumn.firstChild){
      playersDivColumn.removeChild(playersDivColumn.firstChild);
    }

    for (let i = 0; i < aoPlayers.length; i++) {
      playersDivColumn.insertAdjacentHTML(
        'afterbegin',
        `<div class="player" id="${aoPlayers[i].player.id}">
        <img src=${aoPlayers[i].player.photo}>
        <div class="display-player">${aoPlayers[i].player.name}<br><div class="position">${aoPlayers[i].statistics[0].games.position}</div></div>
        </div>`
      );
    }

    let playersDiv = document.getElementsByClassName("player");

    for (let j = 0; j < playersDiv.length; j++) {
      playersDiv[j].addEventListener("click", (aoPlayerDiv) => {
        getInfoPlayer(aoPlayerDiv.currentTarget.id, false);
      });
    }
  };

  const getInfoPlayer = (sPlayerId, aoModified) => {
    let aoCurrentPlayers = aoModified ? aoModified : JSON.parse(localStorage.getItem("currentTeam"));
    let divPlayerColumn = document.getElementById("playerInfo")

    while(divPlayerColumn.firstChild){
      divPlayerColumn.removeChild(divPlayerColumn.firstChild);
    }


    
      aoCurrentPlayers.map((oPlayer) => {
        if (oPlayer.player.id === Number(sPlayerId)) {
          if(!bIsLocalStorageFav(oPlayer.player.id)){
            divPlayerColumn.insertAdjacentHTML(
              'afterbegin',
              `<div class="fav-player"><img src=${oPlayer.player.photo}>
              <div class="favorite" id="${oPlayer.player.id}"><img src="https://cdn-icons-png.flaticon.com/512/929/929566.png"></div>
              <div class="display-player">${oPlayer.player.name}<br>${oPlayer.player.age} años<br>${oPlayer.statistics[0].games.position}</div></div>`
            );
          }else{
            divPlayerColumn.insertAdjacentHTML(
              'afterbegin',
              `<div class="fav-player"><img src=${oPlayer.player.photo}>
              <div class="favorite" id="${oPlayer.player.id}"><img src="https://cdn-icons-png.flaticon.com/512/929/929424.png"></div>
              <div class="display-player">${oPlayer.player.name}<br>${oPlayer.player.age} años<br>${oPlayer.statistics[0].games.position}</div></div>`
            );
          }
  
          let favDiv = document.getElementsByClassName("favorite")[0]
  
          favDiv.addEventListener("click", (aoPlayerDiv) => {
            setFavourite(aoPlayerDiv.currentTarget.id);
          });
        } 
      });
  };

  const bIsLocalStorageFav = (sIdPlayer) => {
    let aoFavouritePlayers = JSON.parse(
      localStorage.getItem("favouritePlayers")
    );
    let bIsLocalStorageFav = false;

    if(aoFavouritePlayers){
      aoFavouritePlayers.map((oPlayer) => {
        if(oPlayer.player.id === Number(sIdPlayer)){
          bIsLocalStorageFav = true;
        }
      });
    }

    return bIsLocalStorageFav

  }

  const setFavourite = (sPlayerId) => {
    let aoFavouritePlayers = JSON.parse(
      localStorage.getItem("favouritePlayers")
    );

    let aoCurrentPlayers = JSON.parse(localStorage.getItem("currentTeam"));
    let oFavourtiePlayer
    
    aoCurrentPlayers.map((oPlayer) => {
      if (oPlayer.player.id === Number(sPlayerId)) {
        oFavourtiePlayer = oPlayer
      }
    });

    if (!aoFavouritePlayers) {
      aoFavouritePlayers = [];
    }
    
    if (aoFavouritePlayers.length > 0) {
      let bValidPlayer = true;

      aoFavouritePlayers.map((oPlayerFav, i) => {
        if (bValidPlayer && (oPlayerFav.player.id === oFavourtiePlayer.player.id)) {
          bValidPlayer = false;
          //TODO: Si es false, habrá que quitar el player
          aoFavouritePlayers.splice(i,1);

          localStorage.setItem(
            "favouritePlayers",
            JSON.stringify(aoFavouritePlayers)
          );
        }
      });

      if (bValidPlayer) {
        aoFavouritePlayers.push(oFavourtiePlayer);
        localStorage.setItem(
          "favouritePlayers",
          JSON.stringify(aoFavouritePlayers)
        );
      }
    } else {
      aoFavouritePlayers.push(oFavourtiePlayer);
      localStorage.setItem(
        "favouritePlayers",
        JSON.stringify(aoFavouritePlayers)
      );

    }

    let nIdPlayer = oFavourtiePlayer.player.id
    getInfoPlayer(nIdPlayer.toString(), [oFavourtiePlayer]);

  };

  // await fetch("https://v3.football.api-sports.io/teams?country=spain&league=140&season=2020", requestOptions)
  //     .then(response => response.text())
  //     .then(result => console.log(result))
  //     .catch(error => console.log('error', error));

  //<div class="team"><img src="http://as01.epimg.net/img/comunes/fotos/fichas/equipos/large/3.png"><div class="display-team">Futbol Club Barcelona</div></div>
});

const printTeam = (oTeams) => {
  for (let i = 0; i < oTeams.response.length; i++) {
    document.getElementById("teamColumn").insertAdjacentHTML(
      "beforebegin",
      `<div class="team" 
      id="${oTeams.response[i].team.id}"}><img src=${oTeams.response[i].team.logo}>
      <div class="display-team">${oTeams.response[i].team.name}</div></div>`
    );
  }
};
