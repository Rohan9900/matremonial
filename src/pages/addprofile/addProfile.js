import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { Container, Box, Snackbar, Alert, Chip, Paper } from '@mui/material';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import React, { useState, useEffect } from 'react';
import Navbar from '../../components/navbar';
import Footer from '../../components/footer';
// ==============================|| SAMPLE PAGE ||============================== //

const ColorButton = styled(Button)(({ theme }) => ({
    color: 'white',
    fontFamily: 'Poppins',
    width: '100%',
    fontSize: "1.2em",
    backgroundColor: '#ff0f99ab'
}));


const ListItem = styled('li')(({ theme }) => ({
    margin: theme.spacing(0.5),
}));

export default function AddProfile() {
    const [maritialStatus, setMaritialStatus] = useState('');
    const [education, setEducation] = useState('');
    const [profession, setProfession] = useState('');
    const [relegion, setRelegion] = useState('');
    const [language, setLanguage] = useState('');
    const [community, setCommunity] = useState('');
    const [location, setLocation] = useState('');
    const [about, setAbout] = useState('');
    const [family, setFamily] = useState('');
    const [intrests, setIntrests] = useState('');

    const [chipData, setChipData] = React.useState([]);

    const handleDelete = (chipToDelete) => () => {
        setChipData((chips) => chips.filter((chip) => chip.key !== chipToDelete.key));
    };


    return (
        <>
            <Navbar />
            <Container sx={{backgroundImage:"url(https://vetsez.com/wp-content/uploads/2020/03/AdobeStock_291217289-copy.jpg)"}} component={Box} p={4}>
                <Typography variant="h4" sx={{ textAlign: "center" }} gutterBottom>
                    Update Profile
                </Typography>
                <form encType="multipart/form-data">
                    <Grid container spacing={4} alignItems="center" justifyContent="center" style={{ marginTop: '35px' }}>
                        <Grid item xs={12} sm={5}>
                            <TextField
                                required
                                id="maritialstatus"
                                name="maritialstatus"
                                label="Marital Status"
                                placeholder="Enter Marital Status"
                                fullWidth
                                autoComplete="given-name"
                                variant="outlined"
                                value={maritialStatus}
                                onChange={(e) => setMaritialStatus(e.target.value)}
                            />
                        </Grid>
                        <Grid item xs={12} sm={5}>
                            <TextField
                                required
                                id="education"
                                name="education"
                                label="Education"
                                placeholder="Enter Education"
                                fullWidth
                                autoComplete="education"
                                variant="outlined"
                                value={education}
                                onChange={(e) => setEducation(e.target.value)}
                            />
                        </Grid>
                        <Grid item xs={12} sm={5}>
                            <TextField
                                required
                                id="profession"
                                type="text"
                                name="profession"
                                label="Profession"
                                placeholder="Enter Profession"
                                fullWidth
                                variant="outlined"
                                value={profession}
                                onChange={(e) => setProfession(e.target.value)}
                            />
                        </Grid>
                        <Grid item xs={12} sm={5}>
                            <TextField
                                required
                                id="relegion"
                                name="relegion"
                                label="Religion"
                                placeholder="Religion"
                                fullWidth
                                autoComplete="shipping postal-code"
                                variant="outlined"
                                value={relegion}
                                onChange={(e) => setRelegion(e.target.value)}
                            />
                        </Grid>
                        <Grid item xs={12} sm={10}>
                            <TextField
                                required
                                id="mothertongue"
                                name="mothertongue"
                                label="Mother Tongue"
                                fullWidth
                                autoComplete="Mother Tongue"
                                variant="outlined"
                                value={language}
                                onChange={(e) => setLanguage(e.target.value)}
                            />
                        </Grid>

                        <Grid item xs={12} sm={5}>
                            <TextField
                                required
                                id="community"
                                name="community"
                                label="Community"
                                placeholder="Community"
                                fullWidth
                                variant="outlined"
                                value={community}
                                onChange={(e) => setCommunity(e.target.value)}
                            />
                        </Grid>

                        <Grid item xs={12} sm={5}>
                            <TextField
                                required
                                id="location"
                                name="location"
                                label="Location"
                                placeholder="Location"
                                fullWidth
                                variant="outlined"
                                value={location}
                                onChange={(e) => setLocation(e.target.value)}
                            />
                        </Grid>

                        <Grid item xs={12} sm={10}>
                            <TextField
                                required
                                multiline
                                rows={3}
                                id="about"
                                name="about"
                                label="About You"
                                placeholder="About You"
                                fullWidth
                                variant="outlined"
                                value={about}
                                onChange={(e) => setAbout(e.target.value)}
                            />
                        </Grid>
                        <Grid item xs={12} sm={10}>
                            <TextField
                                required
                                multiline
                                rows={2}
                                id="family"
                                name="family"
                                label="About Family"
                                placeholder="About Family"
                                fullWidth
                                variant="outlined"
                                value={family}
                                onChange={(e) => setFamily(e.target.value)}
                            />
                        </Grid>
                        <Grid item xs={12} sm={10}>

                            <Paper
                                sx={{
                                    display: 'flex',
                                    justifyContent: 'center',
                                    flexWrap: 'wrap',
                                    listStyle: 'none',
                                    p: 0.5,
                                    m: 0,
                                }}
                                component="ul"
                            >
                                {chipData.map((data) => {
                                    let icon;



                                    return (
                                        <ListItem key={data.key}>
                                            <Chip
                                                icon={icon}
                                                label={data.label}
                                                onDelete={data.label === 'React' ? undefined : handleDelete(data)}
                                            />
                                        </ListItem>
                                    );
                                })}

                            </Paper>
                            <Grid container spacing={4} alignItems="center" justifyContent="center" style={{ marginTop: '10px' }}>
                                <Grid item xs={8} sm={8}>

                                    <TextField
                                        required
                                        id="intrests"
                                        name="intrests"
                                        label="Your Intrest"
                                        placeholder="Your Intrest"
                                        fullWidth
                                        variant="outlined"
                                        value={intrests}
                                        onChange={(e) => setIntrests(e.target.value)}
                                    />
                                </Grid>
                                <Grid item xs={4} sm={4}>

                                    <ColorButton variant="contained" onClick={() => {
                                        setChipData((prev) => [...prev, {
                                            key: intrests,
                                            label: intrests
                                        }])
                                    }}>
                                        Add Intrests
                                    </ColorButton>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={12} sm={10}>
                            <ColorButton variant="contained" type="submit">
                                Update Profile
                            </ColorButton>
                        </Grid>
                    </Grid>
                </form>
            </Container>
            <Footer />
        </>
    );
}
