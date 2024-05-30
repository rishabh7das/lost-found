import {  Paper,Box} from "@mui/material";


export default function Feedcard({itemName,name,location,contact,filename}){
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

<Paper elevation={3}>
      <div className=" mx-4 my-4">
        <h1 ><span className=" text-red-600 font-bold">LOST</span> <span className=" text-xl">by {name}</span></h1>
        <p >Item Name : {itemName}</p>
        <p>Location : {location}</p>
        <p>Contact : {contact}</p>
        <img className=" m-auto h-70 w-60 pt-5" src={`/${filename}`} alt="earphone" />
      </div>
    </Paper>
    </Box>
    
}