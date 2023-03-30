import { Link } from "react-router-dom";
import "./Card.scss";

export const Card = ({ id, title, thumb }) => {
  return (
    <div className="Card">
      <img className="Card-img" loading="lazy" alt={title} src={thumb} />
      <h3 className="Card-h3">
        <Link to={`${id}`} title={title} className="Card-a">{title}</Link>
      </h3>
    </div>
  );
};
