import { Outlet, useNavigation } from 'react-router-dom';
import Header from '../Header/Header';
import './Home.css'
import Footer from '../Footer/Footer';

const Home = () => {
    const navigation = useNavigation();

    return (
        <div className='home'>
            <Header></Header>
            <div className="home_child">
                {
                    navigation.state === "loading" ?
                    <h1 className='loading_text'>Page is Loading...</h1> : <Outlet></Outlet>
                }
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Home;