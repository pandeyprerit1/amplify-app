import logo from './logo.svg';
import react, { useEffect, useState } from 'react';
import './App.css';

import { API } from 'aws-amplify'
import { withAuthenticator } from 'aws-amplify-react'

function App() {
  const [people,updatePeople] = useState ([])
  async function callApi() {
    try {
     const peopleData= await API.get('mainappapi','/people')
     updatePeople(peopleData,people)
     console.log('peopleData : ',peopleData)
    
      const coinData=await API.get('mainappapi','/coins')
      console.log('coinData : ',coinData)
    }catch(err){
      console.log({ err })

    }
  }
  useEffect(()=>{
    callApi()
  },[])
  return (
    <div className="App">
     <h1>Hello World !</h1>
    </div>
  );
}

export default withAuthenticator(App);
