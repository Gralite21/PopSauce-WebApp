//Username
let username;
function createGame(){
    username = document.getElementById('input-username').value;
    localStorage.setItem('username',username);
    window.location.href = "/create-game";
}

function joinGame(){
    localStorage.setItem('username',document.getElementById('input-username').value);
    fetch("/join-game/"+localStorage.getItem('username')+"/"+document.getElementById('input-code').value);
    window.location.href = "/start-game/" + document.getElementById('input-code').value;
}