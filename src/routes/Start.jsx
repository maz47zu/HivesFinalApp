import React, { useState, useEffect } from 'react'
import { Grid, Container, Typography, Box, CircularProgress } from '@mui/material'

import HiveInfo from '../components/HiveInfo';

export default function LandingPage() {

    // eslint-disable-next-line
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);

    const getHivesData = () => {
        //fetch("/api/hives")
        //console.log('Updating...')
        fetch("http://51.68.141.235:8088/hives")
            //uncomment on localhost 
            .then(res => res.json())
            .then(
                (result) => {
                    setIsLoaded(true);
                    setItems(result);
                },
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            )
    };

    useEffect(() => {
        getHivesData();
        const interval = setInterval(() => {
            getHivesData();
        }, 10*1000);
        return () => clearInterval(interval);
    }, []);

    // if (error) {
    //     return <div>Error: {error.message}</div>
    // } else 
    if (!isLoaded) {
        return (
            <Grid container justify="center" alignItems='center' direction="column">
                <Box component="span">
                    <CircularProgress size={80} />
                    <Typography>Ładowanie...</Typography>
                </Box>
            </Grid>
        )
    } else {
        return (
            <Container>
                <Grid container spacing={3}>
                    {items.map((item,i) => (
                        <Grid value={item} key={i} item xs={12} sm={12} md={6} lg={4}>
                            <HiveInfo hives={item} />
                        </Grid>
                    ))}
                </Grid>
            </Container>
        )
    }
}