import React, {Component, Fragment} from 'react';
import { VictoryBar, VictoryChart, VictoryLine,
  VictoryTheme } from 'victory';
import { ResponsiveBar } from '@nivo/bar'
import { ResponsiveLine } from '@nivo/line'
import { BarChart, LineChart, Line, Bar, CartesianGrid, XAxis, YAxis, Tooltip, Legend } from 'recharts';
import './App.css';

const data = [  {    "date": "8/1/20",    "kWh": 14.249  },  {    "date": "8/2/20",    "kWh": 14.629  },  {    "date": "8/3/20",    "kWh": 12.302  },  {    "date": "8/4/20",    "kWh": 13.885  },  {    "date": "8/5/20",    "kWh": 13.932  },  {    "date": "8/6/20",    "kWh": 14.916  },  {    "date": "8/7/20",    "kWh": 14.683  },  {    "date": "8/8/20",    "kWh": 16.16  },  {    "date": "8/9/20",    "kWh": 14.254  },  {    "date": "8/10/20",    "kWh": 13.724  },  {    "date": "8/11/20",    "kWh": 9.073  },  {    "date": "8/12/20",    "kWh": 14.099  },  {    "date": "8/13/20",    "kWh": 15.247  },  {    "date": "8/14/20",    "kWh": 12.222  },  {    "date": "8/15/20",    "kWh": 11.198  },  {    "date": "8/16/20",    "kWh": 16.749  },  {    "date": "8/17/20",    "kWh": 12.271  },  {    "date": "8/18/20",    "kWh": 17.269  },  {    "date": "8/19/20",    "kWh": 15.006  },  {    "date": "8/20/20",    "kWh": 9.338  },  {    "date": "8/21/20",    "kWh": 10.632  },  {    "date": "8/22/20",    "kWh": 12.94  },  {    "date": "8/23/20",    "kWh": 13.639  },  {    "date": "8/24/20",    "kWh": 6.307  },  {    "date": "8/25/20",    "kWh": 5.312  },  {    "date": "8/26/20",    "kWh": 11.35  },  {    "date": "8/27/20",    "kWh": 12.777  },  {    "date": "8/28/20",    "kWh": 8.442  },  {    "date": "8/29/20",    "kWh": 7.719  },  {    "date": "8/30/20",    "kWh": 12.071  },  {    "date": "8/31/20",    "kWh": 12.367  }];

const victory_data = [  {    "date": "8/1/20",    "y": 14.249  },  {    "": "8/2/20",    "y": 14.629  },  {    "date": "8/3/20",    "y": 12.302  },  {    "": "8/4/20",    "y": 13.885  },  {    "": "8/5/20",    "y": 13.932  },  {    "": "8/6/20",    "y": 14.916  },  {    "": "8/7/20",    "y": 14.683  },  {    "": "8/8/20",    "y": 16.16  },  {    "": "8/9/20",    "y": 14.254  },  {    "": "8/10/20",    "y": 13.724  },  {    "": "8/11/20",    "y": 9.073  },  {    "": "8/12/20",    "y": 14.099  },  {    "": "8/13/20",    "y": 15.247  },  {    "": "8/14/20",    "y": 12.222  },  {    "": "8/15/20",    "y": 11.198  },  {    "": "8/16/20",    "y": 16.749  },  {    "": "8/17/20",    "y": 12.271  },  {    "": "8/18/20",    "y": 17.269  },  {    "": "8/19/20",    "y": 15.006  },  {    "": "8/20/20",    "y": 9.338  },  {    "": "8/21/20",    "y": 10.632  },  {    "": "8/22/20",    "y": 12.94  },  {    "": "8/23/20",    "y": 13.639  },  {    "": "8/24/20",    "y": 6.307  },  {    "": "8/25/20",    "y": 5.312  },  {    "": "8/26/20",    "y": 11.35  },  {    "": "8/27/20",    "y": 12.777  },  {    "": "8/28/20",    "y": 8.442  },  {    "": "8/29/20",    "y": 7.719  },  {    "": "8/30/20",    "y": 12.071  },  {    "": "8/31/20",    "y": 12.367  }];
const nivo_data = [{    "x": "8/1/20",    "y": 14.249  },  {    "x": "8/2/20",    "y": 14.629  },  {    "x": "8/3/20",    "y": 12.302  },  {    "x": "8/4/20",    "y": 13.885  },  {    "x": "8/5/20",    "y": 13.932  },  {    "x": "8/6/20",    "y": 14.916  },  {    "x": "8/7/20",    "y": 14.683  },  {    "x": "8/8/20",    "y": 16.16  },  {    "x": "8/9/20",    "y": 14.254  },  {    "x": "8/10/20",    "y": 13.724  },  {    "x": "8/11/20",    "y": 9.073  },  {    "x": "8/12/20",    "y": 14.099  },  {    "x": "8/13/20",    "y": 15.247  },  {    "x": "8/14/20",    "y": 12.222  },  {    "x": "8/15/20",    "y": 11.198  },  {    "x": "8/16/20",    "y": 16.749  },  {    "x": "8/17/20",    "y": 12.271  },  {    "x": "8/18/20",    "y": 17.269  },  {    "x": "8/19/20",    "y": 15.006  },  {    "x": "8/20/20",    "y": 9.338  },  {    "x": "8/21/20",    "y": 10.632  },  {    "x": "8/22/20",    "y": 12.94  },  {    "x": "8/23/20",    "y": 13.639  },  {    "x": "8/24/20",    "y": 6.307  },  {    "x": "8/25/20",    "y": 5.312  },  {    "x": "8/26/20",    "y": 11.35  },  {    "x": "8/27/20",    "y": 12.777  },  {    "x": "8/28/20",    "y": 8.442  },  {    "x": "8/29/20",    "y": 7.719  },  {    "x": "8/30/20",    "y": 12.071  },  {    "x": "8/31/20",    "y": 12.367  }];

