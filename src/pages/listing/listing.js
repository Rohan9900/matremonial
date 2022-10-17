import { Stack } from '@mui/material';
import React from 'react';
import Footer from '../../components/footer';
import ListingCard from '../../components/listingCard';
import Navbar from '../../components/navbar';


export default function Listing() {
    return (
        <>
            <Navbar />
            <Stack spacing={2} direction="column" justifyContent={"center"} alignItems={"center"} sx={{ my: 3 }}>
                <ListingCard />
                <ListingCard />
                <ListingCard />
                <ListingCard />
                <ListingCard />
                <ListingCard />
                <ListingCard />
                <ListingCard />
                <ListingCard />
                <ListingCard />
                <ListingCard />
                <ListingCard />
            </Stack>
            <Footer />
        </>
    );
}
