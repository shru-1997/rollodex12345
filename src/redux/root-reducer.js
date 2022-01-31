import {combineReducers} from 'redux'
import { searchReducer } from './monster/monster.reducer'

// Returning State
// {
//     search: searchReducer => {
//         searchField: 'ervin',
//         monsters:[],
//         something: []
//     }
// }
const rootReducer = combineReducers({
    search: searchReducer
})

export default rootReducer

