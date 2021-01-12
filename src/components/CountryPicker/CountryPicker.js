import React,{useState, useEffect} from 'react'
import styles from './CountryPicker.module.css'
import { fetchCountry } from '../../api'
import {NativeSelect, FormControl} from '@material-ui/core'


function CountryPicker({handleCountryChange}) {
     
    const [country, setCountry] = useState([]);

    useEffect(()=>{
        const fetchAPI = async ()=>{
            //const fetchdata= await fetchDaily();
            setCountry(await fetchCountry());
        }
        //  console.log(dailyData);
        fetchAPI();
    },[]);
   
    
    return (
        <FormControl className={styles.formControl}>
            <NativeSelect defaultValue='' 
            onChange={(e)=>handleCountryChange(e.target.value)}>
                <option value="global">Global</option>
                {country.map((country,i)=> <option key={i} value={country}>{country}</option>)}
                
            </NativeSelect>
        </FormControl>
    )
}

export default CountryPicker
