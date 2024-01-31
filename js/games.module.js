

export class Games {
    
   
    
    Games(){
    }
    

     async getGames(category) {
         
             const options = {
             method: 'GET',
             headers: {
                 'X-RapidAPI-Key': '3cff1b087amsh277536c8c76aaf6p13a071jsn4eb6e2ffaf86',
                 'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
                }
             };
        
             const api = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/games?category=${category}`,options);
             const response  = await api.json();  
             return response;
            }
            

            async getGameDetails(id){
           
             const options = {
	          method: 'GET',
	          headers: {
	         'X-RapidAPI-Key': '3cff1b087amsh277536c8c76aaf6p13a071jsn4eb6e2ffaf86',
	    	 'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
	           }
            };
       
            const api = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/game?id=${id}`,options);
            const response  = await api.json();
            return response;
            }
     

}


