import { Link } from "react-router-dom";
import man from '../assets/man.png'
import { useState } from "react";
import Foot from './Footer';
import './dash.css';
const main = () => {
    const [value,setValue] = useState(0)
    return (
        <>
            <div className="nav">
                <img src={man} alt="Man Image" className="Imagery"/>
                <ul>
                        <Link to='/' className="routes">Home</Link>
                        <Link to='/About' className="routes">About</Link>
                        <Link to='/Contact' className="routes">Contact</Link>
                        <Link to='/Product' className="routes">Product</Link>
                </ul>
            </div>
            <div className="main">
                <h2>Welcome to the Home {value}</h2>
                <button onClick={() => {
                    setValue(value+1);
                }}>Increase</button>
            </div>
            <div className="foot">
                <Foot/>
            </div>
        </>
     );
}
 
export default main;