import React from 'react'
import {
  XYPlot, 
  VerticalBarSeries,
  HorizontalGridLines,
  XAxis,
  YAxis
} from 'react-vis';

export function DemoVis({ data = [] }) {
  return (
    <div>
      <XYPlot margin={{bottom: 150}} xType="ordinal" height={500} width={700}>
        <HorizontalGridLines/>
        <VerticalBarSeries data={data} />
        <XAxis title="Engineer" tickLabelAngle={-80}/>
        <YAxis title="Tickets" tickLabelAngle={-90}/>
      </XYPlot>
    </div>
  )
}