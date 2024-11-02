import { NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <div className='header'>
            <h1 className='header_title'>React Router</h1>
            <nav>
                <NavLink to={'/'}>home</NavLink>
                <NavLink to={'/about'}>about</NavLink>
                <NavLink to={'/users'}>users</NavLink>
                <NavLink to={'/posts'}>posts</NavLink>
                <NavLink to={'/contact'}>contact</NavLink>
            </nav>
        </div>
    );
};

export default Header;