import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchMeals } from "../../helpers";
import { NotFound } from "../index";
import "./Detail.scss";

export const Detail = () => {
  const { meal } = useSelector((state) => state.meal);
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMeals(id));
  }, []);


  return (
    <div className="Detail">
      <div className="Wrapper">
        {meal ? (
          <>
            {meal.map((meal) => (
              <div className="Detail-content" key={meal.idMeal}>
                <div className="Detail-top">
                  <h3 className="Detail-h3">{meal.strMeal}</h3>
                  <img src={meal.strMealThumb} loading="lazy" alt={meal.strMeal} className="Detail-img" />
                  <div className="Detail-border"></div>
                </div>
                <h4 className="Detail-h4">{meal.strMeal}</h4>

                <div className="Detail-bottom">
                  <div className="Detail-left">
                    <ul className="Detail-ul">
                      <li className="Detail-li">
                        <h5 className="Detail-h5">Measure</h5>
                      </li>
                      <li className="Detail-li">{meal.strMeasure1}</li>
                      <li className="Detail-li">{meal.strMeasure2}</li>
                      <li className="Detail-li">{meal.strMeasure3}</li>
                      <li className="Detail-li">{meal.strMeasure4}</li>
                      <li className="Detail-li">{meal.strMeasure5}</li>
                      <li className="Detail-li">{meal.strMeasure6}</li>
                      <li className="Detail-li">{meal.strMeasure7}</li>
                      <li className="Detail-li">{meal.strMeasure8}</li>
                      <li className="Detail-li">{meal.strMeasure9}</li>
                      <li className="Detail-li">{meal.strMeasure10}</li>
                      <li className="Detail-li">{meal.strMeasure11}</li>
                      <li className="Detail-li">{meal.strMeasure12}</li>
                      <li className="Detail-li">{meal.strMeasure13}</li>
                      <li className="Detail-li">{meal.strMeasure14}</li>
                    </ul>

                    <ul className="Detail-ul">
                      <li className="Detail-li">
                        <h5 className="Detail-h5">Ingredients</h5>
                      </li>

                      <li className="Detail-li">{meal.strIngredient1}</li>
                      <li className="Detail-li">{meal.strIngredient2}</li>
                      <li className="Detail-li">{meal.strIngredient3}</li>
                      <li className="Detail-li">{meal.strIngredient4}</li>
                      <li className="Detail-li">{meal.strIngredient5}</li>
                      <li className="Detail-li">{meal.strIngredient6}</li>
                      <li className="Detail-li">{meal.strIngredient7}</li>
                    </ul>
                  </div>

                  <div className="Detail-right">
                    <p className="Detail-p">{meal.strInstructions}</p>
                  </div>
                </div>
              </div>
            ))}
          </>
        ) : (
          <NotFound />
        )}
      </div>
    </div>
  );
};
