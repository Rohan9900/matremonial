import { Box, Button, Card, Container, Grid, makeStyles, Stack, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../../assets/logo.png';
import firestore from '../../firebase/firebase';
import { toast } from 'react-toastify';


export default function Login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();


    const submitLogin = async () => {

        let isCorrect = false;

        const firestoreRef = firestore.collection('User');

        const queryRef = await firestoreRef.where("email", '==', email.trim())
            .where("password", '==', password.trim())
            .get()


        queryRef.forEach((doc) => {
            console.log(doc.data());
            let temp = doc.data();
            localStorage.setItem("user", JSON.stringify(doc.data()));
            localStorage.setItem("userId", JSON.stringify(doc.id));
            isCorrect = true;
            navigate("/");
        });

        if (isCorrect == false) {

            toast.error("Please enter correct credentials");
        }

    }

    return (
        <div style={{
            backgroundImage: "url('https://img.freepik.com/free-photo/concept-wedding-accessories-with-wedding-rings-white-background_185193-69924.jpg?w=2000')",
            backgroundRepeat: "no-repeat",
            backgroundSize: "100% 100%",
        }}>
            <div style={{ background: "rgba(0,0,0,0.2)" }}>

                <Container sx={theme => ({

                    p: 0,
                    [theme.breakpoints.up('sm')]: {
                        display: "flex", justifyContent: "center", alignItems: "center", height: "100vh"
                    }
                })}>
                    <Card sx={theme => ({
                        [theme.breakpoints.up('sm')]: {
                            width: "50%"
                        }
                    })}>
                        <Grid container spacing={0} sx={{ backgroundColor: "#fff2fe" }}>
                            <Grid xs={12} md={6} >
                                <Box>
                                    <Box sx={{ background: "white", display: "flex", justifyContent: "center", alignItems: "center" }}>
                                        <img src={logo} width="200" className='logo_img' />
                                    </Box>
                                    <svg style={{ transform: "rotate(180deg)" }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#ffffff" fill-opacity="1" d="M0,256L48,218.7C96,181,192,107,288,117.3C384,128,480,224,576,218.7C672,213,768,107,864,64C960,21,1056,43,1152,90.7C1248,139,1344,213,1392,250.7L1440,288L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>

                                </Box>
                            </Grid>
                            <Grid xs={12} md={6} sx={{ p: 2 }}>
                                <Stack spacing={4}>
                                    <Typography variant="h5" sx={{ fontWeight: "700" }}>
                                        Login
                                    </Typography>
                                    <Box>
                                        <TextField color="secondary" id="standard-basic" fullWidth label="Email" name="email" type="email" variant="standard" value={email}
                                            onChange={(e) => {
                                                setEmail(e.target.value);
                                            }} />
                                    </Box>
                                    <Box>
                                        <TextField color="secondary" id="standard-basic" fullWidth label="Password" name="password" type="password" variant="standard" value={password}
                                            onChange={(e) => {
                                                setPassword(e.target.value);
                                            }} />
                                    </Box>
                                    <Box>
                                        <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.7em", fontWeight: "500" }}>
                                            <div><span>New User?</span> <Link to="/register">Sign Up</Link></div>
                                            <div><Link to="/signin">Forgot Password?</Link></div>

                                        </div>
                                    </Box>
                                    <Button onClick={submitLogin} sx={{ backgroundImage: "linear-gradient(to right, #fda790, #ff5083)" }} variant="contained">Login</Button>
                                </Stack>


                            </Grid>

                        </Grid>
                    </Card>

                </Container>
            </div>
        </div>

    );
}
