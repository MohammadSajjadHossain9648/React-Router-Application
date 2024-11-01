import PropTypes from 'prop-types';
import { Outlet } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <h1>Home page</h1>
            {/* Render the children components from the router or used in parent route elements to render their child route elements */}
            <Outlet></Outlet>
        </div>
    );
};

Home.propTypes = {

};

export default Home;