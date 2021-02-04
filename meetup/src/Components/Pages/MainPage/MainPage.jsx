import React from "react"
import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import { EventCategories } from "../../EventCategories";
import { NavBar } from "../../NavBar";
import { EventPage } from './EventPage';

const MainPage = () => {
    const isLoggedin = useSelector(state => state.authReducer.isLoggedin);

    if (!isLoggedin) {
        return (
            <Redirect to="/login" />
        )
    }
    return (
        <div>
            <NavBar />
            <EventPage event="near_by" />
            <EventPage event="career & Business" />
            <EventPage event="Outdoors & Adventure" />
            <EventPage event="Learning Events" />
            <EventPage event="Health & Wellness" />
            <EventPage event="Tech" />
            <EventCategories />
        </div>
    )
}

export { MainPage }