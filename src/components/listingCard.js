import { Avatar, Box, Button, Card, Divider, Grid, Stack, Typography } from '@mui/material';
import React from 'react';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import BlockIcon from '@mui/icons-material/Block';
import { StarBorderTwoTone } from '@mui/icons-material';
import ReactReadMoreReadLess from "react-read-more-read-less";
import firestore from '../firebase/firebase';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router';



export default function ListingCard(props) {

    const navigate = useNavigate();

    const { item } = props;

    return (
        <Card sx={{ width: "80%", p: 1 }}>
            <Grid container spacing={2} justifyContent={"center"} alignItems={"center"}>
                <Grid item xs={12} sm={3}>
                    <img
                        alt="Remy Sharp"
                        src={item.img}
                        style={{ height: "40vh", width: "100% " }}
                    />
                </Grid>
                <Grid item xs={12} sm={9}>
                    <Grid container spacing={2} xs={12} justifyContent={"center"} alignItems={"center"}>
                        <Grid item xs={12} sm={8}>
                            <Box>
                                <Box>
                                    <Typography variant="body2" component="body2">
                                        Matrimony ID -
                                    </Typography>
                                    <Typography sx={{ ml: 1 }} color="lightblue" variant="body2" component="body2">
                                        {item.id}
                                    </Typography>
                                    
                                </Box>
                                <Box>
                                    <Typography variant="body2" component="body2">
                                        Name - 
                                    </Typography>
                                    <Typography sx={{ ml: 1 }} color="lightblue" variant="body2" component="body2">
                                        {item.firstName+" "+item.lastName}
                                    </Typography>
                                    
                                </Box>
                                <Box>
                                    <Typography variant="body2" component="body2">
                                        Online now,
                                    </Typography>
                                    <Typography sx={{ ml: 1 }} color="lightblue" variant="body2" component="body2">
                                        Click to Chat
                                    </Typography>
                                </Box>
                            </Box>
                            <Divider sx={{ my: 2 }} variant="outset" component="div" />

                            <table className='listTable'>
                                <tr>
                                    <td>Age / Height:
                                    </td>
                                    <td>{item.age} / {item.height}</td>
                                </tr>
                                <tr>
                                    <td>Religion / Caste: </td>
                                    <td>{item.religion} / Agri</td>
                                </tr>
                                <tr>
                                    <td>Mother Tongue:

                                    </td>
                                    <td>{item?.motherTon}</td>
                                </tr>
                                <tr>
                                    <td>Profession:</td>
                                    <td>{item?.profession}</td>
                                </tr>
                                <tr>
                                    <td>Location:</td>
                                    <td>{item?.location}</td>
                                </tr>
                            </table>

                        </Grid>
                        <Grid item xs={12} sm={4}>

                            <Button fullWidth color="secondary" variant="contained" onClick={async () => {
                                const firestoreRef = firestore.collection('User');

                                const queryRef = await firestoreRef.doc(item.id).collection("intersted").add(item);
                                toast("Send request");
                            }}>
                                I'm Intrested
                            </Button>

                            <Box sx={{
                                cursor: "pointer", color: "rgb(176, 176, 176)", fontSize: "0.8em", mt: 2, '&:hover': {
                                    color: "lightblue"
                                }
                            }}>
                                <AccountBoxIcon />
                                <Typography variant="body2" component="body2" sx={{ ml: 2 }} onClick={() => {
                                    navigate(`/profile/${item?.id}`)
                                }}>  View full Profile</Typography>
                            </Box>

                            <Box sx={{
                                cursor: "pointer", color: "rgb(176, 176, 176)", fontSize: "0.8em", mt: 2, '&:hover': {
                                    color: "red"
                                }
                            }}>
                                <BlockIcon />
                                <Typography variant="body2" component="body2" sx={{ ml: 2 }}>Ignore</Typography>
                            </Box>

                            <Box sx={{
                                cursor: "pointer", color: "rgb(176, 176, 176)", fontSize: "0.8em", mt: 2, '&:hover': {
                                    color: "rgb(244 226 0)"
                                }
                            }}>
                                <StarBorderTwoTone />
                                <Typography variant="body2" component="body2" sx={{ ml: 2 }}>  Shortlist</Typography>
                            </Box>

                        </Grid>
                    </Grid>
                    <Divider variant="outset" component="div" sx={{ my: 2 }} />
                    <Typography variant="body2" component="p">
                        <ReactReadMoreReadLess
                            charLimit={100}
                            readMoreText={"Read more ▼"}
                            readLessText={"Read less ▲"}
                        >
                            {item?.des ? item?.des : "lorem"}
                        </ReactReadMoreReadLess>

                    </Typography>
                </Grid>
            </Grid>

        </Card>
    );
}
