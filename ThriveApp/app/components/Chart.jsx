import { View } from 'react-native'
import React, { useEffect } from 'react'
import { CartesianChart, Line, useChartPressState } from "victory-native";
import roboto from "../../assets/fonts/Roboto-Bold.ttf"
import { useFont, Text as SKText, Circle } from '@shopify/react-native-skia';
import { useDerivedValue } from 'react-native-reanimated';



const Chart = ({DATA}) => {
  const font = useFont(roboto, 12);
  const chartFont = useFont(roboto, 16);

  const { state, isActive } = useChartPressState({ x: 0, y: { sugar: 0 } });

  const value = useDerivedValue(()=>{
    return state.y.sugar.value.value + " mg/dL"
  },[state])

  const textXPosition = useDerivedValue(()=>{
    if(!chartFont) {return 0;}
    return chartFont.measureText(value.value).width/2
  },[state, chartFont])

  return (
    <CartesianChart 
      chartPressState={state}
      data={DATA}
      xKey="time"
      yKeys={["sugar"]}
      axisOptions={
        {
          font, 
          lineColor:{grid:"white", frame:"white"}, 
          labelColor:"white", 
          tickValues:{x: [0, 30, 60, 90, 120, 150, 180], y:[0, 20, 40, 60, 80, 100, 120, 140, 160, 180, 200]},
          formatXLabel: (label) => label === 0 ? "now" : "+" + (Number(label)/60) + "hr",
          formatYLabel: (label) => label + "mg/dL"
        }
      }
    >
        {({ points, chartBounds }) => (
          <>
            <SKText
              x={chartBounds.right - 100}
              y={40}
              font={chartFont}
              text={value}
              color={"white"}
              style={"fill"}
            />
            
            <Line points={points.sugar} color="#FFC400" strokeWidth={3} animate={{type: "timing", duration: 300}} connectMissingData={true} curveType='natural'/>

            {isActive && (<ToolTip x={state.x.position} y={state.y.sugar.position} />)}
          </>
        )}

    </CartesianChart>
  )
}

function ToolTip({ x, y }) {
  return <Circle cx={x} cy={y} r={6} color="#ffffff" opacity={0.8} />;
}

export default Chart


