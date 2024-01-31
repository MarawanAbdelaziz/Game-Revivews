import { Games } from "./games.module.js";


const game = new Games();

const gamesArray =  game.response;

export class Ui{
    
    gamesArray;
    
    Ui(category){
    this.category =  category;


    }

  //  category = 'shooter';

  //   categorys(categorys) {
  //   this.category = categorys ;
  //   console.log(this.category);
  //   }


  
   
     displayGame(gamesArray) {
      let cartona = ``;
      for (let i = 0; i < gamesArray.length; i++) {
          cartona += `

          <button onclick="openDetails(${gamesArray[i].id})">
              <div class="group border border-[#202328] rounded-md w-[100%] hover:scale-105 duration-500 relative">
                  <div class="p-4">
                      <img src="${gamesArray[i].thumbnail}" alt="Games" />
                  </div>
                  <div class="flex text-white justify-between mx-4">
                      <h3>${gamesArray[i].title}</h3>
                      <span class="bg-[#0D6EFD] grayscale-[70%] group-hover:grayscale-0 duration-500 px-2 text-sm rounded-[3px]">free</span>
                  </div>
                  <div class="felx-col justify-between">
                      <div class="h-[80px] mt-2 mx-4 break-words text-center">
                          <span class="text-gray-400 text-sm line-clamp-3">${gamesArray[i].short_description}</span>
                      </div>
                      <div class="flex justify-between text-xs border border-[#202328] rounded-b-md px-4">
                          <span class="text-white bg-[#32383E] ps-1 pe-1 rounded-md m-1">${gamesArray[i].genre}</span>
                          <span class="text-white bg-[#32383E] ps-1 pe-1 rounded-md m-1">${gamesArray[i].platform}</span>
                      </div>
                  </div>
              </div>
          </button>`;
      }
      document.querySelector('.games').innerHTML = cartona;
  }
  


displayGameDetails(gameDetails){

  let cartona = 
      `
      
  <div class="mt-8 w-[100%]">
  <img
    class="w-[100%]"
    src="${gameDetails.thumbnail}"
    alt=""
  />
</div>
<div class="col-span-2 mt-8 text-white">
  <h3 class="text-3xl font-normal">
    <span class="font-semibold">Title:</span> ${gameDetails.title}
  </h3>
  <h2 class="text-1xl font-light mt-4">
    <span class="font-semibold">Category:</span>
    <span
      class="bg-[#0DCAF0] text-black pt-[1px] pb-[1px] ps-2 pe-2 rounded-md text-sm font-bold"
      >${gameDetails.genre}</span
    >
  </h2>
  <h2 class="text-1xl font-light mt-4">
    <span class="font-semibold">Platform:</span>
    <span
      class="bg-[#0DCAF0] text-black pt-[1px] pb-[1px] ps-2 pe-2 rounded-md text-sm font-bold"
      >${gameDetails.platform}</span
    >
  </h2>
  <h2 class="text-1xl font-light mt-4">
    <span class="font-semibold">Status:</span>
    <span
      class="bg-[#0DCAF0] text-black pt-[1px] pb-[1px] ps-2 pe-2 rounded-md text-sm font-bold"
      >${gameDetails.status}</span
    >
  </h2>
  <p class="mt-4 mb-9 leading-5">
   ${gameDetails.description}
  </p>
  <a
    href="${gameDetails.game_url}" target="_blank"
    class="bg-transparent pt-2 pb-2 ps-4 pe-4 font-bold text-1 rounded-md border-[#FFC107] border hover:bg-[#FFC107] duration-500"
  >
    Show Game
  </a>
</div>
      `;

      document.querySelector('.details-game').innerHTML = cartona;

}










}

