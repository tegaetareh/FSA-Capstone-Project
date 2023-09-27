import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

export default function Navbar({ cart, setCart, token, setToken }) {
    const [navDisplay, setNavDisplay] = useState(false)
    const navigate = useNavigate();
    //console.log("cart in nav", cart)
    console.log("navbar token", token);
    function goToHome() {

        navigate('/');

    }
    useEffect(() => {
        if (token === "undefined") {
            console.log("I have no tokennnnn")
            setToken(null)
        } 
    }, [token]);
    console.log(navDisplay)
    function handleLogout() {
        setToken('')
        setCart([])
        localStorage.removeItem('Token');
        localStorage.removeItem('Cart');
        setNavDisplay(false)
        console.log("navbar", token);

    }

    return (

        <div className="navbar">

            <h1 className="logo"> <a href="#" onClick={goToHome}>FakeStore</a></h1>
            {token ? <ul className="nav-links">

                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <a href="#" onClick={handleLogout}>Logout</a>
                </li>
                <li>
                    <Link to="/products">Shop Products</Link>
                </li>
                <li>
                    <Link to="/products">Categories</Link>
                </li>
                <li>
                    {/* <Link to="/cart">Cart {(cart.length>0)&& cart.length} </Link> */}
                    <Link to="/cart"> <FontAwesomeIcon icon={faCartShopping} size="lg" style={{ color: "#ffffff", }} /><span className="badge" value={cart.length}>{(cart.length>0)&&cart.length}</span></Link>


                </li>
            </ul> : <ul className="nav-links">
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/login">Login</Link>
                </li>
                <li>
                    <Link to="/products">Shop Products</Link>
                </li>
                <li>
                    <Link to="/products">Categories</Link>
                </li>




            </ul>}

        </div>



    )
}