const nivo_line_data = [ {"id": "sample", "data": [  {    "x": "8/1/20",    "y": 14.249  },  {    "x": "8/2/20",    "y": 14.629  },  {    "x": "8/3/20",    "y": 12.302  },  {    "x": "8/4/20",    "y": 13.885  },  {    "x": "8/5/20",    "y": 13.932  },  {    "x": "8/6/20",    "y": 14.916  },  {    "x": "8/7/20",    "y": 14.683  },  {    "x": "8/8/20",    "y": 16.16  },  {    "x": "8/9/20",    "y": 14.254  },  {    "x": "8/10/20",    "y": 13.724  },  {    "x": "8/11/20",    "y": 9.073  },  {    "x": "8/12/20",    "y": 14.099  },  {    "x": "8/13/20",    "y": 15.247  },  {    "x": "8/14/20",    "y": 12.222  },  {    "x": "8/15/20",    "y": 11.198  },  {    "x": "8/16/20",    "y": 16.749  },  {    "x": "8/17/20",    "y": 12.271  },  {    "x": "8/18/20",    "y": 17.269  },  {    "x": "8/19/20",    "y": 15.006  },  {    "x": "8/20/20",    "y": 9.338  },  {    "x": "8/21/20",    "y": 10.632  },  {    "x": "8/22/20",    "y": 12.94  },  {    "x": "8/23/20",    "y": 13.639  },  {    "x": "8/24/20",    "y": 6.307  },  {    "x": "8/25/20",    "y": 5.312  },  {    "x": "8/26/20",    "y": 11.35  },  {    "x": "8/27/20",    "y": 12.777  },  {    "x": "8/28/20",    "y": 8.442  },  {    "x": "8/29/20",    "y": 7.719  },  {    "x": "8/30/20",    "y": 12.071  },  {    "x": "8/31/20",    "y": 12.367  }] }];



class Chart1 extends Component {
  
  render(){
      return (
        
          <ResponsiveBar
              data={nivo_data}
              keys={[ "y" ]}
              indexBy = "x"
              margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
              padding={0.3}
              colors={{ scheme: 'accent' }}
              defs={[
                  {
                      id: 'dots',
                      type: 'patternDots',
                      background: 'inherit',
                      color: '#38bcb2',
                      size: 4,
                      padding: 1,
                      stagger: true
                  },
                  {
                      id: 'lines',
                      type: 'patternLines',
                      background: 'inherit',
                      color: '#eed312',
                      rotation: -45,
                      lineWidth: 6,
                      spacing: 10
                  }
              ]}
              fill={[
                  {
                      match: {
                          id: 'fries'
                      },
                      id: 'dots'
                  },
                  {
                      match: {
                          id: 'sandwich'
                      },
                      id: 'lines'
                  }
              ]}
              borderColor={{ from: 'color', modifiers: [ [ 'darker', 1.6 ] ] }}
              axisTop={null}
              axisRight={null}
              axisBottom={{
                  tickSize: 5,
                  tickPadding: 5,
                  tickRotation: 0,
                  legend: 'Date',
                  legendPosition: 'middle',
                  legendOffset: 32
              }}
              axisLeft={{
                  tickSize: 5,
                  tickPadding: 5,
                  tickRotation: 0,
                  legend: 'kWh',
                  legendPosition: 'middle',
                  legendOffset: -40
              }}
              labelSkipWidth={12}
              labelSkipHeight={12}
              labelTextColor={{ from: 'color', modifiers: [ [ 'darker', 1.6 ] ] }}
              legends={[
                  {
                      dataFrom: 'keys',
                      anchor: 'bottom-right',
                      direction: 'column',
                      justify: false,
                      translateX: 120,
                      translateY: 0,
                      itemsSpacing: 2,
                      itemWidth: 100,
                      itemHeight: 20,
                      itemDirection: 'left-to-right',
                      itemOpacity: 0.85,
                      symbolSize: 20,
                      effects: [
                          {
                              on: 'hover',
                              style: {
                                  itemOpacity: 1
                              }
                          }
                      ]
                  }
              ]}
              animate={true}
              motionStiffness={90}
              motionDamping={15}
          />
      )
}
}

