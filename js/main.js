import { Games } from "./games.module.js";
import { Ui } from "./ui.module.js";


const gamesInstance = new Games();
const gameUi = new Ui();



window.categorys = async function(category) {
const games = await gamesInstance.getGames(category);
gameUi.displayGame(games);


}

categorys('mmorpg');
// mmorpg shooter sailing permadeath superhero pixel


window.openDetails = async function(id) {
  const games = await gamesInstance.getGameDetails(id);
  gameUi.displayGameDetails(games);

window.document.querySelector('.details').classList.remove('hidden');
window.document.querySelector('.all-games').classList.add('hidden');
window.document.querySelector('.nav').classList.add('hidden');

}



window.closeDetails = function () {
  
document.querySelector('.details').classList.add('hidden');
document.querySelector('.all-games').classList.remove('hidden');
document.querySelector('.nav').classList.remove('hidden');
}





// 
// ${gamesArray[i].id}