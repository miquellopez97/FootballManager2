// // Get the modal
// var modal = document.getElementById("myModal");

// // Get the image and insert it inside the modal - use its "alt" text as a caption
// var img = document.getElementById("myImg");
// var modalImg = document.getElementById("img01");
// var captionText = document.getElementById("caption");

// img.onclick = function(){
//     modal.style.display = "block";
//     modalImg.src = this.src;
//     captionText.innerHTML = this.alt;
// }

// // Get the <span> element that closes the modal
// var span = document.getElementsByClassName("close")[0];

// // When the user clicks on <span> (x), close the modal
// span.onclick = function() {
//     modal.style.display = "none";
// }

{
  /* <div id="myModal" class="modal">
              <span class="close">X</span>
              <img class="modal-content" id="img${i}">
              <div id="caption"></div>
          </div> */
}

document.addEventListener("DOMContentLoaded", async (oEvent) => {
  //Toddo : borrar nodos hijos
  let aoTitulares = JSON.parse(localStorage.getItem("titulares"))

  if(!aoTitulares){
    setDataStarter()
  }
  renderPlayers()
  rendertTitulares()

  let divPlayer = document.getElementsByClassName("player");

  for (let j = 0; j < divPlayer.length; j++) {
    divPlayer[j].addEventListener("dragstart", dragStart);
    divPlayer[j].addEventListener("dragend", dragEnd);
  }

  const positions = document.querySelectorAll(".dragDiv");

  positions.forEach((box) => {
    box.addEventListener("dragenter", dragEnter);
    box.addEventListener("dragover", dragOver);
    box.addEventListener("dragleave", dragLeave);
    box.addEventListener("drop", drop);
  });
  
});
function dragStart(oEvent) {
  oEvent.dataTransfer.setData("text/plain", oEvent.target.id);
  setTimeout(() => {
  oEvent.target.classList.add("hide");
  }, 0);
}

function dragEnd(oEvent) {
  oEvent.dataTransfer.setData("text/plain", oEvent.target.id);
  setTimeout(() => {
    if(oEvent.target && oEvent.target.classList){
      oEvent.target.classList.remove("hide");
    }
    }, 0);
}

