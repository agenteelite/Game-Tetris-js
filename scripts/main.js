
import { Game } from '/scripts/game.js';

const canvasTetris = document.getElementById("canvas-tetris");
const canvasNext = document.getElementById("canvas-next");
const score = document.getElementById("score");
const menu = document.getElementById("menu");
const btnmenu = document.getElementById("btn-start");

const rows = 20;
const columns = 10;
const cellSize = 26;
const space = 2;

const game = new Game(canvasTetris, rows, columns, cellSize, space, canvasNext);

function update() {
    if(game.gameOver){
        menu.style.display = "flex";
    } else {
        game.update();
        score.innerHTML = game.score;
    }
    
    requestAnimationFrame(update);

}
//Evento para iniciar el juego desde el menu
btnmenu.addEventListener("click", () => {
    setTimeout(() => {
        menu.style.display = "none";
        game.reset(); 
    }, 200);
    
});
update();






