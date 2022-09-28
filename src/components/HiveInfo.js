import React from 'react'

import { Card, CardHeader, CardContent, Typography, Divider, List, ListItem, ListItemText, ListItemIcon, Button, Box } from '@mui/material';
import DeviceThermostatIcon from '@mui/icons-material/DeviceThermostat';
import PercentOutlinedIcon from '@mui/icons-material/PercentOutlined';
import ScaleOutlinedIcon from '@mui/icons-material/ScaleOutlined';
import AutorenewOutlinedIcon from '@mui/icons-material/AutorenewOutlined';
import { yellow } from '@mui/material/colors';

import { Link } from 'react-router-dom';

import moment from 'moment';

export default function InfoCard(props) {
    const hiveId = props.hives?.id;

    return (
        <Card sx={{ backgroundColor: yellow[600], marginTop: '10px' }} style={{ border: "0.5px solid gray" }}>
            <CardHeader title={'Numer ula : ' + props.hives?.id} sx={{ textTransform: 'none' }} />

            <Divider sx={{ borderBottomWidth: 3, bgcolor: "dark" }} />
            <CardContent >
                <List disablePadding={true}>

                    <ListItem style={{color:'black'}}>
                        <ListItemIcon style={{color:'black'}}>
                            <DeviceThermostatIcon />
                        </ListItemIcon>
                        <ListItemText>
                            <Typography variant='body1' >Temperatura :</Typography>
                        </ListItemText>
                        <ListItemText>
                            <Typography variant='body1' align='right'>{props.hives?.temperature.toFixed(2) + '°C'}</Typography>
                        </ListItemText>
                    </ListItem>
                    <Divider />
                    <ListItem style={{color:'black'}}>
                        <ListItemIcon style={{color:'black'}}>
                            <PercentOutlinedIcon />
                        </ListItemIcon>
                        <ListItemText>
                            <Typography variant='body1'>Wilgotność :</Typography>
                        </ListItemText>
                        <ListItemText>
                            <Typography variant='body1' align='right'>{props.hives?.humidity.toFixed(2) + '%'}</Typography>
                        </ListItemText>
                    </ListItem>
                    <Divider />
                    <ListItem style={{color:'black'}}>
                        <ListItemIcon style={{color:'black'}}>
                            <ScaleOutlinedIcon />
                        </ListItemIcon>
                        <ListItemText>
                            <Typography variant='body1' >Waga :</Typography>
                        </ListItemText>
                        <ListItemText>
                            <Typography variant='body1' align='right'>{props.hives?.weight.toFixed(2) + ' kg'}</Typography>
                        </ListItemText>
                    </ListItem>
                    <Divider />
                    <ListItem style={{color:'black'}}>
                        <ListItemIcon style={{color:'black'}}>
                            <AutorenewOutlinedIcon />
                        </ListItemIcon>
                        <ListItemText>
                            <Typography variant='body1' >Aktualizacja :</Typography>
                        </ListItemText>
                        <ListItemText>
                            <Typography variant='body1' align='right'>{moment(props.hives?.lastUpdate).format('DD-MM-YY HH:mm:ss')}</Typography>
                        </ListItemText>
                    </ListItem>
                </List>
                <Box sx={{ pt: 1, pb: -0 }}>
                    <Link to='/details' state={{ hiveId: hiveId }} style={{ textDecoration: 'none' }}>
                        <Button variant="outlined" fullWidth={true} size="small" style={{
                            borderRadius: 10,
                            borderColor: 'gray',
                            color: 'black',
                            padding: "9px 18px",
                            fontSize: "1rem"
                        }}>
                            Więcej informacji...
                        </Button>
                    </Link>
                </Box>
            </CardContent>
        </Card>
    )
}
