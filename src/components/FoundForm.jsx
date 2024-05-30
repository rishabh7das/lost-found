import { useState } from "react";
import { Grid, Paper, TextField, Button } from "@mui/material";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
// import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import axios from 'axios';


export default function FoundForm() {

    const [img, setImg] = useState("")
    async function sendData(data){
      const response =await axios.post("http://localhost:3000/found",{data});
      console.log(response);
    }

    function handleImageUpload(event){
        console.log(event.target.files);
        setImg(event.target.files);
    }
    function handleFoundSubmit(event) {
        event.preventDefault();
        const fd = new FormData(event.target);
        fd.append("image", img)
        const data = Object.fromEntries(fd.entries());
        const newData = {
          ...data,
          filename:data.file.name
        }
        
        sendData(newData);
        console.log(newData);
      }
  return (
    <form onSubmit={handleFoundSubmit}>
      <Grid>
        <Paper
          elevation={15}
          className="h-75v mx-auto bg-slate-400 "
          sx={{ backgroundColor: "#e0e5ec" }}
        >
          <div>
            <TextField
              sx={{ ml: 5, mt: 4 }}
              id="name"
              label="Name"
              name="name"
              placeholder="Placeholder"
              multiline
              required
              color="secondary"
            />
            <TextField
              sx={{ mt: 4, ml: 6 }}
              id="itemName"
              name="itemName"
              label="Found Item Name"
              placeholder="Placeholder"
              multiline
              color="secondary"
            />
          </div>
          <div>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DemoContainer
                sx={{ mt: 1, ml: 5, mr: 6 }}
                components={["DateTimePicker"]}
              >
                <DateTimePicker label="Date and Time" />
              </DemoContainer>
            </LocalizationProvider>
          </div>

          <div className="flex">
            <div>
              <TextField
                sx={{ mt: 2, ml: 5 }}
                id="location"
                name="location"
                label="Location"
                placeholder="Location"
                multiline
                color="secondary"
              />
            </div>
            <div className="pt-5 pl-4">
              <input type="file" name="file" onChange={handleImageUpload} />
            </div>
          </div>
          <div>
            <TextField
              sx={{ mt: 2, ml: 5, paddingRight: 10 }}
              id="Description"
              label="Found Item Description"
              placeholder="Found Item Description"
              multiline
              name="description"
              rows={3}
              fullWidth
              color="secondary"
            />
          </div>
          <div>
            <TextField
              sx={{ mt: 2, ml: 5, paddingRight: 10 }}
              id="contact"
              label="Contact Details"
              placeholder="Contact Details"
              name="contact"
              multiline
              fullWidth
              color="secondary"
            />
          </div>

          <Button
            sx={{ height: "3rem", width: "22rem", mt: "1.5rem", ml: "5rem" }}
            variant="contained"
            color="secondary"
            type="submit"
          >
            Register Found Item
          </Button>
        </Paper>
      </Grid>
    </form>
  );
}
