import PlayersFCB from '../mock/TeamPlayer.json'
import TeamsEspanya from '../mock/teams.json'
import "../css/my-team.css"
import "../css/navBar.css"

import {getTeams, getPlayer} from '../model/modelHandler'
import '../css/show-data.css';

document.addEventListener("DOMContentLoaded", async (oEvent) => {

  // Load Mocks
  let oTeams = TeamsEspanya

  let oPlayers = PlayersFCB
  getTeamsCall(oTeams);

  let teamsDiv = document.getElementsByClassName("team");

  for (let i = 0; i < teamsDiv.length; i++) {
    teamsDiv[i].addEventListener("click", (aoTeamDiv) => {
      onTeamSelect(aoTeamDiv.currentTarget.id);
    });
  }

  const onTeamSelect = async (sIdTeam) => {
    if (sIdTeam) {
      //let oPlayers = await getPlayer()
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

    let aoTitulares = JSON.parse(localStorage.getItem("titulares"));

    let bIsLocalStorageFav = false;

    if(aoFavouritePlayers && aoFavouritePlayers.length > 0){
      aoFavouritePlayers.map((oPlayer) => {
        if(oPlayer.player.id === Number(sIdPlayer)){
          bIsLocalStorageFav = true;
        }
      });
    }

    if(aoTitulares){
      
      aoTitulares.goaalkeeper.map((oPlayer) => {
        if(oPlayer.player.id === Number(sIdPlayer)){
          bIsLocalStorageFav = true;
        }
      });

      aoTitulares.defenders.map((oPlayer) => {
        if(oPlayer.player.id === Number(sIdPlayer)){
          bIsLocalStorageFav = true;
        }
      });

      aoTitulares.midfielders.map((oPlayer) => {
        if(oPlayer.player.id === Number(sIdPlayer)){
          bIsLocalStorageFav = true;
        }
      });

      aoTitulares.attackers.map((oPlayer) => {
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

    let aoTitulares = JSON.parse(localStorage.getItem("titulares"));

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

      if(bValidPlayer && aoTitulares){
        aoTitulares.goaalkeeper.map((oPlayer, i) => {
          if(oPlayer.player.id === oFavourtiePlayer.player.id){
            bValidPlayer = false;
            aoTitulares.goaalkeeper.splice(i,1)
          }
        });

        aoTitulares.defenders.map((oPlayer, i) => {
          if(oPlayer.player.id === oFavourtiePlayer.player.id){
            bValidPlayer = false;
            aoTitulares.defenders.splice(i,1)
          }
        });

        aoTitulares.midfielders.map((oPlayer, i) => {
          if(oPlayer.player.id === oFavourtiePlayer.player.id){
            bValidPlayer = false;
            aoTitulares.midfielders.splice(i,1)
          }
        });

        aoTitulares.attackers.map((oPlayer, i) => {
          if(oPlayer.player.id === oFavourtiePlayer.player.id){
            bValidPlayer = false;
            aoTitulares.attackers.splice(i,1)
          }
        });

        localStorage.setItem(
          "titulares",
          JSON.stringify(aoTitulares)
        );
      }


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

const getTeamsCall = async (oTeams) => {
  //let oTeams = await getTeams();
  printTeam(oTeams);
}