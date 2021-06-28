import React from "react";
import AppBar from "@material-ui/core/AppBar";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import { useHistory } from "react-router-dom";

function Container({ children }) {
  const history = useHistory();
  const useStyles = makeStyles((theme) => ({
    container: {
      height: "calc(100% - 57px)",
      position: "fixed",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      width: "100%",
      overflow: "auto",
    },
    header: {
      //   position: "fixed",
      //   top: 0,
      //   left: 0,
      height: 57,
      zIndex: 10,
      //flexGrow: 1,
    },
    title: {
      flexGrow: 1,
    },
    icons: {
      fontSize: "28px",
      margin: "8px",
    },
    menuButton: {
      //   marginRight: theme.spacing(2),
      marginRight: "1px",
      padding: "8px",
    },
  }));
  const classes = useStyles();

  return (
    <>
      <AppBar className={classes.header} position="static" color="primary">
        <Toolbar>
          <Typography
            variant="h6"
            className={classes.title}
            onClick={() => {
              history.push("/");
            }}
          >
            NOCERA
          </Typography>
          {/* <div className={classes.iconContainer}>
            <span className={classes.icons}>
              <i className="fab fa-whatsapp"></i>
            </span>
            <span className={classes.icons}>
              <i className="fab fa-instagram"></i>
            </span>
          </div> */}
          <IconButton
            onClick={() =>
              window.open("https://www.instagram.com/nocerabirra/", "_blank")
            }
            edge="end"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <span className={classes.icons}>
              <i className="fab fa-instagram"></i>
            </span>
          </IconButton>
          <IconButton
            onClick={() =>
              window.open("https://wa.me/5491112345678?text=¡Hola!", "_blank")
            }
            edge="end"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <span className={classes.icons}>
              <i className="fab fa-whatsapp"></i>
            </span>
          </IconButton>
        </Toolbar>
      </AppBar>{" "}
      <div className={classes.container}>{children}</div>
    </>
  );
}

export default Container;
