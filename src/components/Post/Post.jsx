import PropTypes from 'prop-types';
import './Post.css'
import { useNavigate } from 'react-router-dom';

const Post = ({post}) => {
    const {id, title} = post;

    const navigate = useNavigate();
    const handleToShowDetail = () => {
        navigate(`${id}`);
    }

    return (
        <div className="post_card">
            <h2>Post id: {id}</h2>
            <p>{title}</p>
            {/* static button
            <Link to={`${id}`}>
                <button>Show Post Detail</button>
            </Link> */}

            {/* dynamic button by using useNavigate */}
            <button onClick={handleToShowDetail}>Show Post Detail</button>
        </div>
    );
};

Post.propTypes = {
    post: PropTypes.object.isRequired
};

export default Post;