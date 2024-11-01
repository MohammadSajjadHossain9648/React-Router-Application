import PropTypes from 'prop-types';
import './Post.css'

const Post = ({post}) => {
    const {id, title} = post;

    return (
        <div className="post_card">
            <h2>Post id: {id}</h2>
            <p>title: {title}</p>
        </div>
    );
};

Post.propTypes = {

};

export default Post;