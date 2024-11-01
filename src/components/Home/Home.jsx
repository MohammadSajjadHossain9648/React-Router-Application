import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';

const Home = () => {
    return (
        <div>
            <Header></Header>
            {/* Render the children components from the router or used in parent route elements to render their child route elements */}
            <Outlet></Outlet>
        </div>
    );
};

export default Home;