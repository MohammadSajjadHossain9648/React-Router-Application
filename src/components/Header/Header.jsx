import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <div className='header'>
            <h1 className='header_title'>React Router</h1>
            <nav>
                <Link to={'/'}>home</Link>
                <Link to={'/about'}>about</Link>
                <Link to={'/users'}>users</Link>
                <Link to={'/contact'}>contact</Link>
            </nav>
        </div>
    );
};

export default Header;