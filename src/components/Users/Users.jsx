import { useLoaderData } from 'react-router-dom';
import './Users.css';

const Users = () => {
    const users = useLoaderData();

    return (
        <div>
            <h1>Users page</h1>
        </div>
    );
};

export default Users;