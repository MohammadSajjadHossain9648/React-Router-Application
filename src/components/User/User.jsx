import PropTypes from 'prop-types';
import './User.css';

const User = ({user}) => {
    const {name, email, phone} = user;

    return (
        <div className="user_card">
            <h1>{name}</h1>
            <p>Email: {email}</p>
            <p>Phone: {phone}</p>
        </div>
    );
};

User.propTypes = {

};

export default User;