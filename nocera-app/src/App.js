import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Cardlist from "./components/CardList/CardList";
import LoadScreen from "./components/Loadscreen/LoadScreen";
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Detalle from "./components/BeerStyles/Detalle";
import "@fortawesome/fontawesome-free/js/all";

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
  Button: {
    marginRight: theme.spacing(2),
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
    <Router>
      <ThemeProvider theme={theme}>
        <Switch>
          <Route path="/" component={Cardlist} exact />
          <Route path="/detalle/:estilo" component={Detalle} />
        </Switch>
      </ThemeProvider>
    </Router>
  );
}
