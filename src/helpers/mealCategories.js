import axios from 'axios';
import { apiConfig } from '../api';
import { setFetchCategories, setListCategories, error } from '../redux';


export const getListCategories = () => async (dispatch) => {
  try {
    const { data } = await axios.get(`${apiConfig.baseUrl}list.php?c=list`);
    dispatch(setListCategories(data.meals));

  } catch (e) {
    dispatch(error('Error: No se pudo obtener las categorías'));

  }
}


export const getFilterCategories = (search) => async (dispatch) => {
  try {
    const { data } = await axios.get(`${apiConfig.baseUrl}/filter.php?c=${search}`);
    dispatch(setFetchCategories(data.meals));

  } catch (error) {
    dispatch(error('Error: No se pudo obtener las categorías'));
  }
}

