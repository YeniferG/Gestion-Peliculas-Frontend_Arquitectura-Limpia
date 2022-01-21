import { combineReducers } from 'redux'
import PremieresReducer from '../reducers/PremieresReducer'

const rootReducer = () => {
    return combineReducers(
        {
            premieres: PremieresReducer
        }
    )
}

export default rootReducer