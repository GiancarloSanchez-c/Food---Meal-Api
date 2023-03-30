import { useNavigate } from "react-router-dom";
import "./NotFound.scss";

export const NotFound = ({ title,redirect }) => {
  const navigate = useNavigate();
  
  return (
    <div className="Error">
      <div className="Wrapper">
        <h4 className="Error-h4">404</h4>
        <p className="Error-p"> Whooops... {title} Not found !!!!</p>
        <button className="Error-button" onClick={() => navigate(-1)} >
            Go Back
        </button>
      </div>
    </div>
  );
};
