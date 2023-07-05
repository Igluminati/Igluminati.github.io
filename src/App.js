import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import HomeIcon from "@mui/icons-material/Home";
import { Slide } from "react-awesome-reveal";
import TryberImage from "./images/Tryber.jpg";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";

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
    const element = document.getElementById("scrollTarget");
    element.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <ThemeProvider theme={darkThemeTeal}>
      <AppBar position="static">
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Button variant="contained" onClick={scrollToProjects}>
            Projects
          </Button>
          <Button href="/" color="text" variant="text">
            <HomeIcon />
          </Button>
        </Box>
      </AppBar>
      <Box sx={{ flexDirection: "column", bgcolor: "background.main" }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            minHeight: "70vh",
          }}
        >
          <Typography variant="h1" color="secondary.main">
            Igli Kristo
          </Typography>
          <Typography variant="h2" color="secondary.mainGradient">
            Work In Progress
          </Typography>
        </Box>

        <Slide triggerOnce>
          <Box
            id="scrollTarget"
            sx={{
              color: "#762ac1",
              display: "flex",
              height: "50vh",
              justifyContent: "left",
              marginTop: "17rem",
            }}
          >
            <img src={TryberImage} alt="Project 1" />

            <Typography variant="body1" fontSize="128px">
              Tryber
            </Typography>
            <Typography variant="body1" fontSize="32px">
              Technology:
              <ul>
                <li>React Native</li>
                <li>Firebase (Firestore, Analytics, Authentication)</li>
                <li>VS Code</li>
                <li>Expo</li>
                <li>Figma</li>
                <li>Documentation</li>
              </ul>
              Release Date: To Be Determined (TBD)
            </Typography>
          </Box>
        </Slide>
        <Slide triggerOnce>
          <Box
            sx={{
              display: "flex",
              height: "50vh",
              justifyContent: "left",
              marginTop: "2rem",
            }}
          >
            <img src={TryberImage} alt="Project 2" />
            <Typography variant="body1" fontSize="128px">
              Tryber
            </Typography>
            <Typography variant="body1" fontSize="64px">
              Project 2 Description
            </Typography>
          </Box>
        </Slide>
        <Slide triggerOnce>
          <Card
            sx={{ maxWidth: 2000, justifyContent: "right", marginTop: "2rem" }}
          >
            <CardMedia
              sx={{ height: 140 }}
              image={TryberImage}
              title="Green Iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Lizard
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species, ranging across all continents except Antarctica.
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Share</Button>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>
        </Slide>
      </Box>
    </ThemeProvider>
  );
}