function dragEnter(e) {
    e.preventDefault();
    e.target.classList.add('drag-over');
  }

  function dragOver(e) {
    e.preventDefault();
    e.target.classList.add('drag-over');
  }

  function dragLeave(e) {
    e.target.classList.remove('drag-over');
  }

  function drop(e) {
    if((e.target.parentElement.className === "player" &&  e.target.parentElement.parentElement.id === "playerColumnTeam") || (e.target.className === "player")){
      renderPlayers()
      rendertTitulares()
    }else if (e.target.className.includes("titulares") || (e.target.parentElement.className === "player" && e.target.parentElement.parentElement.className.includes("titulares")) || (e.target.className === "player" && e.target.parentElement.className.includes("titulares"))){
      let id = e.dataTransfer.getData('text/plain');
      setNewStarter(Number(id), e.target)
      e.target.classList.remove('drag-over');
      // if(id && id.length > 0){
      //   const draggable = document.getElementById(id);

      // // add it to the drop target
      // e.target.appendChild(draggable);

      // // display the draggable element
      // draggable.classList.remove('hide');
      // }
      renderPlayers()
      rendertTitulares()
      
    }else{
      e.target.classList.remove('drag-over');
      const id = e.dataTransfer.getData('text/plain');
      const draggable = document.getElementById(id);

      // add it to the drop target
      e.target.appendChild(draggable);

      // display the draggable element
      draggable.classList.remove('hide');
      setNewFavouritePlayer(Number(id))
      }
      location.reload();
  }

  function renderPlayers() {
    let aoFavouritePlayers = JSON.parse(localStorage.getItem("favouritePlayers"));

    let divPlayerColumn = document.getElementById("playerColumnTeam")

    while(divPlayerColumn.firstChild){
      divPlayerColumn.removeChild(divPlayerColumn.firstChild);
    }

      for (let i = 0; i < aoFavouritePlayers.length; i++) {
        divPlayerColumn.insertAdjacentHTML(
          "afterbegin",
          `<div class="player" style="border:none" draggable="true" id=${aoFavouritePlayers[i].player.id}>
              <img draggable="false" style="border:none" class="myImg" src=${aoFavouritePlayers[i].player.photo}>
              <div draggable="false" style="border:none" class="display-player">${aoFavouritePlayers[i].player.name} <br> ${aoFavouritePlayers[i].statistics[0].games.position} </div>
            </div>`
        );
      }
  }

  function rendertTitulares(){
    let aoTitulares = JSON.parse(localStorage.getItem("titulares"));
    let divTitularGoalkeeper = document.getElementById("goalkeeper")
    let divTitularDefender = document.getElementById("defenders")
    let divTitularMidfilder = document.getElementById("midfielders")
    let divTitularAttacker = document.getElementById("attackers")
    let bModify  = true

      if (fullTeam(aoTitulares)){
        if(aoTitulares.goaalkeeper.length > 0 ){
          if(bModify){
            while(divTitularGoalkeeper.firstChild){
              divTitularGoalkeeper.removeChild(divTitularGoalkeeper.firstChild);
            }
          }
          
          renderTitularPlayer(aoTitulares.goaalkeeper, divTitularGoalkeeper)
        }
        if(aoTitulares.defenders.length > 0){
          if(bModify){
            while(divTitularDefender.firstChild){
              divTitularDefender.removeChild(divTitularDefender.firstChild);
            }
          }
          
          renderTitularPlayer(aoTitulares.defenders, divTitularDefender)
        }
        if(aoTitulares.midfielders.length > 0){
          if(bModify){
            while(divTitularMidfilder.firstChild){
              divTitularMidfilder.removeChild(divTitularMidfilder.firstChild);
            }
          }
          renderTitularPlayer(aoTitulares.midfielders, divTitularMidfilder)
        }
        if(aoTitulares.attackers.length > 0){
          if(bModify){
            while(divTitularAttacker.firstChild){
              divTitularAttacker.removeChild(divTitularAttacker.firstChild);
            }
          }
          
          renderTitularPlayer(aoTitulares.attackers, divTitularAttacker) 
        }
      }
  }

  function renderTitularPlayer (aoPlayers, divToRender) {
    for (let i = 0; i < aoPlayers.length; i++) {
      divToRender.insertAdjacentHTML(
        "afterbegin",
        `<div class="player" style="border:none" draggable="true" id=${aoPlayers[i].player.id}>
            <img draggable="false" style="border:none" class="myImg" src=${aoPlayers[i].player.photo}>
            <div draggable="false" style="border:none" class="display-player">${aoPlayers[i].player.name} <br> ${aoPlayers[i].statistics[0].games.position} </div>
          </div>`
      );
      
    }
  }

  function setNewStarter(nIdPlayer, aoTarget){
    let aoFavouritePlayers = JSON.parse(localStorage.getItem("favouritePlayers"));
    let aoTitulares = JSON.parse(localStorage.getItem("titulares"));
    if (fullTeam(aoTitulares)) {
    if(aoFavouritePlayers && aoFavouritePlayers.length > 0){
      for (let i = 0; i < aoFavouritePlayers.length; i++) {
        if(aoFavouritePlayers[i].player.id === nIdPlayer){
          let bAddedCorrect = setPositionPlayer(aoFavouritePlayers[i], aoTarget)
          if(bAddedCorrect){
            aoFavouritePlayers.splice(i,1);
            localStorage.setItem("favouritePlayers", JSON.stringify(aoFavouritePlayers))
            
          }
        }
      }
    }
  }
  }


  function setPositionPlayer(oPlayer, aoTarget) {
    let aoTitulares = JSON.parse(localStorage.getItem("titulares"));
    
    let sDropPosition = setDropPosition(aoTarget)

    let oPlayerChangeDrop = setDropPlayer(aoTarget)
    if (fullTeam(aoTitulares)) {
      switch (sDropPosition) {
      case "Goalkeeper":
        if(aoTitulares.goaalkeeper.length < 1){
          aoTitulares.goaalkeeper.push(oPlayer);
          if(sDropPosition !== oPlayer.statistics[0].games.position){
            setErrorOutOfPosition()
          }
          localStorage.setItem("titulares", JSON.stringify(aoTitulares))
          return true
        }else {
          //Todo Quitar portero i poner a otro
          if(oPlayerChangeDrop){
            changePlayer(oPlayerChangeDrop, oPlayer, "goaalkeeper")
          }
          return false
        }

      case "Defender":
        if(aoTitulares.defenders.length < 5){
          aoTitulares.defenders.push(oPlayer);
          if(sDropPosition !== oPlayer.statistics[0].games.position){
            setErrorOutOfPosition()
          }
          localStorage.setItem("titulares", JSON.stringify(aoTitulares))
          return true
        }else {
          //Todo Quitar portero i poner a otro
          if(oPlayerChangeDrop){
            changePlayer(oPlayerChangeDrop, oPlayer, "defenders")
          }
          return false
        }

      case "Midfielder":
        if(aoTitulares.midfielders.length < 5){
          aoTitulares.midfielders.push(oPlayer);
          if(sDropPosition !== oPlayer.statistics[0].games.position){
            setErrorOutOfPosition()
          }
          localStorage.setItem("titulares", JSON.stringify(aoTitulares))
          return true
        }else {
          //Todo Quitar portero i poner a otro
          if(oPlayerChangeDrop){
            changePlayer(oPlayerChangeDrop, oPlayer, "midfielders")
          }
          return false
        }
        

      case "Attacker":
        if(aoTitulares.attackers.length < 3){
          aoTitulares.attackers.push(oPlayer);
          if(sDropPosition !== oPlayer.statistics[0].games.position){
            setErrorOutOfPosition()
          }
          localStorage.setItem("titulares", JSON.stringify(aoTitulares))
          return true
        }else {
          //Todo Quitar portero i poner a otro
          if(oPlayerChangeDrop){
            changePlayer(oPlayerChangeDrop, oPlayer , "attackers")
          }
          return false
        }

      default:
        break;
    }}
    
  }

  function setDataStarter () {
    let aoTitulares = {
      goaalkeeper:[],
      defenders: [],
      midfielders: [],
      attackers: []
    }
    
    localStorage.setItem("titulares",JSON.stringify(aoTitulares))
  }

  function setDropPosition(aoTarget) {
    if(aoTarget.id === "goalkeeper" || aoTarget.id === "defenders" || aoTarget.id === "midfielders" || aoTarget.id === "attackers"){
      switch (aoTarget.id) {
        case "goalkeeper":
          return "Goalkeeper"
          break;
        case "defenders":
          return "Defender"
          break;

        case "midfielders":
          return "Midfielder"
          break;

        case "attackers":
          return "Attacker"
          break;
        default:
          break;
      }
    }else{
      return setDropPosition(aoTarget.parentElement)
    }
  }

  function setDropPlayer(aoTarget){
    let idPlayerTarget;
    if(aoTarget.id === "goalkeeper" || aoTarget.id === "defenders" || aoTarget.id === "midfielders" || aoTarget.id === "attackers"){
      return false
    }else if(aoTarget.className === "player" || aoTarget.parentElement.className === "player"){
      if(aoTarget.parentElement.id){
        idPlayerTarget = Number(aoTarget.parentElement.id)
      }else if(aoTarget.id){
        idPlayerTarget = Number(aoTarget.parentElement.id)
      }
      if(idPlayerTarget){
        let oTargetPlayer;
        let aoTitulares = JSON.parse(localStorage.getItem("titulares"));
        if (fullTeam(aoTitulares)){
        aoTitulares.goaalkeeper.map((oPlayer)=>{
          if(oPlayer.player.id === idPlayerTarget){
            oTargetPlayer = oPlayer;
          }
        })

        aoTitulares.defenders.map((oPlayer)=>{
          if(oPlayer.player.id === idPlayerTarget){
            oTargetPlayer = oPlayer;
          }
        })

        aoTitulares.midfielders.map((oPlayer)=>{
          if(oPlayer.player.id === idPlayerTarget){
            oTargetPlayer = oPlayer;
          }
        })

        aoTitulares.attackers.map((oPlayer)=>{
          if(oPlayer.player.id === idPlayerTarget){
            oTargetPlayer = oPlayer;
          }
        })

        return oTargetPlayer
      }else {
        return false
      }


      }
    }
  }

  function setErrorOutOfPosition(){

  }

  function changePlayer(oTargetPlayer, oNewStarterplayer, sPosition){
    let aoFavouritePlayers = JSON.parse(localStorage.getItem("favouritePlayers"));
    let aoTitulares = JSON.parse(localStorage.getItem("titulares"));

    aoTitulares[sPosition].map((oPlayer,i)=>{
      if(oPlayer.player.id === oTargetPlayer.player.id){
        aoTitulares[sPosition].splice(i,1)
        aoTitulares[sPosition].push(oNewStarterplayer)
      }
    });

    for (let i = 0; i < aoFavouritePlayers.length; i++) {
      if(aoFavouritePlayers[i].player.id === oNewStarterplayer.player.id){
        aoFavouritePlayers.splice(i,1)
        aoFavouritePlayers.push(oTargetPlayer)
      }
      
    }

    localStorage.setItem("favouritePlayers", JSON.stringify(aoFavouritePlayers))
    localStorage.setItem("titulares", JSON.stringify(aoTitulares))

    renderPlayers()
    rendertTitulares()
  }

  function setNewFavouritePlayer(nIdNumber) {
    let aoFavouritePlayers = JSON.parse(localStorage.getItem("favouritePlayers"));
    let bValid = false;
     for (let j = 0; j < aoFavouritePlayers.length; j++) {
       if(aoFavouritePlayers[j].player.id === nIdNumber){
        bValid = true
      }
    }

    if(!bValid){
      let aoTitulares = JSON.parse(localStorage.getItem("titulares"));
      if(fullTeam(aoTitulares)){
      for (let j = 0; j < aoTitulares.goaalkeeper.length; j++) {
        if(aoTitulares.goaalkeeper[j].player.id === nIdNumber){
          aoFavouritePlayers.push(aoTitulares.goaalkeeper[j])
          aoTitulares.goaalkeeper.splice(j,1)
       }
      }

      for (let j = 0; j < aoTitulares.defenders.length; j++) {
        if(aoTitulares.defenders[j].player.id === nIdNumber){
          aoFavouritePlayers.push(aoTitulares.defenders[j])
          aoTitulares.defenders.splice(j,1)
       }
      }

      for (let j = 0; j < aoTitulares.midfielders.length; j++) {
        if(aoTitulares.midfielders[j].player.id === nIdNumber){
          aoFavouritePlayers.push(aoTitulares.midfielders[j])
          aoTitulares.midfielders.splice(j,1)
       }
      }

      for (let j = 0; j < aoTitulares.attackers.length; j++) {
        if(aoTitulares.attackers[j].player.id === nIdNumber){
          aoFavouritePlayers.push(aoTitulares.attackers[j])
          aoTitulares.attackers.splice(j,1)
       }
      }

      localStorage.setItem("favouritePlayers", JSON.stringify(aoFavouritePlayers))
      localStorage.setItem("titulares", JSON.stringify(aoTitulares))
    }
    }
  }

  function fullTeam (aoPlayersTitulars) {
    let nSumaTotal = aoPlayersTitulars.goaalkeeper.length + aoPlayersTitulars.defenders.length + aoPlayersTitulars.midfielders.length + aoPlayersTitulars.attackers.length;
    if (nSumaTotal > 11) {
      alert("Your Team is full")
      return false;
    } else {
      return true;
    }
  }