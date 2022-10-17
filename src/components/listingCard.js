import { Avatar, Box, Button, Card, Divider, Grid, Stack, Typography } from '@mui/material';
import React from 'react';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import BlockIcon from '@mui/icons-material/Block';
import { StarBorderTwoTone } from '@mui/icons-material';
import ReactReadMoreReadLess from "react-read-more-read-less";



export default function ListingCard() {
    return (
        <Card sx={{ width: "80%", p: 1 }}>
            <Grid container spacing={2} justifyContent={"center"} alignItems={"center"}>
                <Grid item xs={12} sm={3}>
                    <img
                        alt="Remy Sharp"
                        src="https://images.unsplash.com/photo-1541963463532-d68292c34b19?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8&w=1000&q=80"
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
                                        SH20793749
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
                                    <td>35 / 5' 4"</td>
                                </tr>
                                <tr>
                                    <td>Religion / Caste: </td>
                                    <td>Hindu / Agri</td>
                                </tr>
                                <tr>
                                    <td>Mother Tongue:

                                    </td>
                                    <td>Marathi</td>
                                </tr>
                                <tr>
                                    <td>Profession:</td>
                                    <td>Business Owner / Entrepreneur</td>
                                </tr>
                                <tr>
                                    <td>Location:</td>
                                    <td>Mumbai, India</td>
                                </tr>
                            </table>

                        </Grid>
                        <Grid item xs={12} sm={4}>

                            <Button fullWidth color="secondary" variant="contained">
                                I'm Intrested
                            </Button>

                            <Box sx={{
                                cursor: "pointer", color: "rgb(176, 176, 176)", fontSize: "0.8em", mt: 2, '&:hover': {
                                    color: "lightblue"
                                }
                            }}>
                                <AccountBoxIcon />
                                <Typography variant="body2" component="body2" sx={{ ml: 2 }} >  View full Profile</Typography>
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
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                        </ReactReadMoreReadLess>

                    </Typography>
                </Grid>
            </Grid>

        </Card>
    );
}
