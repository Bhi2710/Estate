import React, { useState, useEffect } from 'react';
// import Body from './Body';
import Data from '../data'; 
// import Like from './Like';
import Dislike from './Dislike';



const getData = () => {
  let data = localStorage.getItem('state')
  if(data){
    return JSON.parse(data);
  }
  else{
    return [];
  }
}


const Main = () => {

  const [type, setType] = useState("");
  const [price, setPrice] = useState("20000");
  const [room, setRoom] = useState ("6");
  const [location, setLocation] = useState("");
  const [newData, setNewData] = useState([Data]);
  const [saveData,setSaveData] = useState(getData);



  useEffect(() => {
    const thisdata = Data.filter((item) =>{
      if(item.Location.startsWith(location) && 
      item.price<=price && item.room<=room && item.type.startsWith(type)){
        return true;
      }
      return false;
    })
    setNewData(thisdata);
  },[location,price,room,type] )
  

  const toggleFav = (idx) => {
    if(saveData.indexOf(Data[idx]) === -1){
      setSaveData([...saveData,Data[idx]]);
    }
    else{
      saveData.splice(saveData.indexOf(Data[idx]),1)
      setSaveData([...saveData]);
    }
  }

  useEffect(() => {
    localStorage.setItem('state', JSON.stringify(saveData));
  },[saveData])
 console.log(newData ,"***")


  return (
    <main>
      <div className='Main_top_heading'>
        <h2>Search properties to rent</h2>
        <select onChange={((e)=> setLocation(e.target.value))}>
          <option value="">Location</option>
          <option>No.101 New york</option>
          <option>No.209 BJP Street India</option>
          <option>No.209 Lucknow Street</option>
          <option>No.204 Congress Street India</option>
        </select>
      </div>

      <div className='Main_functional_container'>
        <div className='Main_div_container'>
          <p>Location</p>
          <span>New York, USA</span>
        </div>
        <div className='Main_div_container'>
        <p>Rooms</p>
        <select onChange={((e)=> setRoom(e.target.value))}>
          <option value={"6"}>Room 6</option>
          <option value={"1"}>Room 1</option>
          <option value={"3"}>Room 3</option>
          <option value={"4"}>Room 4</option>
        </select>
        </div>
        <div className='Main_div_container'>
          <p>Price</p>
          <select onChange={((e)=> setPrice(e.target.value))}>
            <option value={"20000"}>Below 20000 </option>
            <option value={"12000"}>Under 12000</option>
            <option value={"15000"}>Under 15000</option>
            <option value={"16000"}>Under 16000</option>
          </select>
        </div>
        
        <div className='Main_div_container'>
          <p>Property Type</p>
          <select onChange={((e)=> setType(e.target.value))}>
            <option value={"Houses"}>Houses</option>
            <option value={"vela"}>Vela</option>
            <option value={"rent"}>Rental Houses</option>
            <option value={"apartment"}>Apartment</option>
          </select>
        </div>
      </div>

      <div className='items_container'>
        {newData.map((e , idx) =>{
          return(
            <div key={idx} className='items_container_data_parent'>
              <div className='items_container_data'>
                <img src={e.image} alt="load" width={"300px"} height={"400px"}/>
                <div className='aside_items'>
                   <aside>
                      <span>{e.type}</span>
                      <p>${e.price}</p>
                      <h4>{e.Location}</h4>
                      <p>Number of rooms :- {e.room}</p>
                   </aside>
                   <button onClick={()=>toggleFav(idx)}>
                      {<Dislike />}
                   </button>
                </div>
              </div> 
            </div>
          )
        })}
      </div>
    </main>
  )
}

export default Main;