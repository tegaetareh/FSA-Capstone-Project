import { useState, useEffect } from "react"
import { useNavigate, Link } from "react-router-dom";
import { loginFunction } from "../API/APIFunctions";
export default function Login({ token, setToken }) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);
    const navigate = useNavigate();


    function navigateToProduct() {
        // 👇️ navigate to /

        navigate('/products');

    };
    async function handleSubmit(event) {
        event.preventDefault();
        if (password.length < 5 || username==="") {
            setUsername('')
            setPassword('')
            return (setError("⚠️ Invalid username or password"))
        }

        const result = await loginFunction(username, password, setError)
        console.log("result is", result)

        localStorage.setItem('Token', result);
        setToken(localStorage.getItem('Token')) //change to setToken(result) if code breaks
        console.log("Login page token is ", token)
        setUsername('')
        setPassword('')
        if (result) { navigateToProduct(); }



    }



    return (

        <>
            <div className="login">
                {/* <h1 className="allProducts">Login</h1> */}


                {/* {successMessage && <p className="success"> {successMessage}</p>} */}
                {error && <p className='error'>{error}</p>}
                <form onSubmit={handleSubmit}>
                    {/* <label>
                            Username:
                        </label> */}
                    Username:
                    <input value={username} onChange={(e) => setUsername(e.target.value)} required/> <br />
                    {/* <label> <br />
                            Password:
                        </label> */}
                    Password:
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required /> <br />

                    <div className="loginFooter"><button className="btn">Submit</button> Forgot password?

                    </div>
                    <br /><br /> <p>Not a member? Register <Link className="link" to={`../register`}>here</Link> </p>
                </form>


            </div>
        </>


    )

}