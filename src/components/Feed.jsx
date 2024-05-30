import {   Box, Paper } from "@mui/material";

// import earphone from "../assets/earphone.jpeg"
import key from "../assets/key.jpg"
// import Feedcard from "./Feedcard";
import data from "../../backend/data/lofo.json"
export default function Feed() {
  

  return (
    <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        '& > :not(style)': {
          ml:"35rem",
          mt:"2rem",
          width: 500,
          height: 500,
        },
      }}

    >
    
    {data.map((form) => (
  <Paper key={Math.random() *1000000} elevation={3}>
  <div className=" mx-4 my-4">
    <h1 ><span className=" text-red-600 font-bold">{form.type}</span> <span className=" text-xl">by {form.name}</span></h1>
    <p >Item Name : {form.itemName}</p>
    <p>Location : {form.location}</p>
    <p>Contact : {form.contact} </p>
    <p>Description : {form.description}</p>
    <img className=" m-auto h-70 w-60 pt-5" src={`/${form.filename}`} alt="key" />
  </div>
  </Paper>
))}
      

      <Paper elevation={3}>
      <div className=" mx-4 my-4">
        <h1 ><span className=" text-green-500 font-bold">Found</span> <span className=" text-xl">by Shiva Choudhary</span></h1>
        <p >Item Name : key</p>
        <p>Location : 4 pillar</p>
        <p>Contact : p4 hostel room 4</p>
        <img className=" m-auto h-70 w-60 pt-5" src={key} alt="key" />
      </div>
      </Paper>
      
    </Box>
        
    
    
  )
    
}

// {places.map((place) => (
//   <li key={place.id} className="place-item">
//     <button onClick={() => onSelectPlace(place.id)}>
//       <img src={place.image.src} alt={place.image.alt} />
//       <h3>{place.title}</h3>
//     </button>
//   </li>
// ))}