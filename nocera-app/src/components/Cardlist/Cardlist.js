import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import "./CardLists.css";

export default function Cardlist() {
  const beerList = [
    {
      imgUrl: "../../assets/vaso.jpg",
      estilo: "Golden",
    },
    {
      imgUrl: "../../assets/vaso lleno.jpg",
      estilo: "AMERICAN IPA",
    },
    {
      imgUrl: "../../assets/vaso.jpg",
      estilo: "Golden",
    },
  ];
  return beerList.map((beer) => {
    return (
      <Card className={"root"}>
        <CardActionArea>
          <CardMedia
            className={"media"}
            image={beer.imgUrl}
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {beer.estilo}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            comparar
          </Button>
          <Button size="small" color="primary">
            GALERIA
          </Button>
        </CardActions>
      </Card>
    );
  });
}
