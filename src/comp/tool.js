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
      <Grid container  spacing={3} style={{marginTop:30}}>
        <Grid item xs={12} md={3}>
          <Paper className={classes.paper} >
          <MButton>
          <h1>ज़रुरत से ज्यादा भगवान को याद मत किया करो क्योंकि…
              किसी दिन भगवान ने याद कर लिया तो..??
              लेने के देने पड़ जायेंगे ।😝😛😛😛
           </h1>
           </MButton>
           </Paper>
        </Grid>
        <Grid item xs={12} md={3}>
          <Paper className={classes.paper}>
          <MButton>
          <h1>
          “काम ऐसे करो कि लोग आपको….
.
.
किसी दूसरे काम के लिए बोलें ही नहीं”

😂😂😜😝😃
            </h1>
            </MButton>
          </Paper>
        </Grid>
        <Grid item xs={12} md={3}>
          <Paper className={classes.paper}>
          <MButton>
          <h1>
          आज के जमाने में सत्संग उसी संत का बढ़िया रहता है, जिसके पंडाल में गर्म पोहा, समोसा जलेबी और अदरक वाली चाय मिले।

वरना ज्ञान तो अब ऑनलाइन उपलब्ध है ।

😃
           </h1>
           </MButton>
          </Paper>
        </Grid>
        <Grid item xs={12} md={3}>
          <Paper className={classes.paper}>
          <MButton>
          <h1>
          जिस पुरुष ने आज के समय में बीवी, नौकरी और स्मार्टफोन के बीच में सामंजस्य बैठा लिया हो,

वह पुरुष नहीं महापुरुष कहलाता है 😃😃
          </h1>
          </MButton>
          </Paper>
        </Grid>
      </Grid>
      <Grid container spacing={3}>
        <Grid item xs={12} md={3}>
          <Paper className={classes.paper} >
          <MButton>
          <h1>आज सबसे बड़ी कुर्बानी वह होती है,

जब हम अपना फोन चार्जिंग से निकाल कर किसी और का फोन लगा दें ।

😃😃
           </h1>
           </MButton>
           </Paper>
        </Grid>
        <Grid item xs={12} md={3}>
          <Paper className={classes.paper}>
          <MButton>
          <h1>
          आप कितने ही अच्छे काम कर लें, लेकिन लोग उसे ही याद करते हैं,

जो उधार लेकर मरा हो ।😃😃
            </h1>
            </MButton>
          </Paper>
        </Grid>
        <Grid item xs={12} md={3}>
          <Paper className={classes.paper}>
          <MButton>
          <h1>
          आजकल माता-पिता को बस दो ही चिंताएं हैं…

इंटरनेट पर उनका बेटा क्या डाउनलोड कर रहा है….

और…

बेटी क्या अपलोड कर रही है ।

😃😃
           </h1>
           </MButton>
          </Paper>
        </Grid>
        <Grid item xs={12} md={3}>
          <Paper className={classes.paper}>
          <MButton>
          <h1>
          जंगल में चरने गया बैल, दोस्तों के साथ पार्टी में बैठा पुरुष और ब्यूटी पार्लर में गयी महिला..

जल्दी वापस नहीं आते ।।

😃😃
          </h1>
          </MButton>
          </Paper>
        </Grid>
      </Grid>















      <Grid container spacing={3}>
        <Grid item xs={12} md={3}>
          <Paper className={classes.paper} >
          <MButton>
          <h1>एक बेवकूफ पति अपनी पत्नी से कहता है

कि कभी कभी चुप 😷 भी रहा करो ।

मगर एक बुद्धिमान पति कहता है कि

तुम्हारे लब जब खामोश रहते हैं तो चेहरा बेहद हसीन लगता है

😃😃
           </h1>
           </MButton>
           </Paper>
        </Grid>
        <Grid item xs={12} md={3}>
          <Paper className={classes.paper}>
          <MButton>
          <h1>
          आदमी अपने घर में सिर्फ दो ही कारणों से खुश होता है:

जब बीवी ” नई ” हो

या

बीवी ” नहीं ” हो

😝😜
            </h1>
            </MButton>
          </Paper>
        </Grid>
        <Grid item xs={12} md={3}>
          <Paper className={classes.paper}>
          <MButton>
          <h1>
          What’s app का सबसे बड़ा फायदा क्या है ??

बहुत सारी औरतें आपस में बात करती हैं फिर भी आवाज़ ही नहीं होती

😊😊
           </h1>
           </MButton>
          </Paper>
        </Grid>
        <Grid item xs={12} md={3}>
          <Paper className={classes.paper}>
          <MButton>
          <h1>
          इतना तो बगुला भी मछली पकड़ने के लिये चोच नहीं निकालता होगा
.
.
.
.
.
.
जितना
.
.
.
.
.
.
लड़किया आजकल सेल्फी लेने के समय होठ निकालती है

😊😊
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
