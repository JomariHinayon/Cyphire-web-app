import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

const TeamCard = ({ image, name, title, description }) => {
  return (
    <Card sx={{ maxWidth: 345, width: 350 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          sx={{ height: 300 }}
          image={image}
          alt="Project"
        />
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            sx={{ fontWeight: "bold", fontSize: "1.6rem", margin: "0" }}
          >
            {name}
          </Typography>
          <Typography
            gutterBottom
            variant="h6"
            component="div"
            sx={{
              color: "rgb(249,115,22)",
              fontWeight: "bold",
              fontSize: "1.1rem",
              marginBottom: "15px",
            }}
          >
            {title}
          </Typography>
          <Typography
            variant="p"
            color="text.secondary"
            sx={{ fontWeight: "500", fontSize: "1rem",}}
          >
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default TeamCard;
