import './dash.css'
import man from '../assets/man.png'
const Contact = () => {
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
        <p>THIS IS CONTACT</p>
        </>
    );
}
 
export default Contact;