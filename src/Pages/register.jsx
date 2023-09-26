import { useState, useEffect } from "react"
import { useNavigate, Link } from "react-router-dom";
import { loginFunction } from "../API/APIFunctions";
export default function Register({ token }) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);
    const navigate = useNavigate();


    function navigateToLogin() {
        // 👇️ navigate to /

        navigate('/login');

    };
    async function handleSubmit(event) {
        event.preventDefault();
        const result = await loginFunction(username, password, setError)
        console.log("result is", result)


        setUsername('')
        setPassword('')
        if (result) { navigateToLogin(); }






    }



    return (

        <>
            <div className="login">



                {/* {successMessage && <p className="success"> {successMessage}</p>} */}
                {error && <p className='error'>{error}</p>}
                <form onSubmit={handleSubmit}>
                    <table>
                        
                        <tbody>

                            <tr>
                                <td>
                                    Firstname:
                                </td>
                                <td>
                                    <input value={username} onChange={(e) => setUsername(e.target.value)} /> <br />
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    Lastname:
                                </td>
                                <td>
                                    <input value={username} onChange={(e) => setUsername(e.target.value)} /> <br />
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    Username:
                                </td>
                                <td>
                                    <input value={username} onChange={(e) => setUsername(e.target.value)} /> <br />
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    Password:
                                </td>
                                <td>
                                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} /> <br />
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    Confirm Password:
                                </td>
                                <td>
                                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} /> <br />
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