import React from 'react';
import {Switch, Route} from 'react-router-dom';

import SignIn from '../pages/Signin';
import SignUp from '../pages/SignUp';
import Home from '../pages/Home';
import AddNewPet from '../pages/AddNewPet';
import ListPets from '../pages/ListPets';
import SeeDetailsPet from '../pages/SeeDetailsPet';
import LostPets from '../pages/LostPets';
import ListOngs from '../pages/ListOngs';
import ListPetsOfOng from '../pages/ListPetsOfOng';
import MyPets from '../pages/MyPets';

const Routes: React.FC=()=>(
  <Switch>
    <Route path='/'exact   component={Home}/>
    <Route path='/signIn' component={SignIn}/>
    <Route path='/signup'  component={SignUp}/>
    <Route path='/addnewpet'  component={AddNewPet}/>
    <Route path='/listPets'  component={ListPets}/>
    <Route path='/seeDetailsPet'  component={SeeDetailsPet}/>
    <Route path='/lostPet'  component={LostPets}/>
    <Route path='/listOngs'  component={ListOngs}/>
    <Route path='/listPetsOfOng'  component={ListPetsOfOng}/>
    <Route path='/MyPets'  component={MyPets}/>


  </Switch>
)


export default Routes;
