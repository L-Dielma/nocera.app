import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";

import Typography from "@material-ui/core/Typography";
import "./CardLists.css";

import { beerList } from "../BeerList/BeerList";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useHistory } from "react-router-dom";
import Container from "../Container/Container";

export default function Cardlist() {
  const [loading, setLoading] = useState(true);
  const matches = useMediaQuery("(max-width:448px)");

  const useStyles = makeStyles((theme) => ({
    root: {
      width: "100%",
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
    cardContainer: {
      display: "flex",
      flexDirection: matches ? "column" : "row",
    },
    cardContent: {
      backgroundColor: "#212121",
      padding: "10px",
      marginLeft: "15px",
      marginRight: "15px",
      borderBottomLeftRadius: "10px",
      borderBottomRightRadius: "10px",
      textAlign: "center",
      color: "#9e9e9e",
    },
    cardImage: {
      backgroundPosition: "initial",
      height: "240px",
      marginTop: "15px",
      marginLeft: "15px",
      marginRight: "15px",
      borderTopLeftRadius: "10px",
      borderTopRightRadius: "10px",
    },
  }));
  const classes = useStyles();

  setTimeout(() => {
    setLoading(false);
  }, 3000);

  const history = useHistory();

  // if (loading) return <LoadScreen />;
  return (
    <Container>
      <div className={classes.root}>
        {" "}
        {beerList.map((beer) => {
          return (
            <Card
              onClick={() => {
                history.push(`/detalle/${beer.estilo}`);
              }}
              className="root"
            >
              <CardActionArea>
                <CardMedia
                  className={classes.cardImage}
                  image={beer.imgUrl}
                  // title="Contemplative Reptile"
                />
                <CardContent className={classes.cardContent}>
                  <Typography gutterBottom variant="h5" component="h2">
                    {beer.estilo}
                  </Typography>
                  {/* <Typography variant="body2" color="textSecondary" component="p">
                  Lizards are a widespread group of squamate reptiles, with over
                  6,000 species, ranging across all continents except Antarctica
                </Typography> */}
                </CardContent>
              </CardActionArea>
              <CardActions>
                {/* <Button size="small" color="primary">
            comparar
          </Button>
          <Button size="small" color="primary">
            GALERIA
          </Button> */}
              </CardActions>
            </Card>
          );
        })}
      </div>
    </Container>
  );
}
