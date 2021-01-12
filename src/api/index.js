import axios from 'axios'
const url = 'https://covid19.mathdro.id/api'
const url2 = 'https://covid19.mathdro.id/api/daily'
const url3 = 'https://covid19.mathdro.id/api/countries'
export const fetchData = async (country)=>{
    let changeableUrl=url;
    if(country){
       changeableUrl=`${url}/countries/${country}`
    }
 try {
     const response = await axios.get(changeableUrl);
     const modifiedData = {
         confirmed: response.data.confirmed,
         recovered: response.data.recovered,
         deaths: response.data.deaths,
         lastUpdate: response.data.lastUpdate
     }
     return modifiedData;
 } catch (error) {
    console.log(error);
 }
}



export const fetchDaily = async ()=>{
    try {
        const response = await axios.get(url2);
        const modifiedData =response.data.map((dailyData)=>(
            {
                confirmed: dailyData.confirmed.total,
                deaths: dailyData.deaths.total,
                date: dailyData.reportDate,
            }
        )); 
       
        return modifiedData; 
        
    } catch (error) {
        console.log(error);
    }
   }
   export const fetchCountry = async ()=>{
    try {
        const response = await axios.get(url3);
        const modifiedData =response.data.countries.map((country)=>country.name); 
      
        return modifiedData;
    } catch (error) {
        console.log(error);
    }
   }