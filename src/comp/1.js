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
    color: 'black',
    height: 48,
    padding: '0 30px',
  });


  const MButton = styled(Button)({
    background: 'linear-gradient(180deg, #060F19 35%, #404244 100%)',
    
    //boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    borderRadius: 20,
    border: 0,
  });
 const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.disabled,
    },
  }));
function Cool() {
    const [spacing, setSpacing] = React.useState(2);
    const classes = useStyles();
    return (
        <div className="Aaj">
        <Container>
        <MyButton style={{marginTop:10}}>Pick Up Lines</MyButton>
    <div className={classes.root}>
      <Grid container  spacing={3} style={{marginTop:30}}>
        <Grid item>
          
          <MButton>
          <h1>
          Well, here I am. What are your other two wishes?
          </h1>
          </MButton>
         
        </Grid>



        <Grid item>
          <Paper className={classes.paper}>
          <MButton>
          <h1>
          Hey, my name's Microsft. Can I crash at your place tonight?
          </h1>
          </MButton>
          </Paper>
        </Grid>



        <Grid item>
          <Paper className={classes.paper}>
          <MButton>
          <h1>
          Are you French? Because Eiffel for you.
          </h1>
          </MButton>
          </Paper>
        </Grid>


        <Grid item>
          <Paper className={classes.paper}>
          <MButton>
          <h1>
          Do you like raisins? How do you feel about a date?
          </h1>
          </MButton>
          </Paper>
        </Grid>


        <Grid item>
          <Paper className={classes.paper}>
          <MButton>
          <h1>
          There is something wrong with my cell phone. It doesn't have your number in it.
          </h1>
          </MButton>
          </Paper>
        </Grid>


        <Grid item>
          <Paper className={classes.paper}>
          <MButton>
          <h1>
          If I could rearrange the alphabet, I’d put ‘U’ and ‘I’ together.
          </h1>
          </MButton>
          </Paper>
        </Grid>



        <Grid item>
          <Paper className={classes.paper}>
          <MButton>
          <h1>
          Aside from being sexy, what do you do for a living?
          </h1>
          </MButton>
          </Paper>
        </Grid>



        <Grid item>
          <Paper className={classes.paper}>
          <MButton>
          <h1>
          I must be a snowflake, because I've fallen for you.
          </h1>
          </MButton>
          </Paper>
        </Grid>



        <Grid item>
          <Paper className={classes.paper}>
          <MButton>
          <h1>
          Are you from Tennessee? Because you're the only 10 I see!
          </h1>
          </MButton>
          </Paper>
        </Grid>




        <Grid item>
          <Paper className={classes.paper}>
          <MButton>
          <h1>
          If you were a Transformer… you’d be Optimus Fine.
          </h1>
          </MButton>
          </Paper>
        </Grid>



        <Grid item>
          <Paper className={classes.paper}>
          <MButton>
          <h1>
          Are you a parking ticket? Because you’ve got FINE written all over you.
          </h1>
          </MButton>
          </Paper>
        </Grid>



        <Grid item>
          <Paper className={classes.paper}>
          <MButton>
          <h1>
          I wish I were cross-eyed so I can see you twice.
          </h1>
          </MButton>
          </Paper>
        </Grid>



        <Grid item>
          <Paper className={classes.paper}>
          <MButton>
          <h1>
          I must be in a museum, because you truly are a work of art.
          </h1>
          </MButton>
          </Paper>
        </Grid>




        <Grid item>
          <Paper className={classes.paper}>
          <MButton>
          <h1>
          Do you believe in love at first sight—or should I walk by again?
          </h1>
          </MButton>
          </Paper>
        </Grid>




        <Grid item>
          <Paper className={classes.paper}>
          <MButton>
          <h1>
          I'm no photographer, but I can picture us together.
          </h1>
          </MButton>
          </Paper>
        </Grid>




        <Grid item>
          <Paper className={classes.paper}>
          <MButton>
          <h1>
          Feel my shirt. Know what it’s made of? Boyfriend material.
          </h1>
          </MButton>
          </Paper>
        </Grid>



        <Grid item>
          <Paper className={classes.paper}>
          <MButton>
          <h1>
          Are you related to Jean-Claude Van Damme? Because Jean-Claude Van Damme you’re sexy!
          </h1>
          </MButton>
          </Paper>
        </Grid>




        <Grid item>
          <Paper className={classes.paper}>
          <MButton>
          <h1>
          If you were a chicken, you’d be impeccable.
          </h1>
          </MButton>
          </Paper>
        </Grid>




        <Grid item>
          <Paper className={classes.paper}>
          <MButton>
          <h1>
          Did your license get suspended for driving all these guys crazy?
          </h1>
          </MButton>
          </Paper>
        </Grid>



        <Grid item>
          <Paper className={classes.paper}>
          <MButton>
          <h1>
          I’m learning about important dates in history. Wanna be one of them?
          </h1>
          </MButton>
          </Paper>
        </Grid>




        <Grid item>
          <Paper className={classes.paper}>
          <MButton>
          <h1>
          Baby, if you were words on a page, you’d be fine print.
          </h1>
          </MButton>
          </Paper>
        </Grid>




        <Grid item>
          <Paper className={classes.paper}>
          <MButton>
          <h1>
          Did you just come out of the oven? Because you’re hot.
          </h1>
          </MButton>
          </Paper>
        </Grid>




        <Grid item>
          <Paper className={classes.paper}>
          <MButton>
          <h1>
          It’s a good thing I have my library card because I am totally checking you out.
          </h1>
          </MButton>
          </Paper>
        </Grid>



        <Grid item>
          <Paper className={classes.paper}>
          <MButton>
          <h1>
          I was blinded by your beauty; I’m going to need your name and phone number for insurance purposes.
          </h1>
          </MButton>
          </Paper>
        </Grid>




        <Grid item>
          <Paper className={classes.paper}>
          <MButton>
          <h1>
          I was wondering if you had an extra heart. Because mine was just stolen.
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

export default Cool;