class Chart2 extends Component {
  render(){
      return (
        <ResponsiveLine
        data={nivo_line_data}
        margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
        xScale={{ type: 'point' }}
        yScale={{ type: 'linear', min: 'auto', max: 'auto', stacked: true, reverse: false }}
        axisTop={null}
        axisRight={null}
        axisBottom={{
            orient: 'bottom',
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'date',
            legendOffset: 36,
            legendPosition: 'middle'
        }}
        axisLeft={{
            orient: 'left',
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'kWh',
            legendOffset: -40,
            legendPosition: 'middle'
        }}
        colors={{ scheme: 'nivo' }}
        pointSize={10}
        pointColor={{ theme: 'background' }}
        pointBorderWidth={2}
        pointBorderColor={{ from: 'serieColor' }}
        pointLabel="y"
        pointLabelYOffset={-12}
        useMesh={true}
        legends={[
            {
                anchor: 'bottom-right',
                direction: 'column',
                justify: false,
                translateX: 100,
                translateY: 0,
                itemsSpacing: 0,
                itemDirection: 'left-to-right',
                itemWidth: 80,
                itemHeight: 20,
                itemOpacity: 0.75,
                symbolSize: 12,
                symbolShape: 'circle',
                symbolBorderColor: 'rgba(0, 0, 0, .5)',
                effects: [
                    {
                        on: 'hover',
                        style: {
                            itemBackground: 'rgba(0, 0, 0, .03)',
                            itemOpacity: 1
                        }
                    }
                ]
            }
        ]}
    />
)
  }
}


export default class Example extends Component {
  render() {
    return(
      <Fragment>
        <h1> RECHARTS BAR </h1>

    <BarChart width={1000} height={400} data={data}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis width = "1000" interval = "0" dataKey="date"/>
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="kWh" fill="#8884d8" />
     
    </BarChart>

    <h1> RECHARTS LINE </h1>

    <LineChart width={730} height={250} data={data}
    margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
    <CartesianGrid strokeDasharray="3 3" />
    <XAxis dataKey="date" />
    <YAxis />
    <Tooltip />
    <Legend />
    <Line type="monotone" dataKey="kWh" stroke="#82ca9d" />
  </LineChart>

        
      <h1> NIVO BAR </h1>
      <div style={{ height: 600, width: 1400 }}>
          <Chart1 />
        </div>
      <h1> NIVO LINE </h1>
        <div style={{ height: 600, width: 1400 }}>
          <Chart2 />
        </div>

      <h1> VICTORY BAR </h1>
      
    <VictoryChart
        theme={VictoryTheme.material}
        height = {200}
        width = {200}
      >
        <VictoryBar
          style={{
            height: 200 ,
            width: 200 ,
            data: { stroke: "#c43a31" },
            parent: { border: "1px solid #ccc"}
          }}
          data={victory_data}
        />
      </VictoryChart>

      <h1> VICTORY LINE </h1>

      <VictoryChart
        theme={VictoryTheme.material}
        height = {200}
        width = {200}
      >
        <VictoryLine
          style={{
            height: 200 ,
            width: 200 ,
            data: { stroke: "#c43a31" },
            parent: { border: "1px solid #ccc"}
          }}
          data={victory_data}
        />
      </VictoryChart>
      </Fragment>
      
    )
    
  }
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <center>
          <h1> Welcome to the Ray </h1>
        </center>
      </header>
    </div>
  );
}

//export default App;
