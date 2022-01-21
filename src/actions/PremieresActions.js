import actionsTypesPremieres from './actionsTypes/ActionsTypePremieres'

export const PremieresLoading = () => {
    return {
        type: actionsTypesPremieres.LOADING_SUCCESS_PREMIERES
    }
}

export const PremieresLoadSucces = (premieres) => {
    return {
        type: actionsTypesPremieres.LOAD_SUCCESS_PREMIERES,
        payload: premieres
    }
}

export const PremieresLoadError = (error) => {
    return {
        type: actionsTypesPremieres.LOAD_FAILURE_PREMIERES,
        payload: error
    }
}