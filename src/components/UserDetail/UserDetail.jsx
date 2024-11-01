import { useLoaderData } from 'react-router-dom';
import './UserDetail.css'

const UserDetail = () => {
    const userDetail = useLoaderData();
    const {name, website} = userDetail;

    return (
        <div>
            <h1>Website of {name}</h1>
            <p className='user_website'>{website}</p>
        </div>
    );
};

export default UserDetail;