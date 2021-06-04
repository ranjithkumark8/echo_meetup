import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { EventC1 } from '../Components/Pages/EventCreation/EventC1';
import { EventC2 } from '../Components/Pages/EventCreation/EventC2';
import { EventC3 } from '../Components/Pages/EventCreation/EventC3';
import { EventC4 } from '../Components/Pages/EventCreation/EventC4';
import { EventC5 } from '../Components/Pages/EventCreation/EventC5';
import { EventInfo } from '../Components/Pages/EventInfo/EventInfo';
import { Find } from '../Components/Pages/Find/Find';
import { LandingPage } from '../Components/Pages/LandingPage/LandingPage';
import { Login } from '../Components/Pages/Login/Login';
import { MainPage } from '../Components/Pages/MainPage/MainPage';
import { Profile } from '../Components/Pages/Profile/Profile';
import { Signup } from '../Components/Pages/SignUp/Signup';
import { SavedEvents } from '../Components/Pages/SavedEvents/SavedEvents';

export const Routes = () => {
  return (
    <Switch>
      <Route path='/' exact>
        <LandingPage />
      </Route>
      <Route path='/home' exact>
        <MainPage />
      </Route>
      <Route path='/find'>
        <Find />
      </Route>
      <Route path='/login'>
        <Login />
      </Route>
      <Route path='/register'>
        <Signup />
      </Route>
      <Route exact path='/start/location'>
        <EventC1 />
      </Route>
      <Route exact path='/start/topics'>
        <EventC2 />
      </Route>
      <Route exact path='/start/name'>
        <EventC3 />
      </Route>
      <Route exact path='/start/description'>
        <EventC4 />
      </Route>
      <Route exact path='/start/guidelines'>
        <EventC5 />
      </Route>
      <Route path='/event/:id' exact>
        <EventInfo />
      </Route>
      <Route path='/saved-events' exact>
        <SavedEvents />
      </Route>
      <Route path='/profile' exact>
        <Profile />
      </Route>
      <Route>
        <div>Error, Page Not Found</div>
      </Route>
    </Switch>
  );
};
