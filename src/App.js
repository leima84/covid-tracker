import React, { Component } from 'react';
import styles from './App.module.css'
import Cards from './components/Cards/Cards'
import Chart from './components/Chart/Chart'
import CountryPicker from './components/CountryPicker/CountryPicker'
import { fetchData } from './api'


import imagsrc from './image.png'

export default class App extends Component {

  state = {
            confirmed:0,
            recovered:0,
            deaths:0,
            lastUpdate:{},
            country:''
  }

  async componentDidMount(){
    const data = await fetchData();
    console.log(data);
    this.setState({ confirmed:data.confirmed.value, 
                    recovered:data.recovered.value, 
                    deaths:data.deaths.value, 
                    lastUpdate:data.lastUpdate,
                    country:''
                  });
  }


  handleCountryChange = async(country)=>{
    const data = await fetchData(country);
    this.setState({ confirmed:data.confirmed.value, 
                    recovered:data.recovered.value, 
                    deaths:data.deaths.value, 
                    lastUpdate:data.lastUpdate,country:country});    
  }
  render() {
   
    return (
      <>
      <div className={styles.container}>
      <img className={styles.covidImage} src={imagsrc}></img>
        <Cards  confirmed={this.state.confirmed} 
                recovered={this.state.recovered} 
                deaths={this.state.deaths} 
                lastUpdate={this.state.lastUpdate}
                country={this.state.country}/>
      
        <CountryPicker handleCountryChange={this.handleCountryChange}/> 
        <Chart  confirmed={this.state.confirmed} 
                recovered={this.state.recovered}  
                deaths={this.state.deaths} 
                country={this.state.country}/>
        </div>
      </>
    )
  }
}
