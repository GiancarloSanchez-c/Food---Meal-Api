import { Link } from "react-router-dom";
import "./Content.scss";

export const Content = () => {
  return (
    <div className="Content">
      <div className="Wrapper">
        <div className="Content-grid">
          <h2 className="Content-h2">New</h2>

          <div className="Content-top">
            <img src="https://www.themealdb.com/images/media/meals/xutquv1505330523.jpg" alt="meal" className="Content-img" loading="lazy" />
            <img src="https://www.themealdb.com/images/media/meals/qxutws1486978099.jpg" alt="meal" className="Content-img" loading="lazy" />
          </div>
          <h2 className="Content-h2">Featured</h2>

          <div className="Content-bottom">
            <img src="https://www.themealdb.com/images/media/meals/svprys1511176755.jpg" alt="meal" className="Content-img" loading="lazy" />
            <img src="https://www.themealdb.com/images/media/meals/uwxqwy1483389553.jpg" alt="meal" className="Content-img" loading="lazy" />
          </div>

          <button className="Content-button">
            <Link to='/recipes' title="Browse the recipe" className="Content-a">
              Browse the recipe
            </Link>
          </button>
        </div>

      </div>
      
    </div>
  );
};
