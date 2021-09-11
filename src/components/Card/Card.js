import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { connect } from "react-redux";
import { handleLikeClick } from "../../store/actions";
import FileCopyIcon from "@material-ui/icons/FileCopy";
import SnackBar from "../SnackBar/SnackBar";

import "./_card.scss";

// snack bar

const useStyles = makeStyles((theme) => ({
  /*   root: {
    maxWidth: 345,
  }, */
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    /* marginLeft: "auto", */
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  avatar: {
    backgroundColor: red[500],
  },
  title: {
    fontSize: "1.2rem",
  },
}));

const RecipeReviewCard = ({
  pictureList,
  handleLikeClick,
  date,
  author,
  description,
  image,
  title,
  cur,
}) => {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const event = new Date(date);
  console.log(event.toDateString());

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const onLikeClick = (currentCard, oldList) => {
    handleLikeClick(currentCard, oldList);
  };

  /* onClick={() => {
    navigator.clipboard.writeText(cur.url);
  }} */

  return (
    <Card className="card">
      <CardHeader
        avatar={
          <Avatar aria-label="avatar" className={classes.avatar}>
            {author ? author.charAt(0) : "?"}
          </Avatar>
        }
        title={<h2 className={classes.title}>{title}</h2>}
        subheader={event.toDateString()}
      />
      <CardMedia className={classes.media} image={image} title={title} />
      <CardContent></CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites" title="like">
          <FavoriteIcon
            onClick={() => onLikeClick(cur, pictureList)}
            style={{
              color: `${cur.liked ? "red" : "rgba(0, 0, 0, 0.54)"}`,
            }}
          />
        </IconButton>
        <IconButton aria-label="copy" title="copy">
          <SnackBar currentCard={cur} />
        </IconButton>
        <IconButton
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
          title="description"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} /* timeout="auto" */ /* unmountOnExit */>
        <CardContent>
          <Typography paragraph>
            {description}
            <br></br>
            Author: {author ? author : "unknown"}
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
};

const mapStateToProps = (state) => {
  return {
    pictureList: state.pictureList,
  };
};

export default connect(mapStateToProps, { handleLikeClick })(RecipeReviewCard);
