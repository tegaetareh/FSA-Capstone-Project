import { Link, useNavigate } from "react-router-dom"

export default function Navbar({cart, setCart}) {
    const navigate = useNavigate();
    console.log("cart in nav", cart)
    function goToHome() {

        navigate('/');

    }

    return (

        <div className="navbar">
            <h1 className="logo"> <a href="#" onClick={goToHome}>FakeStore</a></h1>
            <ul className="nav-links">
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
                <li>
                    <Link to="/cart">Cart {cart.length} </Link>
                    {/* todo: show cart length only if its > 0 */}
                </li>



            </ul>
        </div>



    )
}