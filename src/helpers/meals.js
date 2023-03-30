import axios from 'axios';
import { apiConfig } from '../api';
import { setAllMeals,error } from '../redux';


export const fetchMeals = () => async (dispatch) => {

  try {
    const { data } = await axios.get(`${apiConfig.baseUrl}/search.php?s=`);
    dispatch(setAllMeals(data.meals));

  } catch (e) {
    dispatch(error('Error: No se pudo obtener los datos'));

  }

}