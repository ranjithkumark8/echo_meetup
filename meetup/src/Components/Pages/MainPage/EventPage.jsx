import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { eventFetch } from "../../../Redux/EventRedux/eventAction"
import { HealthEvents } from "./HealthPage"
import { LearningEvents } from "./LearningEvents"
import { NearbyEvents } from "./NearbyEvents"
import { NetworkEvents } from "./NetworkEvents"
import { OutdoorEvents } from "./OutdoorEvents"
import { TechEvents } from "./TechEvents"
const EventPage = (props) => {

    // console.log(props.event)
    const dispatch = useDispatch()

    React.useEffect(() => {
        dispatch(eventFetch())
    }, [])

    // const data = useSelector(state => state.eventReducer.eventData)
    // console.log(data)
    // console.log("props", props.event)
    const specificEvents = useSelector(state => state.eventReducer.eventData.filter(item => {
        return item.category === props.event
    }))
    if (props.event === "near_by") {
        // console.log(specificEvents)
        return (
            <NearbyEvents specificEvents={specificEvents} />
        )
    } else if (props.event === "career & Business") {
        // console.log(specificEvents)
        return (
            <NetworkEvents specificEvents={specificEvents} />
        )
    } else if (props.event === "Outdoors & Adventure") {
        return (
            <OutdoorEvents specificEvents={specificEvents} />
        )
    } else if (props.event === "Learning Events") {
        return (
            <LearningEvents specificEvents={specificEvents} />
        )
    } else if (props.event === "Health & Wellness") {
        return (
            <HealthEvents specificEvents={specificEvents} />
        )
    } else if (props.event === "Tech") {
        return (
            <TechEvents specificEvents={specificEvents} />
        )
    }
    else {
        return null
    }
}

export { EventPage }

