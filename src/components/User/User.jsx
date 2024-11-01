import PropTypes from 'prop-types';
import './User.css';
import { Link } from 'react-router-dom';

const User = ({user}) => {
    const {id, name, email, phone} = user;

    return (
        <div className="user_card">
            <h1>{name}</h1>
            <p>Email: {email}</p>
            <p>Phone: {phone}</p>
            <Link to={`${id}`}>
                <button>Show User Website</button>
            </Link>
        </div>
    );
};

User.propTypes = {

};

export default User;