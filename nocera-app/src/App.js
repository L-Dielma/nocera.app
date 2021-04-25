import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Cardlist from "./components/Cardlist/CardList";
import LoadScreen from "./components/Loadscreen/LoadScreen";
import { createMuiTheme } from "@material-ui/core/styles";
import blue from "@material-ui/core/colors/grey";
import { ThemeProvider } from "@material-ui/styles";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#212121",
      contrastText: "#9e9e9e",
    },
    secondary: {
      main: "#ff0000",
    },
  },
});

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  cardContainer: {
    display: "flex",
  },
}));

export default function App() {
  const classes = useStyles();
  const [loading, setLoading] = useState(true);

  setTimeout(() => {
    setLoading(false);
  }, 3000);

  if (loading) return <LoadScreen />;

  return (
    <ThemeProvider theme={theme}>
      <div className={classes.root}>
        <AppBar position="static" color="primary">
          <Toolbar>
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="menu"
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              Nocera Estilos
            </Typography>
            <Button color="inherit">Redes Sociales</Button>
          </Toolbar>
        </AppBar>
        <div className={classes.cardContainer}>
          <Cardlist></Cardlist>
        </div>
      </div>
      <Button color="secondary">boton</Button>
    </ThemeProvider>
  );
}
