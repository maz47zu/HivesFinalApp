import React, { useState, useEffect } from 'react'

import { Grid, Container, Typography, Box, CircularProgress } from '@mui/material'

import { useLocation } from 'react-router-dom'

export default function Details() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  const location = useLocation();
  const { hiveId } = location.state;

  const url = 'http://51.68.141.235:8088/history/hive/' + hiveId.toString();


  useEffect(function () {
    const getHiveHistory = async() => {
      //fetch("/api/hives")
      //console.log('Updating...')
      fetch(url)
        //uncomment on localhost 
        .then(res => res.json())
        .then(
          (result) => {
            setIsLoaded(true);
            setItems(result);
          },
          (error) => {
            setIsLoaded(true);
          }
        )
    };
    getHiveHistory();
    // eslint-disable-next-line
  }, [setItems])

  useEffect(function () {
    console.log(items);
  },[items]);


  if (!isLoaded || items.length===0) {
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
      <Container sx={{marginTop:'2.7rem'}}>
        <Grid container spacing={3}>
          {items[0].mother}
        </Grid>
      </Container>
    )
  }
}
