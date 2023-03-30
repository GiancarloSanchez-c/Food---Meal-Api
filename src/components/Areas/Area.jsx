import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getFilterArea, getListArea } from "../../helpers";
import { Card, Form, NotFound } from "../index";
import "./Area.scss";

export const Area = () => {
  const dispatch = useDispatch();
  const { area, meals } = useSelector((state) => state.meal);

  useEffect(() => {
    dispatch(getListArea());
    dispatch(getFilterArea("American"));
  }, [dispatch]);

  const filterArea = (e) => {
    e.preventDefault();
    dispatch(getFilterArea(e.target.value));
  };

  return (
    <div className="Area">
      <div className="Wrapper">
        <ul className="Area-ul">
          <li className="Area-li">
            {area?.map(({ strArea }, id) => (
              <button className="Area-button" key={id} onClick={filterArea} value={strArea} type="button">
                {strArea}
              </button>
            ))}
          </li>
        </ul>
        <select onChange={filterArea} className="Area-select">
          <option hidden selected> Filter Category </option>
          {area?.map((c, i) => (
            <option className="Category-option" key={i} value={c.strArea}>
              {`${c.strArea[0].toUpperCase()}${c.strArea.slice(1)}`}
            </option>
          ))}
        </select>
        
        <Form />

        <>
          {meals ? (
            <div className="Recipes-card">
              {meals?.map(({ idMeal, strMeal, strMealThumb }) => (
                <Card key={idMeal} id={idMeal} title={strMeal} thumb={strMealThumb} />
              ))}
            </div>
          ) : (
            <NotFound title={"Country"}  />
          )}
        </>
      </div>
    </div>
  );
};
