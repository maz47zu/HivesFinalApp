import React, { useState, useEffect } from 'react'

import { Grid, Container, Typography, Box, CircularProgress } from '@mui/material'

import { useLocation } from 'react-router-dom'
import HiveChart from '../components/HiveChart';

import '../styles/dateRange.css'
import '../styles/customStyles.css'

import { DateRangePicker } from 'rsuite';

import moment from 'moment';
import WeightChart from '../components/WeightChart';

export default function Details() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);
  const [dataToChart, setDataToChart] = useState([]);
  const [weightChart, setWeightChart] = useState([]);
  const [dateRange, setDateRange] = useState([new Date(moment().startOf('year').format('YYYY-MM-DD hh:mm')), new Date((moment().endOf('month').format('YYYY-MM-DD hh:mm')))]);
  const location = useLocation();
  const { hiveId } = location.state;

  const url = 'http://51.68.141.235:8088/history/hive/' + hiveId.toString();


  useEffect(function () {
    const getHiveHistory = async () => {
      fetch(url)
        .then(res => res.json())
        .then(
          (result) => {
            setIsLoaded(true);
            setItems(result);
            setDateRange([new Date(moment().startOf('year').format('YYYY-MM-DD hh:mm')), new Date((moment().endOf('month').format('YYYY-MM-DD hh:mm')))]);
          },
          (error) => {
            setIsLoaded(true);
          }
        )
    };
    getHiveHistory();
    // eslint-disable-next-line
  }, [setItems])

  async function filterData (){
    const startDate = dateRange[0] ? moment(dateRange[0]) : (moment().startOf('year').format('YYYY-MM-DD hh:mm'));
    const endDate = dateRange[1] ? moment(dateRange[1]) : (moment().endOf('month').format('YYYY-MM-DD hh:mm'));
    let result = [];
    for(const i in items){
      const singlePoint = {
        "name":'',
        'Temp':'',
        'Wilg':''
      };
      if(moment(items[i].datewhen)<=endDate && moment(items[i].datewhen)>=startDate){
        singlePoint.name = items[i].datewhen;
        singlePoint.Temp = items[i].temperature;
        singlePoint.Wilg = items[i].humidity;
        result.push(singlePoint);
      }
    }
    return result;
  }

  async function filterWeightData (){
    const startDate = dateRange[0] ? moment(dateRange[0]) : (moment().startOf('year').format('YYYY-MM-DD hh:mm'));
    const endDate = dateRange[1] ? moment(dateRange[1]) : moment().endOf('month').format('YYYY-MM-DD hh:mm');
    let result = [];
    for(const i in items){
      const singlePoint = {
        "name":'',
        'Waga':''
      };
      if(moment(items[i].datewhen)<=endDate && moment(items[i].datewhen)>=startDate){
        singlePoint.name = items[i].datewhen;
        singlePoint.Waga = items[i].weight
        result.push(singlePoint);
      }
    }
    return result;
  }

  useEffect(function () {
    const getData = async() => {
      setDataToChart(await filterData());
      setWeightChart(await filterWeightData());
    }
    getData();
    // eslint-disable-next-line
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
          <Typography sx={{ textTransform: 'uppercase', textAlign: 'center', marginTop: '.6rem', fontSize: '1.7rem', fontWeight: '600', color: 'black' }}>
            Ul numer: {hiveId}
          </Typography>

          <div>
            <Grid container spacing={2} direction="column" alignItems="center" sx={{ marginTop: '5px', marginBottom: '10px' }}>

                <Typography component={'div'} sx={{ textTransform: 'uppercase', textAlign: 'center', marginTop: '.5rem', fontSize: '1.0rem', fontWeight: '400', color: 'black' }}>
                  Wybierz przedział czasu :
                  <DateRangePicker
                  showOneCalendar
                  format="yyyy-MM-dd HH:mm"
                  defaultValue={dateRange}
                  // defaultValue={[new Date(moment().startOf('year').format('YYYY-MM-DD hh:mm')), new Date(moment().endOf('month').format('YYYY-MM-DD hh:mm'))]}
                  defaultCalendarValue={[new Date(moment().startOf('month').format('YYYY-MM-DD hh:mm')), new Date(moment().endOf('month').format('YYYY-MM-DD hh:mm'))]}
                  onChange={(range) => setDateRange(range)}
                />
                
                </Typography>


            </Grid>
          </div>
          <div className="chart-tittle">
            <h2>Temperatura i wilgotność</h2>
          </div>
          <div>
            <HiveChart data={dataToChart}/>
          </div>
          <div className="chart-tittle">
            <h2>Waga</h2>
          </div>
          <div>
            <WeightChart data={weightChart}/>
          </div>
        </section >
      </div >
    )
  }
}
