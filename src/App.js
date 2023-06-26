import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Container from "@mui/material/Container";
import Text from "./components/Text";
import HomeIcon from "@mui/icons-material/Home";
import { Slide } from "react-awesome-reveal";

const DarkThemeTeal = createTheme({
  palette: {
    primary: {
      main: "#393E46",
    },
    secondary: {
      main: "#00ADB5",
    },
    background: {
      main: "#222831",
    },
    text: {
      main: "#EEEEEE",
    },
  },
});

export default function App() {
  return (
    <ThemeProvider theme={DarkThemeTeal}>
      <AppBar position="static">
        <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
          <Button href="/" color="text" variant="text">
            <HomeIcon />
          </Button>
        </Box>
      </AppBar>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          height: "100vh",
          bgcolor: "background.main",
        }}
      >
        <Text
          text="Igli Kristo"
          color="#00ADB5"
          fontSize="128px"
          fontFamily
          fontStyle
          fontWeight
          xPos
          yPos
        />
        <Text
          text="A highly dedicated and hard working Computer Science student with a strong
           interest in Software Engineering, Machine Learning and Robotics, seeking an internship
          opportunity to apply and expand my knowledge and skills in these fields. I aim to make a 
          positive impact by developing intelligent and efficient solutions through my experience in
          Software Development, Cloud Platforms and continuous learning in a versatile manner, allowing
          me to work with many individuals in related fields."
          color="#00ADB5"
          fontSize="14px"
          fontFamily
          fontStyle
          fontWeight
          xPos
          yPos="80vh"
        />
        <Text
          text="Scroll Down To View My Projects!"
          color="#762ac1"
          fontSize="14px"
          fontFamily
          fontStyle
          fontWeight
          xPos
          yPos="90vh"
        />
      </Box>
      <Slide>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            height: "50vh",
            bgcolor: "text.main",
          }}
        >
          <Text
            text="Igli Kristo"
            color="#00ADB5"
            fontSize="128px"
            fontFamily
            fontStyle
            fontWeight
            xPos
            yPos
          />
        </Box>
      </Slide>
    </ThemeProvider>
  );
}
