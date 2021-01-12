import React,{useState, useEffect} from 'react'
import { Line,Bar } from 'react-chartjs-2'
import styles from './Chart.module.css'
import { fetchDaily } from '../../api'

function Chart(props) {
   
const [dailyData, setDailyData] = useState([]);

useEffect(()=>{
    const fetchAPI = async ()=>{
        //const fetchdata= await fetchDaily();
        setDailyData(await fetchDaily());
    }
      console.log(dailyData);
    fetchAPI();
},[]);
    const dataLine = {
        labels: dailyData.map(({date})=>date).slice(0,20),
        datasets: [
          {
            data: dailyData.map(({confirmed})=>confirmed).slice(0,20),
            label:'infected',
            fill: true,
            backgroundColor: "rgba(75,192,192,0.2)",
            borderColor: "rgba(75,192,192,1)"
          },{
            data: dailyData.map(({deaths})=>deaths).slice(0,20),
            label:'deaths',
            fill: true,
            backgroundColor: "rgba(75,192,192,0.2)",
            borderColor: "#742774"
          }
        ]
        
      };
      const dataBar = {
        labels: ['infected','recovered','deaths'],
        datasets: [
          {
            data: [props.confirmed,props.recovered,props.deaths],
            label:'people',
            fill: true,
            backgroundColor: ["rgba(75,192,192,0.2)","rgba(75,192,192,.8)","#742774"],
           
          }
        ]
        
      };
    return (
        <div className={styles.chart}>
         {props.country ? <Bar data={dataBar} /> : <Line  data={dataLine} />}            
        </div>
    )
}

export default Chart
