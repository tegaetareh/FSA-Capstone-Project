import { useState, useEffect } from "react"
import { useNavigate, Link } from "react-router-dom";
import { addNewUser } from "../API/APIFunctions";
export default function Register({ token }) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [cPassword, setCPassword] = useState("");
    const [email, setEmail] = useState("");
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [error, setError] = useState(null);
    const navigate = useNavigate();


    function navigateToLogin() {
        // 👇️ navigate to /

        navigate('/login');

    };

    useEffect(() => {
        if (token) {
            navigateToLogin()
        }
    }, [token]);


    async function handleSubmit(event) {
        event.preventDefault();
        if (password.length < 5) {
            setUsername('')
            setPassword('')
            return (setError("⚠️ Password must be more than 5 characters"))
        }
        if (password != cPassword) {
            return (setError("⚠️ Passwords do not match"))
        }


        const result = await addNewUser(username, password, firstname, lastname, email, setError)
        console.log("result is", result)
        

        setUsername('')
        setPassword('')
        setEmail('')
        setFirstname('')
        setLastname('')
    
        if (result) { navigateToLogin(); }






    }



    return (

        <>
            <div className="login">



                {/* {successMessage && <p className="success"> {successMessage}</p>} */}
                {error && <p className='error'>{error}</p>}
                <form onSubmit={handleSubmit} id="registerForm">
                    <table>

                        <tbody>
                            <tr>
                                <td>
                                    Email:
                                </td>
                                <td>
                                    <input id="email" value={email} onChange={(e) => setEmail(e.target.value)} required/> <br />
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    Firstname:
                                </td>
                                <td>
                                    <input id="firstname" value={firstname} onChange={(e) => setFirstname(e.target.value)} required /> <br />
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    Lastname:
                                </td>
                                <td>
                                    <input id="lastname" value={lastname} onChange={(e) => setLastname(e.target.value)} required /> <br />
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    Username:
                                </td>
                                <td>
                                    <input id="username" value={username} onChange={(e) => setUsername(e.target.value)} required/> <br />
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    Password:
                                </td>
                                <td>
                                    <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} required /> <br />
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    Confirm Password:
                                </td>
                                <td>
                                    <input type="password" id="cPassword" value={cPassword} onChange={(e) => setCPassword(e.target.value)} required /> <br />
                                </td>
                            </tr>
                        </tbody>

                    </table>
                    {/* Firstname:
                    <input value={username} onChange={(e) => setUsername(e.target.value)} /> <br />
                    Lastname:
                    <input value={username} onChange={(e) => setUsername(e.target.value)} /> <br />

                    Username:
                    <input value={username} onChange={(e) => setUsername(e.target.value)} /> <br />

                    Password:
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} /> <br />
                    <p>Confirm Password:
                        <input value={username} onChange={(e) => setUsername(e.target.value)} /> <br /></p> */}

                    <div className="registerFooter"><button className="btn">Submit</button>

                    </div>
                    Already a member? Login <Link className="link" to={`../login`}>here</Link>

                </form>


            </div>
        </>


    )

}