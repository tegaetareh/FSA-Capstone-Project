import { Link, useNavigate } from "react-router-dom"

export default function Navbar({ cart, setCart, token, setToken }) {
    const navigate = useNavigate();
    console.log("cart in nav", cart)
    function goToHome() {

        navigate('/');

    }

    function handleLogout() {
        setToken('')
        setCart([])
        localStorage.removeItem('Token');
        localStorage.removeItem('Cart');
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
                    <Link to="/cart">Cart {cart.length} </Link>
                    {/* todo: show cart length only if its > 0 */}
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