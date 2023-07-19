import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import HomeIcon from "@mui/icons-material/Home";
import { Slide } from "react-awesome-reveal";
import SeptaImage from "./images/Septa.png";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import YoutubeEmbed from "./YouTubeEmbed";

const darkThemeTeal = createTheme({
  palette: {
    primary: {
      main: "#393E46",
    },
    secondary: {
      main: "#00ADB5",
      mainGradient: "linear-gradient(to right, tomato, cyan)",
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
  const scrollToProjects = () => {
    const element = document.getElementById("septaScrollTarget");
    element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <ThemeProvider theme={darkThemeTeal}>
      <AppBar position="static" sx={{ boxShadow: "none" }}>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Button variant="contained" onClick={scrollToProjects} sx={{ backgroundColor: "#00ADB5", marginRight: "1rem", borderRadius: "4px" }}>
            Projects
          </Button>
          <Button href="/" color="text" variant="text" sx={{ color: "#EEEEEE" }}>
            <HomeIcon />
          </Button>
        </Box>
      </AppBar>
      <Box sx={{ bgcolor: "#222831", minHeight: "100vh", padding: "2rem", textAlign: "center" }}>
        <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", minHeight: "70vh" }}>
          <Typography variant="h1" color="#00ADB5" sx={{ fontSize: "4rem", marginBottom: "2rem" }}>
            Igli Kristo
          </Typography>
        </Box>
        <Slide triggerOnce>
          <Box
            id="septaScrollTarget"
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              bgcolor: "#393E46",
              padding: "2rem",
              borderRadius: "4px",
              textAlign: "center",
              color: "#EEEEEE",
              marginBottom: "2rem",
              marginTop: "20rem"
            }}
          >
            <Typography variant="h2" sx={{ color: "#00ADB5", marginBottom: "1rem", fontWeight: "bold" }}>
              Septa
            </Typography>
            <img src={SeptaImage} alt="Project 1" sx={{ width: "100%", height: "auto", marginBottom: "1rem", maxWidth: "300px" }} />
            <Typography variant="body1" sx={{ color: "#EEEEEE", marginBottom: "1rem" }}>
              Technology:
            </Typography>
            <ul sx={{ listStyleType: "none", padding: 0, margin: 0 }}>
              <li>React Native</li>
              <li>Firebase (Firestore, Analytics, Authentication)</li>
              <li>VS Code</li>
              <li>Expo</li>
              <li>Figma</li>
            </ul>
            <Typography variant="body1" sx={{ color: "#EEEEEE", marginBottom: "1rem", backgroundImage: "linear-gradient(to right, #FF00FF, #00FFFF)" }}>
              Release Date: To Be Determined
            </Typography>
          </Box>
        </Slide>
        <Slide triggerOnce>
          <Box
            id="oaxacaScrollTarget"
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              bgcolor: "#393E46",
              padding: "2rem",
              borderRadius: "4px",
              textAlign: "center",
              color: "#EEEEEE",
            }}
          >
            <Typography variant="h2" sx={{ color: "#00ADB5", marginBottom: "1rem", fontWeight: "bold" }}>
              Oaxaca Restaurant Management System
            </Typography>
            <YoutubeEmbed embedId="PpJfEVGBtPg" sx={{ width: "100%", height: "auto", marginBottom: "1rem", maxWidth: "560px" }} />
            <Typography variant="body1" sx={{ color: "#EEEEEE", marginBottom: "1rem" }}>
              Technology:
            </Typography>
            <ul sx={{ listStyleType: "none", padding: 0, margin: 0 }}>
              <li>PHP</li>
              <li>Trello</li>
              <li>HTML & CSS</li>
              <li>PHPMyAdmin</li>
              <li>Figma</li>
            </ul>
            <Typography variant="body1" sx={{ color: "#EEEEEE", marginBottom: "1rem" }}>
              Project description:
            </Typography>
            <Typography variant="body1" sx={{ color: "#EEEEEE", marginBottom: "2rem" }}>
              I took on the role of Scrum Master in a team project focused on developing a restaurant management system. We successfully utilized Trello as a task management tool to assign and track project tasks, ensuring efficient project progress and timely completion.
            </Typography>
            <Typography variant="body1" sx={{ color: "#EEEEEE", marginBottom: "1rem", backgroundImage: "linear-gradient(to right, #FF00FF, #00FFFF)" }}>
              Release Date: April 2023
            </Typography>
          </Box>
        </Slide>
      </Box>
    </ThemeProvider>
  );
}
