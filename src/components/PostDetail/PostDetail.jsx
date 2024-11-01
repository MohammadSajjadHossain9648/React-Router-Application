import PropTypes from 'prop-types';
import './PostDetail.css'
import { useLoaderData } from 'react-router-dom';

const PostDetail = () => {
    const postDetail = useLoaderData();
    const {id, title, body} = postDetail;

    return (
        <div className="post_detail">
            <h3>Post Id: {id}</h3>
            <h1>Title: {title}</h1>
            <p>{body}</p>
        </div>
    );
};

PostDetail.propTypes = {

};

export default PostDetail;