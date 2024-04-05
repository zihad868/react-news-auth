import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const NewsCard = ({ news }) => {

  const { title, thumbnail_url, details, _id  } = news;

  return (
    <div className="card card-compact bg-base-100 shadow-xl">
      <figure>
        <img
          src={thumbnail_url}
          alt="news image"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>
            {
                details.length > 200 ? 
                   <span>{details.slice(0, 200)} <Link to={`/news/${_id}`} className='text-primary font-bold'>Read more ....</Link></span>
                :
                <span>{details}</span>
            }
        </p>
      </div>
    </div>
  );
};


NewsCard.propTypes = {
    news: PropTypes.object
}

export default NewsCard;
