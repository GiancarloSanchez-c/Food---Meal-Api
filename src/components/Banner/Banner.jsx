import { Link } from 'react-router-dom';
import './Banner.scss';

export const Banner = () => {
  return (
    <div className="Banner">
      <small className="Banner-small">Inspiration</small>
      <h3 className='Banner-h3'>Weeknight winners</h3>
      <small>on the table in 30 minutes or less.</small>
      <Link to="/" className="Banner-a" rel="norefereer" title="More">
        More
      </Link>
    </div>
  );
};
