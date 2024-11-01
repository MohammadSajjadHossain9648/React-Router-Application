import { useLoaderData } from 'react-router-dom';
import './Posts.css';

const Posts = () => {
    const posts = useLoaderData();
    console.log(posts);

    return (
        <div>
            <h1>Posts: {posts.length}</h1>
            <div className="">

            </div>
        </div>
    );
};

export default Posts;