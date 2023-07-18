import React from "react";
import { ThemeProvider, createTheme, useMediaQuery } from "@mui/material";
import SP_NavBar from "./SmartPhone_Size/SP_NavBar";
import S_NavBar from "./Small_Size/S_NavBar";
import D_NavBar from "./Desktop_Size/D_NavBar";

const Navigation_Bar = () => {
  const theme = createTheme();
  const ScreenSize = useMediaQuery("(max-width:1264px)");
  const SmartPhoneSize = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <ThemeProvider theme={theme}>
      {ScreenSize ? (
        SmartPhoneSize ? (
          <SP_NavBar />
        ) : (
          <S_NavBar />
        )
      ) : (
        <D_NavBar />
      )}
    </ThemeProvider>
  );
};

export default Navigation_Bar;
