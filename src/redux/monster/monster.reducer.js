import  monsterActionTypes  from "./monster.type";

const INITIAL_STATE = {
    searchField: '',
    monsters:[],
    createMonster: []
}


// if action.type === monsterActionTypes.SEARCH_MONSTER
// "SEARCH_MONSTER" === "SEARCH_MONSTER"
// payload you are updating with action.payload

// Output
// {
//     searchField: 'ervin',
//     monsters: [],
//     createMonster: []
// }
export const searchReducer = (state = INITIAL_STATE, action)=>{
    switch (action.type) {
        case monsterActionTypes.SEARCH_MONSTER:
            return {

                // Existing state with rest operator
                ...state,
                searchField:action.payload
            }
            
            
    
        default:
            return state
    }
}