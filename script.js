console.log("GameHunt Loaded");
function openGame(gameUrl){

    document.getElementById("game-container").style.display = "block";

    document.getElementById("game-frame").src = gameUrl;

    document.body.style.overflow = "hidden";
}

function closeGame(){

    document.getElementById("game-container").style.display = "none";

    document.getElementById("game-frame").src = "";

    document.body.style.overflow = "auto";
}