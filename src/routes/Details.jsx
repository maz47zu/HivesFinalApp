import React, { useState, useEffect } from 'react'

import { Grid, Container, Typography, Box, CircularProgress } from '@mui/material'

import { useLocation } from 'react-router-dom'
import HiveChart from '../components/HiveChart';

import '../styles/dateRange.css'
import '../styles/customStyles.css'

import { DateRangePicker } from 'rsuite';

export default function Details() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);
  // const [dataToChart, setDataToChart] = useState([]);
  const [dateRange, setDateRange] = useState([new Date('2022-08-18 00:00:00'), new Date('2022-08-26 00:00:00')]);
  const location = useLocation();
  const { hiveId } = location.state;

  const url = 'http://51.68.141.235:8088/history/hive/' + hiveId.toString();


  useEffect(function () {
    const getHiveHistory = async () => {
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
    console.log(dateRange);
  }, [dateRange]);


  if (!isLoaded || items.length === 0) {
    return (
      <Container sx={{ marginTop: '2.7rem' }}>
        <Grid container justify="center" alignItems='center' direction="column">
          <Box component="span">
            <CircularProgress size={80} />
            <Typography>Ładowanie...</Typography>
          </Box>
        </Grid>
      </Container>
    )
  } else {
    return (
      <div className="container">
        <section id='sensors'>
          <div className="section-tittle underline">
            <h2>Szczególy ula nr {hiveId}</h2>
          </div>
          <div>
            <Grid container spacing={2} direction="column" alignItems="center" sx={{marginTop:'5px', marginBottom:'10px'}}>
              <DateRangePicker
                showOneCalendar
                format="yyyy-MM-dd HH:mm:ss"
                defaultValue={[new Date('2022-08-18 00:00:00'), new Date('2022-08-26 00:00:00')]}
                defaultCalendarValue={[new Date('2022-08-01 00:00:00'), new Date('2022-09-01 23:59:59')]}
                onChange={(range) => setDateRange(range)}
              />
            </Grid>
          </div>
          <div className="chart-tittle">
            <h2>Temperatura i wilgotność</h2>
          </div>
          <div>
            <HiveChart />
          </div>
          <div className="chart-tittle">
            <h2>Waga</h2>
          </div>
          <div>
            <HiveChart />
          </div>
          {/* <Box sx={{ flexGrow: 1}}>
            <Grid container spacing={2} direction="column" alignItems="center">
              <Grid item xs={12} sm={12} md={12} lg={12}>
                <HiveChart/>
              </Grid>
            </Grid>
          </Box> */}
        </section >
      </div >
    )
  }
}
