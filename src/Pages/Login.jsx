import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom";
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
        const result = await loginFunction(username, password, setError)
        console.log ("result is", result)
        setToken(result)
        console.log("token is ", token)
        setUsername('')
        setPassword('')
        if(result){navigateToProduct();}
        
        


        // try {
        //     const response = await fetch('https://fakestoreapi.com/auth/login',
        //         {
        //             method: 'POST',
        //             headers: {
        //                 "Content-Type": "application/json"
        //             },
        //             body: JSON.stringify({

        //                 username: username,
        //                 password: password

        //             })
        //         })
        //     const result = await response.json();
        //     setUsername('')
        //     setPassword('')

        //     console.log(result);
        //     //   if (!result.success) {
        //     //     setError(result.error.message)
        //     //     console.log(result.error.message)
        //     //   }

        //     //   setSuccessMessage(result.data.message)
        //     setToken(result.token)
        //     console.log("login passed", token)

        //     //   localStorage.setItem('Token', result.token);
        //     //   console.log("login local storage", localStorage.getItem('Token'))
        //     //   setToken(localStorage.getItem('Token'))
        //     console.log("login after set token", token)
        //     //console.log("Success message", successMessage)
        //     //console.log("Error is ", error)
        //     //   navigateToPosts();

        // } catch (error) {
        //     console.log(error.message)
        //     setError("Invalid username or password");
        //     setUsername('')
        //     setPassword('')
        // }

    }



    return (

        <>
            <div className="login">
                <h1 className="allProducts">Login</h1>

                <div>
                    {/* {successMessage && <p className="success"> {successMessage}</p>} */}
                    {error && <p className='error'>{error}</p>}
                    <form onSubmit={handleSubmit}>
                        <label>
                            Username:
                        </label> <input value={username} onChange={(e) => setUsername(e.target.value)} />
                        <label>
                            Password:
                        </label><input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                        <button>Submit</button>
                    </form>

                </div>
            </div>
        </>


    )

}