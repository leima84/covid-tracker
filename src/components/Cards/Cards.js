import React from 'react'
import { Card, CardContent, Typography, Grid} from '@material-ui/core'
import styles from './Cards.module.css'
import CountUp from 'react-countup';
import cx from 'classnames'
function Cards(props) {
     //const data = props.data;
    const showData = {
        confirmed:props.confirmed,
        recovered:props.recovered,
        deaths: props.deaths,
        lastUpdate: props.lastUpdate
    }
    console.log(showData);
    return (
        <div className={styles.container}>
            <Grid container spacing={3} justify="center">
                <Grid  component={Card} className={cx(styles.card,styles.infect)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Infected</Typography>
                        <Typography variant="h4">                      
                        <CountUp start={0} end= {showData.confirmed} duration={2.5} separator=','></CountUp>
                        </Typography>
                        <Typography color="textSecondary">{new Date(showData.lastUpdate).toDateString()}</Typography>
                        <Typography variant="body2"> number of active cases of COVID-19</Typography>
                    </CardContent>
                </Grid>
                <Grid  component={Card} className={cx(styles.recovered,styles.card)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Recovered</Typography>
                        <Typography variant="h4"> 
                        <CountUp start={0} end= {showData.recovered}  duration={2.5} separator=','></CountUp>
                        </Typography>
                        <Typography color="textSecondary">{new Date(showData.lastUpdate).toDateString()}</Typography>
                        <Typography variant="body2"> number of recoveries from COVID-19</Typography>
                    </CardContent>
                </Grid>
                <Grid  component={Card} className={cx(styles.death,styles.card)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Deaths</Typography>
                        <Typography variant="h4"> 
                            <CountUp start={0} end= {showData.deaths}  duration={2.5} separator=','></CountUp>
                            </Typography>
                        <Typography color="textSecondary">{new Date(showData.lastUpdate).toDateString()}</Typography>
                        <Typography variant="body2"> number of deaths caused by COVID-19</Typography>
                    </CardContent>
                </Grid>
            </Grid> 
        </div>
    )
}

export default Cards
