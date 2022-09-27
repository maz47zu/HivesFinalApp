import React from 'react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

import moment from 'moment';

function formatXAxis(tickItem) {
  return moment(tickItem).format('MM/DD')
}

export default function WeightChart( props ) {
  const data = props.data;
  console.log(data)
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
        <YAxis/>
        <Tooltip />
        <Legend />
        <Line  type="monotone" dataKey="Waga" stroke="#b89106" strokeWidth={2} dot={false} />
      </LineChart>
    </ResponsiveContainer>
  )
}
