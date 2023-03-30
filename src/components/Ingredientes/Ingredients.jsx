import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getFilterIngredients, getListIngredients } from "../../helpers";
import { Card, Form } from "../index";

export const Ingredients = () => {
  const { ingredients, meals } = useSelector((state) => state.meal);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getListIngredients());
  }, [dispatch]);

  const filterIngredient = (e) => {
    e.preventDefault();
    dispatch(getFilterIngredients(e.target.value));
  };


  console.log(ingredients)

  return (
    <div className="Ingredients">
      <div className="Wrapper">
        <ul className="Ingredients-ul">
          <li className="Ingredients-li">
            {ingredients?.map(({ strIngredients }, id) => (
              <button className="Ingredients-button" key={id} value={strIngredients} type="button">
                {strIngredients}
              </button>
            ))}
          </li>
        </ul>

        <Form />

        <div className="Recipes-card">
          {meals?.map(({ idMeal, strMeal, strMealThumb }) => (
            <Card key={idMeal} id={idMeal} title={strMeal} thumb={strMealThumb} />
          ))}
        </div>

      </div>
    </div>
  );
};
