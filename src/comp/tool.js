import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Container } from "@material-ui/core";
import FormLabel from '@material-ui/core/FormLabel';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';
import Paper from '@material-ui/core/Paper';
import Grid, { GridSpacing } from '@material-ui/core/Grid';
import { styled } from '@material-ui/core/styles';
const MyButton = styled(Button)({
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    height: 48,
    padding: '0 30px',
  });


  const MButton = styled(Button)({
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    
    //boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
  });
 const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  }));
function Tool() {
    const [spacing, setSpacing] = React.useState(2);
    const classes = useStyles();
    return (
        <div>
        <Container>
        <MyButton style={{marginTop:10}}>Jokes</MyButton>
    <div className={classes.root}>
      <Grid container spacing={3} style={{marginTop:30}}>
        <Grid item xs={12} md={3}>
          <Paper className={classes.paper} >
          <MButton>
          <h1>Before you judge a man, walk a mile in his shoes.
           After that who cares?... 
           He’s a mile away and you’ve got his shoes!
           </h1>
           </MButton>
           </Paper>
        </Grid>
        <Grid item xs={12} md={3}>
          <Paper className={classes.paper}>
          <MButton>
          <h1>
          “Men marry women with the hope they will never change.
           Women marry men with the hope they will change.
            Invariably they are both disappointed.”
            </h1>
            </MButton>
          </Paper>
        </Grid>
        <Grid item xs={12} md={3}>
          <Paper className={classes.paper}>
          <MButton>
          <h1>
          “It would be nice to spend billions on schools and roads,
           but right now that money is desperately needed for political ads.”
           </h1>
           </MButton>
          </Paper>
        </Grid>
        <Grid item xs={12} md={3}>
          <Paper className={classes.paper}>
          <MButton>
          <h1>
          “The average dog is a nicer person than the average person.”
          </h1>
          </MButton>
          </Paper>
        </Grid>
      </Grid>
      </div>
        </Container>
        </div>
    )
}

export default Tool;
