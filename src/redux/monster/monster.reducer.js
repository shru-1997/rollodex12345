import { monsterActionTypes } from "./monster.type";

export const INITIAL_STATE = {
    searchField: ''
}

export const searchReducer = (state = INITIAL_STATE, action)=>{
    switch (action.type) {
        case monsterActionTypes.SEARCH_MONSTER:
            return {
                ...state,
                searchField:action.payload
            }
            
            
    
        default:
            return state
    }
}