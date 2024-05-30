import { Grid, Paper, Box, TextField,Button } from "@mui/material";
import AccountCircle from "@mui/icons-material/AccountCircle";
import KeyIcon from "@mui/icons-material/Key";
import axios from 'axios';
import { Link } from "react-router-dom";
// import Button from "./Button";
// import WelcomeImg from "../assets/welcome.png";
// import LoginIcon from "@mui/icons-material/Login";
import EmailIcon from "@mui/icons-material/Email";
import SignUpImg from "../assets/signup.png";
async function sendData(data){
  const response =await axios.post("http://localhost:3000/signup",{data});
  console.log(response);
}

export default function Signup() {
  function handleSignUpSubmit(event) {
    event.preventDefault();
    const fd = new FormData(event.target);

    const data = Object.fromEntries(fd.entries());
    // axios.post("http://localhost:3000/signup",{data}).then(response=>console.log(response));
    // console.log(data);

    sendData(data);
  }
  return (
    <form onSubmit={handleSignUpSubmit}>
      <Grid>
        <Paper
          sx={{ backgroundColor: "#e0e5ec" }}
          className=" mx-auto h-70v  bg-slate-400 "
          elevation={15}
        >
          <Grid>
            <img className=" w-20 mx-auto pt-6" src={SignUpImg} alt="Welcome" />
            {/* <h2 className="text-3xl text-center pt-5">SIGN UP</h2> */}
          </Grid>

          <div className="pt-4 px-8">
            <Box sx={{ display: "flex", alignItems: "flex-end" }}>
              <AccountCircle sx={{ color: "", mr: 1, my: 0.5 }} />
              <TextField
                id="name"
                label="Name"
                name="name"
                type="text"
                required
                variant="standard"
                fullWidth
                color="secondary"
              />
            </Box>
          </div>

          <div className="pt-5 px-8">
            <Box sx={{ display: "flex", alignItems: "flex-end" }}>
              <EmailIcon sx={{ color: "", mr: 1, my: 0.5 }} />
              <TextField
                id="email"
                label="Email"
                name="email"
                type="email"
                required
                variant="standard"
                fullWidth
                color="secondary"
              />
            </Box>
          </div>
          <div className="pt-5 px-8">
            <Box sx={{ display: "flex", alignItems: "flex-end" }}>
              <KeyIcon sx={{ color: "", mr: 1, my: 0.5 }} />
              <TextField
                id="password"
                label="Password"
                name="password"
                type="password"
                required
                variant="standard"
                fullWidth
                color="secondary"
              />
            </Box>
          </div>

          <div className="pt-5 px-8">
            <Box sx={{ display: "flex", alignItems: "flex-end" }}>
              <KeyIcon sx={{ color: "", mr: 1, my: 0.5 }} />
              <TextField
                id="cpassword"
                label="Confirm Password"
                name="cpassword"
                type="password"
                required
                variant="standard"
                fullWidth
                color="secondary"
              />
            </Box>
          </div>

          <div className="mx-auto my-8">
            <Link to="/feed">
            <Button
            sx={{ height: "3rem", width: "22rem" , ml: "5rem",}}
            variant="contained"
            color="secondary"
            type="submit"
          >
            SIGN UP
          </Button>
            </Link>
          
          </div>
        </Paper>
      </Grid>
    </form>
  );
}
