import React from "react";
import { Route, Switch } from "react-router-dom";
import { NavBar } from "../Components/NavBar";
import { EventC2 } from "../Components/Pages/EventCreation/EventC2";
import { EventC3 } from "../Components/Pages/EventCreation/EventC3";
import { EventC4 } from "../Components/Pages/EventCreation/EventC4";
import { EventC5 } from "../Components/Pages/EventCreation/EventC5";
import { Find } from "../Components/Pages/Find/Find";


export const Routes = () => {
    return (
        <Switch>
            <Route path="/" exact>Landing Page</Route>
            <Route path="/find" >
                <Find />
            </Route>
            {/* <Route exact path="/" >
            <EventC1/>
          </Route> */}
          <Route exact path="/eventC2">
            <EventC2 />
          </Route>
          <Route exact path="/eventC3">
            <EventC3 />
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
                <div>Error, Page Not Found</div>
            </Route>

        </Switch>
    )
}