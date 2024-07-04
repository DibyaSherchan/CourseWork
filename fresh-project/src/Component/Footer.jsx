import './dash.css';
import { Link } from "react-router-dom";
const Footer = () => {
    return ( 
        <>
        <div className="footer">
            <h2>This is a footer</h2>
            <ul>
            <li>
            <Link to='/' className="route">Home</Link>
            </li>
            <li>
            <Link to='/About' className="route">About</Link>
            </li>
            <li>
            <Link to='/Contact' className="route">Contact</Link>
            </li>
            <li>
            <Link to='/Product' className="route">Product</Link>
            </li>
        </ul>
        </div>
        
        </>
     );
}
 
export default Footer;