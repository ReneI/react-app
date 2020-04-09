import checkIcon from './assets/check.svg';
import errorIcon from './assets/error.svg';
import React, {Fragment,useState}  from 'react';
import Header from './components/Header';
import InputText from './components/InputText';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Info from './components/Info';
import { withToastProvider } from './components/toast/withToastProvider';
import './App.css';



// Redux
import {Provider} from 'react-redux';
import store from './store';


function App(){

  const testList = [
    {
      id: 1,
      title: 'Success',
      description: 'This is a success toast component',
      backgroundColor: '#5cb85c',
      icon: checkIcon
    },
    {
      id: 2,
      title: 'Danger',
      description: 'This is an error toast component',
      backgroundColor: '#d9534f',
      icon: errorIcon
    },
];

  return(
 <Router>

   <Provider store={store}>
  <Header/>

<div className="container  w-full md:max-w-md mx-auto pt-10">

<Switch>
    <Route exact path="/" component={InputText}/>
    <Route exact path="/info" component={Info}/>

</Switch>
</div>
</Provider>
 </Router>
  );
}

export default App;