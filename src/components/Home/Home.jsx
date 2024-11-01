import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';
import './Home.css'
import Footer from '../Footer/Footer';

const Home = () => {
    return (
        <div className='home'>
            <Header></Header>
            <div className="home_child">
                {/* Render the children components from the router or used in parent route elements to render their child route elements */}
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Home;