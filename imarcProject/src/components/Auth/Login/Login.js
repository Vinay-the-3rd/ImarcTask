import React, { useState } from 'react'
import { Stack, Typography, TextField, Button } from '@mui/material'
import { toast } from "react-toastify";
import { useNavigate } from "react-router";
import Validation from "../../../validation/Validation";
import "./Login.css"

const style = {
    fields: { mt: "20px" },
    loginBtn: {
        textTransform: "capitalize",
        height: "45px",
        background: "#040440",
        mt: "20px",
        "&:hover": {
            background: "#040440",
        },
    },
};

const Login = () => {
    const navigate = useNavigate();
    const [data, setData] = useState({
        emailId: "",
        password: "",
    });
    const [error, setError] = useState({});

    // Event handler for input changes
    const handleChange = (e) => {
        e.preventDefault();
        setData({ ...data, [e.target.name]: e.target.value });
    };

    // Event handler for login
    const handleLogin = (e) => {
        e.preventDefault();
        setError(() => {
            const newError = Validation(data);
            // If there are no validation errors related to email ID and password, switch to the next step
            if (newError.emailId === undefined && newError.password === undefined) {
                toast.success('Login sucessful');
                navigate("/graph");
            }
            return newError;
        });
    };

    return (
        <>
            <Stack alignItems="center" sx={{background:"#8085AF", height:"100vh"}} >
                <Stack className='login-model'>
                    <Typography variant="h4" >
                        Login
                    </Typography>
                    <TextField
                        sx={style.fields}
                        id="outlined-basic"
                        label="Email Id"
                        variant="outlined"
                        value={data.emailId}
                        name="emailId"
                        onChange={handleChange}
                    />
                    {error.emailId && <p>{error.emailId}</p>}
                    <TextField
                        sx={style.fields}
                        id="outlined-basic"
                        label="Password"
                        variant="outlined"
                        value={data.password}
                        name="password"
                        onChange={handleChange}
                    />
                    {error.password && <p>{error.password}</p>}
                    <Typography variant="h6" sx={{ color: "#040440", fontWeight: "600", mt: "20px" }} >
                        Forget Password
                    </Typography>
                    <Button
                        variant="contained"
                        onClick={handleLogin}
                        sx={style.loginBtn}
                    >
                        Login
                    </Button>
                </Stack>
            </Stack>
        </>
    )
}

export default Login