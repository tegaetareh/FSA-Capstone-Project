import { useState, useEffect } from "react"
import { useNavigate, Link } from "react-router-dom";
import { addNewUser } from "../API/APIFunctions";

//mui snackbar 
import * as React from 'react';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import MuiAlert from '@mui/material/Alert';

const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });
// end of mui snackbar

export default function Register({ token }) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [cPassword, setCPassword] = useState("");
    const [email, setEmail] = useState("");
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [error, setError] = useState(null);
    const [open, setOpen] = React.useState(false); //for mui snackbar
    const navigate = useNavigate();
//mui functions
const handleClick = () => {
    setOpen(true);
};

const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
        return;
    }

    setOpen(false);
};
const action = (
    <React.Fragment>
        <Button color="secondary" size="small" onClick={handleClose}>
            UNDO
        </Button>
        <IconButton
            size="small"
            aria-label="close"
            color="inherit"
            onClick={handleClose}
        >
            <CloseIcon fontSize="small" />
        </IconButton>
    </React.Fragment>
);
//end of mui functions

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

                    <div className="registerFooter"><button className="btn" >Submit</button>

                    </div>
                    Already a member? Login <Link className="link" to={`../login`}>here</Link>
                    <Snackbar
                // sx={{ height: "100%" }} this makes it appear in the middle of the page
                anchorOrigin={{
                   vertical: "top",
                   horizontal: "center"
                }}
                open={open}
                autoHideDuration={3000}
                onClose={handleClose}
            > <Alert severity="info">Registration Successful</Alert></Snackbar>

                </form>
              


            </div>
        </>


    )

}