import  monsterActionTypes  from "./monster.type";

// Search monster action creator is getting us payload of username from the home component 
export const searchMonster = (username)=>({
    type : monsterActionTypes.SEARCH_MONSTER,
    payload : username
})


// OUTPUT

// {
//     type:"SEARCH_MONSTER"
//     payload:"ervin"
// }