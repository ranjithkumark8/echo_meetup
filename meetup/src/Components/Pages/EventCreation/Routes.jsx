import React from "react";
import { Route, Switch } from "react-router-dom";
import { EventC2 } from "./EventC2";
import { EventC1 } from "./EventC1";
import { EventC3 } from "./EventC3";
import { EventC4 } from "./EventC4";
import { EventC5 } from "./EventC5";


const Routes = () => {
    return (
      <div>
        <Switch>
          <Route exact path="/" >
            <EventC1/>
          </Route>
          <Route exact path="/eventC2">
            <EventC2/>
          </Route>
          <Route exact path="/eventC3">
            <EventC3/>
          </Route>
          <Route exact path="/eventC4">
            <EventC4 />
          </Route>
          <Route exact path="/eventC5">
            <EventC5 />
          </Route>
          <Route exact path="/login">
            
          </Route>
          <Route>
            <h1>Error 404 , not found</h1>
          </Route>
        </Switch>
      </div>
    );
  };
  export { Routes };
  