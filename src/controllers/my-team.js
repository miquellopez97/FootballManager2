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
  let aoFavouritePlayers = JSON.parse(localStorage.getItem("favouritePlayers"));
  for (let i = 0; i < aoFavouritePlayers.length; i++) {
    document.getElementById("playerColumnTeam").insertAdjacentHTML(
      "afterbegin",
      `<div class="player" style="border:none" draggable="true" id=${aoFavouritePlayers[i].player.id}>
          <img draggable="false" style="border:none" class="myImg" src=${aoFavouritePlayers[i].player.photo}>
          <div draggable="false" style="border:none" class="display-player">${aoFavouritePlayers[i].player.name}</div>
        </div>`
    );
  }

  let divPlayer = document.getElementsByClassName("player");

  for (let j = 0; j < divPlayer.length; j++) {
    divPlayer[j].addEventListener("dragstart", dragStart);
  }

  function dragStart(oEvent) {
    oEvent.dataTransfer.setData("text/plain", oEvent.target.id);
    setTimeout(() => {
    oEvent.target.classList.add("hide");
    }, 0);
  }

  const positions = document.querySelectorAll(".dragDiv");

  positions.forEach((box) => {
    box.addEventListener("dragenter", dragEnter);
    box.addEventListener("dragover", dragOver);
    box.addEventListener("dragleave", dragLeave);
    box.addEventListener("drop", drop);
  });
  
});

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
    e.target.classList.remove('drag-over');
    const id = e.dataTransfer.getData('text/plain');
    const draggable = document.getElementById(id);

    // add it to the drop target
    e.target.appendChild(draggable);

    // display the draggable element
    draggable.classList.remove('hide');
  }