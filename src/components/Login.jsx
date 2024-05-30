import { Grid, Paper, Box, TextField, Button } from "@mui/material";
// import Button from "./Button"
import AccountCircle from "@mui/icons-material/AccountCircle";
import KeyIcon from "@mui/icons-material/Key";
import LoginImg from "../assets/login.png";
import { Link } from "react-router-dom";
// import LoginIcon from "@mui/icons-material/Login";

export default function Login() {

    function handleLoginSubmit(event){
        event.preventDefault();
    const fd = new FormData(event.target);
    // const acquisitionChannel = fd.getAll("acquisition");
    // const enteredEmail = fd.get("email");
    // const enteredPassword = fd.get("password");

    const data = Object.fromEntries(fd.entries());
    console.log(data);
    }
  return (
    <form action="/home" onSubmit={handleLoginSubmit}>
      <Grid>
        <Paper
          sx={{ backgroundColor: "#e0e5ec" }}
          className=" mx-auto h-70v  bg-slate-400 "
          elevation={15}
        >
          <Grid>
            <img className=" w-20 mx-auto pt-10" src={LoginImg} alt="Welcome" />
            {/* <h2 className="text-3xl text-center pt-5">LOG IN</h2> */}
          </Grid>

          <div className="pt-10 px-8">
            <Box sx={{ display: "flex", alignItems: "flex-end" }}>
              <AccountCircle sx={{ color: "", mr: 1, my: 0.5 }} />
              <TextField
                name="email"
                id="email"
                label="Email"
                type="email"
                required
                variant="standard"
                fullWidth
                color="secondary"
              />
            </Box>
          </div>
          <div className="pt-10 px-8">
            <Box sx={{ display: "flex", alignItems: "flex-end" }}>
              <KeyIcon sx={{ color: "", mr: 1, my: 0.5 }} />
              <TextField
                name="password"
                id="password"
                label="Password"
                type="password"
                required
                variant="standard"
                fullWidth
                color="secondary"
              />
            </Box>
          </div>

          <div >
            <Link to="/feed">
            <Button
            sx={{ height: "3rem", width: "22rem", mt: "3.5rem", ml: "5rem" }}
            variant="contained"
            color="secondary"
            type="submit"
          >
            SIGN IN
          </Button>
            </Link>
          
          </div>
        </Paper>
      </Grid>
    </form>
  );
}
