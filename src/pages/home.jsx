import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Grid from '@mui/material/Grid';
import Item from '@mui/material/Grid';
import MenuSuperior from '../components/MenuSuperior';

export default function Home() {

    return (
        <>
            <MenuSuperior />
            <Grid container columns={{ md: 12 }} mt={10}>
                <Grid xs={2} sm={4} md={4} >
                    <Item>
                        <Card sx={{ maxWidth: 345 }}>
                            <CardActionArea href='/renca'>
                                <CardMedia
                                    component="img"
                                    height="140"
                                    src='https://media-front.elmostrador.cl/2018/10/web-cerros-de-renca.jpg'
                                    alt="green iguana"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        RENCA
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Item>
                </Grid>
                <Grid xs={2} sm={4} md={4} >
                    <Item>
                        <Card sx={{ maxWidth: 345 }}>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    height="140"
                                    src='https://storage.googleapis.com/chile-travel-newsite-static-content/2021/08/santiago-portada-1.jpg'
                                    alt="green iguana"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        SANTIAGO
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Item>
                </Grid>
                <Grid xs={2} sm={4} md={4} >
                    <Item>
                        <Card sx={{ maxWidth: 345 }}>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    height="140"
                                    src='https://lavozdemaipu.cl/wp-content/uploads/2023/09/maipu-8.jpg'
                                    alt="green iguana"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        Maipú
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Item>
                </Grid>
            </Grid>
        </>
    )
}