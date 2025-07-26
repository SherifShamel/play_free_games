import DisplayGames from "./DisplayGames.js";
let displayGames = new DisplayGames();

//just call once to display some data
displayGames.displayData("Mmorpg")

document.querySelector("#navbarNav").addEventListener('click', function (e) {
    displayGames.displayData(e.target.text);
})

document.querySelector("#navbarNav").addEventListener('click', function (e) {
    e.preventDefault()
})