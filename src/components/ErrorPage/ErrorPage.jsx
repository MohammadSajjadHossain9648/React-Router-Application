import { Link, useRouteError } from "react-router-dom";
import './ErrorPage.css'

const ErrorPage = () => {
    const error = useRouteError();

    return (
        <div id="error-page">
            <h1>Oops!</h1>
            <p>Sorry, an unexpected error has occurred.</p>
            <p>{error.statusText || error.message}</p>
            {
                error.status === 404 && <div>
                    <h3>Page not found</h3>
                    <p>Go back where you from</p>
                    <Link to="/"><button>home</button></Link>
                </div>
            }
        </div>
    );
};

export default ErrorPage;