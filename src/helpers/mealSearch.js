import axios from 'axios';
import { apiConfig } from '../api';
import { setSearchMeal} from '../redux'

export const mealSearch = (search) => async (dispatch) => {


  try {
    const { data } = await axios.get(`${apiConfig.baseUrl}/search.php?s=${search}`);
    dispatch(setSearchMeal(data.meals));

  } catch (error) {
    dispatch(error('Error: No se pudo obtener los datos'));

  }

}