import { Link, useNavigate } from "react-router-dom"

export default function Footer() {
    const navigate = useNavigate();
    function goToHome() {

        navigate('/');

    }

    return (

        <div className="footer">
            {/* <h1 className="logo"> <a href="#" onClick={goToHome}>FakeStore</a></h1> */}
            {/* <ul className="nav-links">
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/login">Login</Link>
                </li>
                <li>
                    <Link to="/products">Shop Products</Link>
                </li>
            </ul> */}
            <p>Copyright © Tega Etareh. Fullstack Accademy Capstone Project</p>

        </div>



    )
}