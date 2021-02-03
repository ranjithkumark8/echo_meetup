import React from "react"
import { EventPage } from './EventPage';

const MainPage = () => {
    return (
        <div>
            <EventPage event="near_by"/>
            <EventPage event="career & Business"/>
            <EventPage event="Outdoors & Adventure" />      
            <EventPage event="Learning Events" />      
            <EventPage event="Health & Wellness" />      
            <EventPage event="Tech" />
        </div>
    )
}

export {MainPage}