import React, {Fragment} from 'react';
import Header from './components/Header';
import InputText from './components/InputText';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Info from './components/Info';
import logo from './logo.svg';
import './App.css';



// Redux
import {Provider} from 'react-redux';
import store from './store';


function App(){
  
  return(
 <Router>
   <Provider store={store}>
  <Header/>
<div className="container">

<Switch>
    <Route exact path="/" component={InputText}/>
    <Route exact path="info" component={Info}/>

</Switch>
</div>
</Provider>
 </Router>
  );
}

export default App;
