import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { Paper } from "@mui/material";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Login from "./Login";
import Signup from "./Signup";

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{}}>
          <Typography  component={'span'}>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

export default function SigninOut() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <Paper
        className="mt-10 mx-auto h-70v w-1/3  bg-slate-400 "
        sx={{ backgroundColor: "#e0e5ec" }}
        elevation={15}
      >
        <Tabs
          value={value}
          onChange={handleChange}
          textColor="secondary"
          indicatorColor="secondary"
          aria-label="disabled tabs example"
        >
          <Tab sx={{ width: "250px" }} label="SIGN IN" />

          <Tab sx={{ width: "250px" }} label="SIGN UP" />
        </Tabs>
        <CustomTabPanel value={value} index={0}>
          <Login />
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
          <Signup />
        </CustomTabPanel>
      </Paper>
    </>
  );
}
