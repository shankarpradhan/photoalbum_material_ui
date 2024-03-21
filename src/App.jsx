import React from 'react';
import { Typography, AppBar, Card, CardActions, CardContent, CardMedia, CssBaseline, Grid, Toolbar, Container, Button } from '@material-ui/core';
import {PhotoCamera} from '@material-ui/icons';
import useStyles from './styles';

const cards = [1,2,3,4,5,6,7,8,9]

const App = () => {

    const classes = useStyles();
    return (
        <>
            <CssBaseline />
            <AppBar position="relative"> 
            {/* navigation bar */}
                <Toolbar> 
                    {/* //blue line  //flex */}
                    <PhotoCamera className={classes.icon}/>
                    <Typography variant="h6">  
                    {/* //type of a text */}
                        Photo Album
                    </Typography>
                </Toolbar>
            </AppBar>
            <main>
                <div className={classes.container}>
                    <Container maxWidth="sm">
                        {/* style={{marginTop: "100px"}} */}
                        <Typography variant="h2" align="center" color="textPrimary" gutterBottom>
                            Photo Album
                        </Typography>
                        <Typography variant="h5" align="center" color="textSecondary" paragraph> 
                            Hello everyone this is a photo album and I'm trying to make this
                            senetence as long as possible so we can see how does it look like on the screen
                        </Typography>
                        <div className={classes.buttons}>
                            <Grid container spacing="2" justifyContent='center'>
                                <Grid item>
                                    <Button variant="contained" color="primary">
                                        See my photos
                                    </Button>                                
                                    <Button variant="outline" color="primary">
                                        Secondary action
                                    </Button>                                
                                </Grid>
                            </Grid>
                        </div>
                    </Container>
                </div>
            </main>
            <Container className={classes.cardGrid} maxWidth="md">
                <Grid container spacing={4}>
                    {cards.map((card)=> (
                        <Grid item key={card} xs={12} sm={6} md={3}>
                            <Card className={classes.card}>
                                <CardMedia 
                                    className={classes.cardMedia}
                                    image= "https://source.unsplash.com/user/wsanter"
                                    title="Image title"
                                />
                                <CardContent className={classes.cardContent}>
                                    <Typography gutterBottom variant="h5">
                                        Heading
                                    </Typography>
                                    <Typography>
                                        This is a media card. You can use this section to describe the content
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button size="small" color="primary">
                                        View
                                    </Button>
                                    <Button size="small" color="secondary">
                                        Edit
                                    </Button>
                                </CardActions>
                            </Card>
                        </Grid>
                    ))}
                    
                </Grid>
            </Container>
            <footer className={classes.footers} align="center">
                @made by Shankar Pradhan   
            </footer>
        </>
    )
}

export default App;