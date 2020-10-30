import React from 'react';
import './App.css';
import Tool from './comp/tool'
import Practice from './practice/practice'
import {BrowserRouter,Route,useHistory} from 'react-router-dom';
import Navbar from './comp/Navbar';
import { Button, Container, Icon, styled } from '@material-ui/core';
import Cool from './comp/1';
const MyButto = styled(Button)({
  background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
  border: 0,
  borderRadius: 3,
  boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
  color: 'white',
  height: 48,
  padding: '0 100px',
});
function Home(){
  const history=useHistory();
  return(
    <div>
      <MyButto type="submit" name="action"
      onClick={()=>history.push('/about')}  spacing={3} style={{marginTop:30}}
      >Hindi Jokes 😝😛😛
      </MyButto>
    </div>
  )
}
function Fome(){
  const history=useHistory();
  return(
    <div>
      <MyButto type="submit" name="action"
      onClick={()=>history.push('/fome')}  spacing={3} style={{marginTop:30}}
      >Pick Up Lines 😝😛😛
      </MyButto>
    </div>
  )
}
const MyButton = styled(Button)({
  background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
  border: 0,
  borderRadius: 3,
  boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
  color: 'white',
  height: 48,
  padding: '0 30px',
});

function App() {
  return (
    <BrowserRouter>
    <div className="App">
    <Container>
    <Route exact path="/">
            <Home/>
            <Fome/>
      </Route>
      <Route path="/about">
            <Tool/>
      </Route>
      <Route path="/fome">
            <Cool/>
      </Route>
    </Container>
    </div>
    </BrowserRouter>
  );
}

export default App;
