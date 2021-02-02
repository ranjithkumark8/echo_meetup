import React from "react"
import {useDispatch, useSelector} from "react-redux"
import { eventFetch } from "../../../Redux/EventRedux/eventAction"

const EventPage = () => {
    const dispatch = useDispatch()
    
    React.useEffect(() => {
        dispatch(eventFetch())
    }, [])
    
    const data = useSelector(state => state.data)
    
    console.log(data)
    
    return (
        <div>Event</div>
    )
}

export {EventPage}