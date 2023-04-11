import React from "react";
import Sidenav from "../drawer/Sidenav";
import { Box } from "@mui/material";
// import Typewriter from "typewriter-effect";
import Typed from "react-typed";
import { useState } from "react";
import "../drawer-home/Dhome.css";

const Portalhome = () => {
  const [state] = useState({
    title: "Hi",
    title2: "Well Come TO The",
    title3: "SMB Techsolution",
  });
  return (
    <>
      <Box
        sx={{ display: "flex", flexDirection: "column", background: "black" }}
      >
        <Sidenav />

        <Box component="main" sx={{ flexGrow: 1, p: 3 }} className="home-box">
          <div className="Home">
            <h5 className="title">{state.title}</h5>
            <h4 className="title2">{state.title2}</h4>
            <h3 className="title3">{state.title3}</h3>

            <Typed
              className="typed"
              strings={[
                "We Are The Champion",
                "We Are Magnto Developer",
                "We Will Grow Your Business",
              ]}
              typeSpeed={150}
              backSpeed={100}
              loop
            />
          </div>
        </Box>
      </Box>
    </>
  );
};

export default Portalhome;
