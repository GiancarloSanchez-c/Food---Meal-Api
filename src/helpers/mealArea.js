import axios from 'axios';
import { apiConfig } from '../api';
import { setListArea, setFetchArea,error } from '../redux';


export const getListArea = () => async (dispatch) => {
  try {
    
    const { data } = await axios.get(`${apiConfig.baseUrl}/list.php?a=list`);
    dispatch(setListArea(data.meals));

  } catch (e) {

    dispatch(error('Error: No se pudo obtener las categorías'));

  }
}


export const getFilterArea = (search) => async (dispatch) => {

  try {
    
    const { data } = await axios.get(`${apiConfig.baseUrl}/filter.php?a=${search}`);
    dispatch(setFetchArea(data.meals));

  } catch (e) {

    dispatch(error('Error: No se pudo obtener las categorías'));

  }

}