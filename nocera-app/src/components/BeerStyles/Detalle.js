import React from "react";
import { useParams, useHistory } from "react-router-dom";
// import Contaier from "./Container";
// import Container from "./Container";
import { beerList } from "../BeerList/BeerList";
import "@fortawesome/fontawesome-free/js/all";
import { makeStyles } from "@material-ui/core/styles";
import Container from "../Container/Container";
import { List, ListItem, ListItemText, Divider } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  // iconoback: {
  //   alignItems: "center",
  // },
  root: {
    width: "100%",
  },
  image: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    borderBottomLeftRadius: "15px",
    borderBottomRightRadius: "15px",
  },
  titulo: {
    textAlign: "center",
    backgroundColor: "grey",
    paddingBottom: "6px",
    paddingTop: "5px",
    marginBottom: "0px",
  },
  caracs: {
    backgroundColor: "grey",
    borderRadius: "10px",
    padding: "6px",
    fontFamily: "roboto",
    fontWeight: "bold",
    textAlign: "center",
  },
  descripcion: {
    padding: "10px",
    fontFamily: "roboto",
    fontSize: "25px",
  },
  list: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: "#dcd1d1",
    borderRadius: "20px",
    marginBottom: "20px",
    boxShadow: "3px 2px 20px 0px rgb(0 0 0 / 75%)",
  },
  descriptionContainer: {
    display: "flex",
    justifyContent: "center",
  },
}));
const Detalle = () => {
  const { estilo } = useParams();
  const history = useHistory();

  const estiloSeleccionado = beerList.find((beer) => beer.estilo == estilo);

  const classes = useStyles();

  return (
    <>
      <Container>
        <div className={classes.root}>
          <h1 className={classes.titulo}>{estiloSeleccionado.estilo}</h1>
          <div>
            <img
              className={classes.image}
              src={estiloSeleccionado.imgUrl}
              alt={estiloSeleccionado.estilo}
            />
          </div>
          <p className={classes.descripcion}>
            {estiloSeleccionado.descripcion.charAt(0).toUpperCase() +
              estiloSeleccionado.descripcion.substr(
                1,
                estiloSeleccionado.descripcion.length - 1
              )}
          </p>
          <div className={classes.descriptionContainer}>
            <List className={classes.list}>
              <ListItem>
                <ListItemText
                  primary={estiloSeleccionado.caracteristicas[0].item}
                  secondary={estiloSeleccionado.caracteristicas[0].valor}
                />
              </ListItem>
              <Divider variant="inset" component="li" />
              <ListItem>
                <ListItemText primary="Work" secondary="Jan 7, 2014" />
              </ListItem>
              <Divider variant="inset" component="li" />
              <ListItem>
                <ListItemText primary="Work" secondary="Jan 7, 2014" />
              </ListItem>
            </List>
          </div>
          {/* <div className={classes.caracs}>
            <p>{estiloSeleccionado.caracteristicas[0]}</p>
            <p>{estiloSeleccionado.caracteristicas[1]}</p>
            <p>{estiloSeleccionado.caracteristicas[2]}</p>
          </div> */}
          {/* <span className={classes.iconoback} onClick={() => history.push("/")}>
            <i className="fas fa-chevron-circle-left"></i>
          </span> */}
        </div>
      </Container>
    </>
  );
};

export default Detalle;
