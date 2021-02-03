import React from "react"
import { EventCategories } from "../../EventCategories";
import { NavBar } from "../../NavBar";
import { EventPage } from './EventPage';

const MainPage = () => {
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