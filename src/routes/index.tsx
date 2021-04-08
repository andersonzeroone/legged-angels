import React from 'react';
import {Switch, Route} from 'react-router-dom';

import SignIn from '../pages/Signin';
import SignUp from '../pages/SignUp';
import Home from '../pages/Home';
import AddNewPet from '../pages/AddNewPet';
import ListPets from '../pages/ListPets';

const Routes: React.FC=()=>(
  <Switch>
    <Route path='/'exact   component={Home}/>
    <Route path='/signIn' component={SignIn}/>
    <Route path='/signup'  component={SignUp}/>
    <Route path='/addnewpet'  component={AddNewPet}/>
    <Route path='/listPets'  component={ListPets}/>

  </Switch>
)


export default Routes;
