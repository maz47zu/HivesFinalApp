import React, { useState, useEffect } from 'react'
import { getActiveHives, getHiveHistory } from '../api/Client';

export default function Start() {

    const [hives, setHives] = useState([]);
    const [history, setHistory] = useState([]);

    useEffect(function(){
        const getHives = async() =>{
            //get data from server
            const hivesCur = await getActiveHives();
            setHives(hivesCur);
            //console.log(hives);
        }
        getHives();
        // eslint-disable-next-line
    },[]);

    useEffect(function(){
        const getHistory = async() =>{
            //get data from server
            const hivesHistory = await getHiveHistory(10);
            setHistory(hivesHistory);
            // console.log(history);
        }
        getHistory();
        // eslint-disable-next-line
    },[]);

    return (
        <div>
            bede
        </div>
    )
}
