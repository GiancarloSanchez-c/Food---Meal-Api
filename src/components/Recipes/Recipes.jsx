import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { fetchMeals } from "../../helpers/meals";
import { Card, Form } from "../index";

import "./Recipes.scss";

export const Recipes = () => {

  const { meals } = useSelector(state => state.meal)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMeals())
  }, [])

  return (
    <div className="Recipes">
      <div className="Wrapper">
        <p className="Recipes-p"> Browse all the recipes here, select a category or search for an ingredient</p>
        <ul className="Recipes-ul">
          <li className="Recipes-li">
            <Link to="/recipes/categories" title="Categories" className="Recipes-a">
              Categories
            </Link>
          </li>
          <li className="Recipes-li">
            <Link to="/recipes/area" title="Area" className="Recipes-a">
              Country
            </Link>
          </li>
          <li className="Recipes-li">
            <Link to="/recipes/ingredients" title="Ingredients" className="Recipes-a">
              Ingredients
            </Link>
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


