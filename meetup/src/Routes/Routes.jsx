import React from "react";
import { Route, Switch } from "react-router-dom";
import { Find } from "../Components/Pages/Find/Find";


export const Routes = () => {
    return (
        <Switch>
            <Route to="/" exact>Landing Page</Route>
            <Route to="/find/:category">
                <Find />
            </Route>
        </Switch>
    )
}