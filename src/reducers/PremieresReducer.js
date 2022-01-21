import actionsTypesPremieres from '../actions/actionsTypes/ActionsTypePremieres'

const initialState = {
    isLoading: false,
    premieres: null,
    error: null
}

const PremieresReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case actionsTypesPremieres.LOADING_SUCCESS_PREMIERES:
            return {
                ...state,
                isLoading: true
            }
        case actionsTypesPremieres.LOAD_SUCCESS_PREMIERES:
            return {
                ...state,
                isLoading: false,
                premieres: payload
            }
        case actionsTypesPremieres.LOAD_FAILURE_PREMIERES:
            return {
                ...state,
                isLoading: false,
                error: payload
            }

        default: return state
    }
}

export default PremieresReducer