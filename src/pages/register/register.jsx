import { Box, Button, Card, Container, Grid, makeStyles, MenuItem, Stack, Step, StepLabel, Stepper, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../../assets/logo.png';
import firestore from '../../firebase/firebase';
import { styled } from '@mui/material/styles';
import StepConnector, { stepConnectorClasses } from '@mui/material/StepConnector';
import { Check } from '@mui/icons-material';


const QontoConnector = styled(StepConnector)(({ theme }) => ({
    [`&.${stepConnectorClasses.alternativeLabel}`]: {
        top: 10,
        left: 'calc(-50% + 16px)',
        right: 'calc(50% + 16px)',
    },
    [`&.${stepConnectorClasses.active}`]: {
        [`& .${stepConnectorClasses.line}`]: {
            borderColor: '#784af4',
        },
    },
    [`&.${stepConnectorClasses.completed}`]: {
        [`& .${stepConnectorClasses.line}`]: {
            borderColor: '#784af4',
        },
    },
    [`& .${stepConnectorClasses.line}`]: {
        borderColor: theme.palette.mode === 'dark' ? theme.palette.grey[800] : '#eaeaf0',
        borderTopWidth: 3,
        borderRadius: 1,
    },
}));

const QontoStepIconRoot = styled('div')(({ theme, ownerState }) => ({
    color: theme.palette.mode === 'dark' ? theme.palette.grey[700] : '#eaeaf0',
    display: 'flex',
    height: 22,
    alignItems: 'center',
    ...(ownerState.active && {
        color: '#784af4',
    }),
    '& .QontoStepIcon-completedIcon': {
        color: '#784af4',
        zIndex: 1,
        fontSize: 18,
    },
    '& .QontoStepIcon-circle': {
        width: 8,
        height: 8,
        borderRadius: '50%',
        backgroundColor: 'currentColor',
    },
}));



function QontoStepIcon(props) {
    const { active, completed, className } = props;

    return (
        <QontoStepIconRoot ownerState={{ active }} className={className}>
            {completed ? (
                <Check className="QontoStepIcon-completedIcon" />
            ) : (
                <div className="QontoStepIcon-circle" />
            )}
        </QontoStepIconRoot>
    );
}


export default function Signup() {



    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [phoneNo, setPhoneNo] = useState("")
    const [age, setAge] = useState("")
    const [gender, setGender] = useState("")
    const [status, setStatus] = useState("")
    const [password, setPassword] = useState("")

    const [height, setHeight] = useState("")
    const [religion, setReligion] = useState("")
    const [motherTon, setMotherTon] = useState("")
    const [profession, setProfession] = useState("")
    const [location, setLocation] = useState("")
    const [des, setDes] = useState("")


    const [activeStep, setActiveStep] = React.useState(0);


    const handleNext = () => {


        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };


    const navigate = useNavigate();


    const submitLogin = async () => {



        const firestoreRef = await firestore.collection('User');

        const queryRef = await firestoreRef
            .add({
                firstName: firstName,
                lastName: lastName,
                email: email,
                phoneNo: phoneNo,
                age: age,
                gender: gender,
                status: status,
                password: password,
                height: height,
                religion: religion,
                motherTon: motherTon,
                profession: profession,
                location: location,
                des: des
            }).then((res) => {
                navigate("/login");

            }).catch((err) => {
                console.log(err)
            });



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


                                <Stepper sx={{ mb: 3 }} activeStep={activeStep} alternativeLabel connector={<QontoConnector />}>

                                    <Step>
                                        <StepLabel StepIconComponent={QontoStepIcon}>Regestration info</StepLabel>
                                    </Step>
                                    <Step>
                                        <StepLabel StepIconComponent={QontoStepIcon}>Basic info</StepLabel>
                                    </Step>

                                </Stepper>



                                {
                                    activeStep == 0 ? <Stack spacing={4}>
                                        <Typography variant="h5" sx={{ fontWeight: "700" }}>
                                            Sign Up
                                        </Typography>
                                        <Grid container spacing={0} sx={{ backgroundColor: "#fff2fe" }}>
                                            <Grid xs={6} md={6} >
                                                <Box sx={{ mr: 1 }} >
                                                    <TextField type={"text"} color="secondary" id="standard-basic" fullWidth label="First Name" variant="standard"
                                                        value={firstName}
                                                        onChange={(e) => {
                                                            setFirstName(e.target.value);
                                                        }}
                                                    />
                                                </Box>
                                            </Grid>
                                            <Grid xs={6} md={6} >
                                                <Box>
                                                    <TextField type={"text"} color="secondary" id="standard-basic" fullWidth label="Last Name" variant="standard" value={lastName}
                                                        onChange={(e) => {
                                                            setLastName(e.target.value);
                                                        }} />
                                                </Box>
                                            </Grid>
                                        </Grid>

                                        <Box>
                                            <TextField type={"email"} color="secondary" id="standard-basic" fullWidth label="Email" variant="standard" value={email}
                                                onChange={(e) => {
                                                    setEmail(e.target.value);
                                                }} />
                                        </Box>
                                        <Grid container spacing={0} sx={{ backgroundColor: "#fff2fe" }}>
                                            <Grid xs={10} md={10} >
                                                <Box sx={{ mr: 1 }} >
                                                    <TextField type={"phone"} color="secondary" id="standard-basic" fullWidth label="Phone No" variant="standard" value={phoneNo}
                                                        onChange={(e) => {
                                                            setPhoneNo(e.target.value);
                                                        }} />
                                                </Box>
                                            </Grid>
                                            <Grid xs={2} md={2} >
                                                <Box>
                                                    <TextField type={"number"} color="secondary" id="standard-basic" fullWidth label="Age" variant="standard" value={age}
                                                        onChange={(e) => {
                                                            setAge(e.target.value);
                                                        }} />
                                                </Box>
                                            </Grid>
                                        </Grid>
                                        <Grid container spacing={0} sx={{ backgroundColor: "#fff2fe" }}>
                                            <Grid xs={6} md={6} >
                                                <Box sx={{ mr: 1 }} >
                                                    <TextField select color="secondary" id="standard-basic" fullWidth label="Gender" variant="standard" value={gender}
                                                        onChange={(e) => {
                                                            setGender(e.target.value);
                                                        }}>

                                                        <MenuItem value={1}>Male</MenuItem>
                                                        <MenuItem value={2}>Female</MenuItem>
                                                    </TextField>
                                                </Box>
                                            </Grid>
                                            <Grid xs={6} md={6} >
                                                <Box>
                                                    <TextField select color="secondary" id="standard-basic" fullWidth label="Status" variant="standard" value={status}
                                                        onChange={(e) => {
                                                            setStatus(e.target.value);
                                                        }}>

                                                        <MenuItem value={1}>Married</MenuItem>
                                                        <MenuItem value={2}>Single</MenuItem>
                                                    </TextField>
                                                </Box>
                                            </Grid>
                                        </Grid>
                                        <Box>
                                            <TextField type={"password"} color="secondary" id="standard-basic" fullWidth label="Password" variant="standard" value={password}
                                                onChange={(e) => {
                                                    setPassword(e.target.value);
                                                }} />
                                        </Box>
                                        <Box>
                                            <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.7em", fontWeight: "500" }}>
                                                <div><span>Already Registered?</span> <Link to="/login">Sign In</Link></div>

                                            </div>
                                        </Box>
                                        <Button onClick={handleNext} >Next</Button>
                                    </Stack> :
                                        <Stack spacing={4}>

                                            <Grid container spacing={0} sx={{ backgroundColor: "#fff2fe" }}>
                                                <Grid xs={6} md={6} >
                                                    <Box sx={{ mr: 1 }} >
                                                        <TextField type={"text"} color="secondary" id="standard-basic" fullWidth label="Height" variant="standard"
                                                            value={height}
                                                            onChange={(e) => {
                                                                setHeight(e.target.value);
                                                            }}
                                                        />
                                                    </Box>
                                                </Grid>
                                                <Grid xs={6} md={6} >
                                                    <Box>
                                                        <TextField type={"text"} color="secondary" id="standard-basic" fullWidth label="Religion" variant="standard" value={religion}
                                                            onChange={(e) => {
                                                                setReligion(e.target.value);
                                                            }} />
                                                    </Box>
                                                </Grid>
                                            </Grid>

                                            <Box>
                                                <TextField type={"text"} color="secondary" id="standard-basic" fullWidth label="Location" variant="standard" value={location}
                                                    onChange={(e) => {
                                                        setLocation(e.target.value);
                                                    }} />
                                            </Box>
                                            <Grid container spacing={0} sx={{ backgroundColor: "#fff2fe" }}>
                                                <Grid xs={6} md={6} >
                                                    <Box sx={{ mr: 1 }} >
                                                        <TextField type={"text"} color="secondary" id="standard-basic" fullWidth label="Mother tongue" variant="standard" value={motherTon}
                                                            onChange={(e) => {
                                                                setMotherTon(e.target.value);
                                                            }} />
                                                    </Box>
                                                </Grid>
                                                <Grid xs={6} md={6} >
                                                    <Box>
                                                        <TextField type={"text"} color="secondary" id="standard-basic" fullWidth label="Profession" variant="standard" value={profession}
                                                            onChange={(e) => {
                                                                setProfession(e.target.value);
                                                            }} />
                                                    </Box>
                                                </Grid>
                                                <Grid xs={12} md={12} >
                                                    <Box>
                                                        <TextField type={"text"} color="secondary" id="standard-basic" fullWidth label="Description" multiline rows={3} variant="standard" value={des}
                                                            onChange={(e) => {
                                                                setDes(e.target.value);
                                                            }} />
                                                    </Box>
                                                </Grid>
                                            </Grid>


                                            <Box>
                                                <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.7em", fontWeight: "500" }}>
                                                    <div><span>Already Registered?</span> <Link to="/login">Sign In</Link></div>

                                                </div>
                                            </Box>
                                            <Button onClick={handleBack} >Back</Button>

                                            <Button onClick={submitLogin} sx={{ backgroundImage: "linear-gradient(to right, #fda790, #ff5083)" }} variant="contained">Sign Up</Button>
                                        </Stack>
                                }




                            </Grid>

                        </Grid>
                    </Card>

                </Container>
            </div>
        </div>
    );
}
