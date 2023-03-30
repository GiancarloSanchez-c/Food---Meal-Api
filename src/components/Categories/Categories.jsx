import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getFilterCategories, getListCategories } from "../../helpers";
import { Card, Form } from "../index";
import "./Categories.scss";

export const Categories = () => {
  const dispatch = useDispatch();
  const { categories, error, meals } = useSelector((state) => state.meal);

  useEffect(() => {
    dispatch(getListCategories());
    dispatch(getFilterCategories('Beef'));
  }, [dispatch]);

  const filterCategorieFood = (e) => {
    e.preventDefault();
    dispatch(getFilterCategories(e.target.value));
  };

  return (
    <div className="Categories">
      <div className="Wrapper">
        <ul className="Categories-ul">
          <li className="Categories-li">
            {categories?.map(({ strCategory }, id) => (
              <button
                className="Categories-button"
                key={id}
                onClick={filterCategorieFood}
                value={strCategory}
                type="button"
              >
                {strCategory}
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
