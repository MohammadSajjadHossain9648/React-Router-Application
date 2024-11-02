import './PostDetail.css'
import { useLoaderData, useNavigate } from 'react-router-dom';

const PostDetail = () => {
    const postDetail = useLoaderData();
    const {id, title, body} = postDetail;

    const navigate = useNavigate();
    const handleToGoBack = () => {
        navigate(-1); // -1 to go back to the previous page in the history stack
    };

    return (
        <div className="post_detail">
            <h3>Details about Post Id: {id}</h3>
            <h1>{title}</h1>
            <p>{body}</p>
            {/* dynamic button by using useNavigate */}
            <button onClick={handleToGoBack}>Go Back</button>
        </div>
    );
};

export default PostDetail;