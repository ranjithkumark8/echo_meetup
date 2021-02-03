import React from "react";
import { Route, Switch } from "react-router-dom";
import { Find } from "../Components/Pages/Find/Find";
import { MainPage } from "../Components/Pages/MainPage/MainPage";


export const Routes = () => {
    return (
        <Switch>
            <Route path="/" exact>Landing Page</Route>
            <Route path="/home" exact>
                <MainPage />
            </Route>
            <Route path="/find" >
                <Find />
            </Route>
            <Route>
                <div>Error, Page Not Found</div>
            </Route>
        </Switch>
    )
}