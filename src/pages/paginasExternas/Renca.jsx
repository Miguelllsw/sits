import * as React from 'react';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';
import Grid from '@mui/material/Grid';
import Item from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import MenuSuperior from '../../components/MenuSuperior';
import { BarChart } from '@mui/x-charts';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { axisClasses } from '@mui/x-charts';


ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    datasets: [
        {
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)',
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
            ],
            borderWidth: 1,
        },
    ],
};

const chartSetting = {
    yAxis: [
      {
        label: 'rainfall (mm)',
      },
    ],
    width: 500,
    height: 300,
    sx: {
      [`.${axisClasses.left} .${axisClasses.label}`]: {
        transform: 'translate(-20px, 0)',
      },
    },
  };
  const dataset = [
    {
      london: 59,
      paris: 57,
      newYork: 86,
      seoul: 21,
      month: 'Jan',
    },
    {
      london: 50,
      paris: 52,
      newYork: 78,
      seoul: 28,
      month: 'Fev',
    },
    {
      london: 47,
      paris: 53,
      newYork: 106,
      seoul: 41,
      month: 'Mar',
    },
    {
      london: 54,
      paris: 56,
      newYork: 92,
      seoul: 73,
      month: 'Apr',
    },
    {
      london: 57,
      paris: 69,
      newYork: 92,
      seoul: 99,
      month: 'May',
    },
    {
      london: 60,
      paris: 63,
      newYork: 103,
      seoul: 144,
      month: 'June',
    },
    {
      london: 59,
      paris: 60,
      newYork: 105,
      seoul: 319,
      month: 'July',
    },
    {
      london: 65,
      paris: 60,
      newYork: 106,
      seoul: 249,
      month: 'Aug',
    },
    {
      london: 51,
      paris: 51,
      newYork: 95,
      seoul: 131,
      month: 'Sept',
    },
    {
      london: 60,
      paris: 65,
      newYork: 97,
      seoul: 55,
      month: 'Oct',
    },
    {
      london: 67,
      paris: 64,
      newYork: 76,
      seoul: 48,
      month: 'Nov',
    },
    {
      london: 61,
      paris: 70,
      newYork: 103,
      seoul: 25,
      month: 'Dec',
    },
  ];
  
  const valueFormatter = (value) => `${value}mm`;

export default function Renca() {


    return (
        <>
            <MenuSuperior />
            <Grid container columns={{ md: 12 }} mt={10}>
                <Grid md={4} marginRight={1}>
                    <Card sx={{ maxWidth: 900, height: 700 }}>
                        <iframe
                            title="myFrame"
                            width="100%"
                            height="100%"
                            src="https://minsal.maps.arcgis.com/apps/Embed/index.html?webmap=84e9483b2fc047e6a0374cb4fdda5452&extent=-105.8475,-55.0115,-40.9403,-27.9301&zoom=true&previewImage=false&scale=true&disable_scroll=true&theme=light"
                            frameBorder="0"
                            allowFullScreen="true"
                        />
                    </Card>
                </Grid>
                <Grid xs={2} sm={4} md={4} >
                    <Item>
                        <Typography gutterBottom variant="h5" component="div">
                            Indicadores
                        </Typography>
                        <BarChart
                            xAxis={[{ scaleType: 'band', data: ['group A', 'group B', 'group C'] }]}
                            series={[{ data: [4, 3, 5] }, { data: [1, 6, 3] }, { data: [2, 5, 6] }]}
                            width={500}
                            height={300}
                        />
                        <BarChart
                            dataset={dataset}
                            xAxis={[{ scaleType: 'band', dataKey: 'month' }]}
                            series={[
                                { dataKey: 'london', label: 'London', valueFormatter },
                                { dataKey: 'paris', label: 'Paris', valueFormatter },
                                { dataKey: 'newYork', label: 'New York', valueFormatter },
                                { dataKey: 'seoul', label: 'Seoul', valueFormatter },
                            ]}
                            {...chartSetting}
                        />
                    </Item>
                </Grid>
                <Grid xs={2} sm={4} md={3} >
                    <Item>
                        <Typography gutterBottom variant="h5" component="div">
                            Regionales
                        </Typography>
                        <Doughnut data={data} />
                    </Item>
                </Grid>
            </Grid>
        </>

    )
}