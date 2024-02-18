import { Link } from 'react-router-dom';
export default function Error() {
    return(
        <div>
            <h1>404 Sorry page not found.</h1>
            <Link to='/'>Click here to return to home page.</Link>
            
        </div>
    )
}