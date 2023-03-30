import axios from 'axios';
import { apiConfig } from '../api';
import { setListIngredients, setFetchIngredients, error } from '../redux';


export const getListIngredients = () => async (dispatch) => {

  try {
    const { data } = await axios.get(`${apiConfig.baseUrl}/list.php?i=list`);
    dispatch(setListIngredients(data.meals));
  } catch (e) {
    dispatch(error('Error: No se pudo obtener los ingredientes'));

  }
}

export const getFilterIngredients = (search) => async (dispatch) => {

  try {
    const { data } = await axios.get(`${apiConfig.baseUrl}/filter.php?i=${search}`);
    dispatch(setFetchIngredients(data.meals));

  } catch (e) {
    dispatch(error('Error: No se pudo obtener los ingredientes'));
  }
}