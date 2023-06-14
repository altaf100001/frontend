import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
  
      <Box
        sx={{
          height: 66,
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          pl: 5,
          pr: 5,
          boxSizing: "border-box",
          boxShadow: "0px 2px 10px rgb(0 0 0 / 5%)",
          position:"sticky",
          top:"0px",
          // border:"1px solid blue",
          zIndex:100,
          backgroundColor:"#ffffff"
        }}
      >
        <img
          style={{
            height: "46px",
            width: "220px",
          }}
          src="https://toneopeats.com/public/img/logo.png?v=1"
          alt="logo"
        />

        <Box
          sx={{
            display: ["none", "none", "flex"],
          }}
        >
          <Link
            to={"/"}
            style={{ textDecoration: "none", marginRight: "15px" }}
          >
            {" "}
            <Typography
              sx={{
                fontSize: 15,
                textDecoration: "none",
                fontWeight: 500,
                color: "#80b53b",
              }}
              variant="caption"
            >
              Meal Subscription Plans
            </Typography>
          </Link>
          <Link to={"/"} style={{ textDecoration: "none" }}>
            {" "}
            <Typography
              sx={{
                fontSize: 15,
                fontWeight: 500,
                color: "black",
                "&:hover": {
                  color: "#80b53b",
                },
              }}
              variant="caption"
            >
              Menu
            </Typography>
          </Link>
        </Box>

        <img src="https://toneopeats.com/public/img/iconmenu.svg" alt="logo" />
      </Box>
  
  );
};

export default Header;
