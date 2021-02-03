import React from "react";
import { Route, Switch } from "react-router-dom";
import { NavBar } from "../Components/NavBar";
import { Find } from "../Components/Pages/Find/Find";


export const Routes = () => {
    return (
        <Switch>
            <Route path="/" exact>Landing Page</Route>
            <Route path="/find" >
                <Find />
            </Route>
            <Route>
                <div>Error, Page Not Found</div>
            </Route>
        </Switch>
    )
}