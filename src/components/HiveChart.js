import React from 'react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

import moment from 'moment';

function formatXAxis(tickItem) {
  return moment(tickItem).format('MM/DD')
}

export default function HiveChart( props ) {
  const data = props.data;
  console.log(data);
  return (
    <ResponsiveContainer width="100%" height={200}>
      <LineChart
        data={data}
        margin={{
          top: 5,
          right: 20,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" tickFormatter={formatXAxis}/>
        <YAxis yAxisId="left" />
        <YAxis yAxisId="right" orientation="right" />
        <Tooltip />
        <Legend />
        <Line yAxisId="left" type="monotone" dataKey="Temp" stroke="#8884d8" dot={false} strokeWidth={1.5}/>
        <Line yAxisId="right" type="monotone" dataKey="Wilg" stroke="#82ca9d" dot={false} strokeWidth={1.5}/>
      </LineChart>
    </ResponsiveContainer>
  )
}
