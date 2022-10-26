import { Box, Stack } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import Footer from '../../components/footer';
import ListingCard from '../../components/listingCard';
import Navbar from '../../components/navbar';
import firestore from '../../firebase/firebase';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';

export default function Listing() {

    const [value, setValue] = React.useState('1');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const [searchParams, setSearchParams] = useSearchParams();

    const [listData, setListData] = useState([]);


    useEffect(() => {

        async function gettingData() {
            setListData([]);

            if (value == 1) {

                const firestoreRef = firestore.collection('User');

                const queryRef = await firestoreRef.where("gender", '==', parseInt(searchParams.get("gender"))).where("religion", '==', searchParams.get("religion").toLowerCase()).where("motherTon", '==', searchParams.get("motherTounge").toLowerCase())
                    .get();



                queryRef.forEach((doc) => {
                    console.log(doc.id);

                    let temp = doc.data();
                    temp.id = doc.id;

                    setListData((prevSate) => [...prevSate, temp])

                });
            }
            else{
                const firestoreRef = await firestore.collection('User').doc(JSON.parse(localStorage.getItem("userId"))).collection("intersted").get();

                



                firestoreRef.forEach((doc) => {
                    console.log(doc.id);

                    let temp = doc.data();

                    setListData((prevSate) => [...prevSate, temp])

                });
            }
        }
        gettingData();


    }, [value])


    console.log(listData);



    return (
        <>
            <Navbar />
            <TabContext value={value}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <TabList onChange={handleChange} aria-label="lab API tabs example">
                        <Tab label="All Profile" value="1" />
                        <Tab label="Liked You" value="2" />
                    </TabList>
                </Box>
            </TabContext>
            <Stack spacing={2} direction="column" justifyContent={"center"} alignItems={"center"} sx={{ my: 3 }}>

                {listData?.map((item) => {
                    return (
                        <ListingCard item={item} />

                    )
                })}

            </Stack>
            <Footer />
        </>
    );
}
