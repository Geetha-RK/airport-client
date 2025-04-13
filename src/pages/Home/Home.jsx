import React, { useEffect, useState } from 'react'
import axios from 'axios';
import './Home.scss'

const Home = () => {
  const [airline,setAirline] = useState({});

  useEffect(()=>{
      const fetchAirlines= async() => {
        try {
          const response = await axios.get('http://localhost:5050/api/airlines');
          setAirline(response.data);
          console.log(response.data);
        } catch (error) {
          console.log("Error:",error);
        }
      }
      fetchAirlines();
  },[])

  return (
    <div>
      {airline.length > 0 ? 
        airline.map((airline,index)=>{
          return(
            <>
              <p>airline Name:{airline.airline_name}</p>
              <p>airline IATA:{airline.iata_code}</p>
            </>
          )
        })
      :
        <p>No Airlines found</p>
      }
       

    </div>
  )
}

export default Home