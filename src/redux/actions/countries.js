import { UPDATE_COUNTRIES } from '../../helpers/constants/actionTypes';
import { axiosInstance } from '../../axios/config';

const apiUrl = 'https://restcountries.eu/rest/v2';

export const UpdateCountries = (countries) => {
    return {
        type: UPDATE_COUNTRIES, 
        payload: {
            countries: countries
        }
    }
}

export const SearchCountriesRequest = (name) => {
    return (dispatch) => {
        return axiosInstance.get(`${apiUrl}/name/${name}`)
            .then(result => {
                dispatch(UpdateCountries(result.data))
            })
            .catch(error => {
                throw error;
            })
    }
}