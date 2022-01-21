import axios from 'axios'
import { PremieresLoading, PremieresLoadSucces, PremieresLoadError } from '../actions/PremieresActions'

export const getPremieres = () => (dispatch) => {
    dispatch(PremieresLoading())

    const options = {
        method: 'GET',
        url: 'http://localhost:8081/api/estreno'
    }

    axios.request(options).then(function (response) {
        dispatch(PremieresLoadSucces(response.data))
    }).catch(function (error) {
        dispatch(PremieresLoadError(error))
    })
}