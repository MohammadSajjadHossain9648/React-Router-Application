import PropTypes from 'prop-types';
import './Post.css'
import { Link } from 'react-router-dom';

const Post = ({post}) => {
    const {id, title} = post;

    return (
        <div className="post_card">
            <h2>Post id: {id}</h2>
            <p>{title}</p>
            <Link to={`${id}`}>
                <button>Show Post Detail</button>
            </Link>
        </div>
    );
};

Post.propTypes = {

};

export default Post;