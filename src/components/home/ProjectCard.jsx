import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

const ProjectCard = ({image, title, description}) => {
  return (
    <Card sx={{ maxWidth: 345, width: 500}}>
      <CardActionArea>
        <CardMedia
          component="img"
          width="100"
          image={image}
          alt="Project"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}

export default ProjectCard