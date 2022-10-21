import React, { useState, useEffect, createRef } from "react";
import {
  Card,
  CardActions,
  CardActionArea,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from "@mui/material";

import useStyles from "./styles";

const NewsCard = ({
  article: { description, publishedAt, source, title, url, urlToImage,link, image,rating ,full_link,rank,savings_percent,asin},
  activeArticle,
  i,
}) => {
  const classes = useStyles();
  const [elRefs, setElRefs] = useState([]);
  const scrollToRef = (ref) => window.scroll(0, ref.current.offsetTop - 50);

  useEffect(() => {
    window.scroll(0, 0);

    setElRefs((refs) =>
      Array(20)
        .fill()
        .map((_, j) => refs[j] || createRef())
    );
  }, []);

  useEffect(() => {
    if (i === activeArticle && elRefs[activeArticle]) {
      scrollToRef(elRefs[activeArticle]);
    }
  }, [i, activeArticle, elRefs]);

  return (
    <Card
      ref={elRefs[i]}
      className={activeArticle === i ? classes.activeCard : classes.card}
      style={{
        backgroundColor:"black",
        color:"white",
        
        
      }}
    >
      <CardActionArea href={url||link||full_link} target="_blank" style={{
            color:"white"
          }}>
        <CardMedia
          className={classes.media}
          image={
            urlToImage||image|| "https://www.industry.gov.au/sites/default/files/August%202018/image/news-placeholder-738.png"
          }
          title={title}
          style={{
            color:"white"
          }}
        />
        
          {/* <Typography variant="body2" color="textSecondary" component="h2" style={{color:"white"}}>
            {new Date(publishedAt).toDateString() }  
          </Typography>
          <Typography variant="body2" color="textSecondary" component="h2" style={{color:"white"}}>
            {source.name }
          </Typography> */}
       
        <Typography
          className={classes.title}
          gutterBottom
          variant="h5"
          component="h2"
          style={{color:"white"}}
        >
          {title}
        </Typography>
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p" style={{color:"white"}}>
            {description||asin ||rating}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions className={classes.cardActions}>
        <Button size="small" color="primary" href={url||link||full_link}>
          Learn More
        </Button>
        <Typography variant="h5" color="textSecondary" component="h2" style={{color:"white"}}>
          {i + 1}
        </Typography>

        {/* <Typography
          className={classes.title}
          gutterBottom
          variant="h5"
          component="h2"
          style={{color:"white"}}
        >
          {titles}
        </Typography> */}
      </CardActions>
      </Card>

      // <Card
      //  ref={elRefs[i]}
      //  className={activeArticle === i ? classes.activeCard : classes.card}
      //  style={{
      //   backgroundColor:"black",
      //   color:"white",
      //  } }
      // >
      
      //   <Typography
      //     className={classes.title}
      //     gutterBottom
      //     variant="h5"
      //     component="h2"
      //     style={{color:"white"}}
      //   >
      //     {titles}
      //   </Typography>

      // </Card>
  );
};

export default NewsCard;
