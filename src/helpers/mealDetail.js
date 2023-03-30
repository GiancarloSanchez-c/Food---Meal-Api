import axios from 'axios';
import { apiConfig } from '../api';
import { setMealDetail } from '../redux'


export const fetchMeals = (id) => async (dispatch) => {

  try {
    const { data } = await axios.get(`${apiConfig.baseUrl}/lookup.php?i=${id}`);
    dispatch(setMealDetail(data.meals));

  } catch (e) {
    dispatch(error('Error: No se pudo obtener los datos'));

  }

}