import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, useHistory, useLocation } from "react-router-dom";
import { EventCategories } from "../../EventCategories";
import { NavBar } from "../../NavBar";
import { IoIosArrowDown } from 'react-icons/io';
import styles from "./Find.module.css";
import { eventFetch } from "../../../Redux/EventRedux/eventAction";
import { EventCard } from "./EventCard";


export const Find = () => {
    const location = useLocation();
    let params = new URLSearchParams(location.search);
    console.log(params.get("keyword"))
    const category = params.get("keyword");
    const dateRange = params.get("dateRange");
    const eventType = params.get("eventType");
    const history = useHistory();
    const [url, setUrl] = useState(location.pathname + location.search);
    const isLoggedin = useSelector(state => state.authReducer.isLoggedin);
    const dispatch = useDispatch();
    console.log(location.search, params, dateRange, eventType)
    // console.log(location, params)

    const temp = useSelector(state => state.eventReducer.eventData)
    const eventData = useSelector(state => state.eventReducer.eventData).filter(item => {
        console.log(item.category.toLowerCase().includes(category), category)
        return item.category.toLowerCase().includes(category.toLowerCase());
    });
    console.log(eventData, temp)
    const [filteredData, setFilteredData] = useState(eventData);
    let newData = [];

    const handleFilter = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        if (params.has(name)) {
            params.set(name, value);
            history.push(`${location.pathname}?${params}`);
        }
        else {
            history.push(`/find${location.search}&${name}=${value}`);
        }
        setUrl(location.pathname + location.search)
        // console.log(dateRange, eventType, location.search)
    }


    const handleFilterData = () => {
        if (dateRange !== null || eventType !== null) {
            if (dateRange !== null && eventType !== null) {
                if (dateRange === "This week") {
                    newData = eventData?.filter(item => (
                        eventType === "Online" ? item.is_online_event && (item.date_range === "today" || item.date_range === "tomorrow")
                            : eventType === "In person" ? !item.is_online_event && (item.date_range === "today" || item.date_range === "tomorrow")
                                : item && (item.date_range === "today" || item.date_range === "tomorrow")
                    ))
                } else if (dateRange === "Next week") {
                    newData = eventData?.filter(item => (
                        eventType === "Online" ? item.is_online_event && (item.date_range === "next_week")
                            : eventType === "In person" ? !item.is_online_event && (item.date_range === "next_week")
                                : item && (item.date_range === "next_week")
                    ))
                } else if (dateRange === "Any day") {
                    newData = eventData?.filter(item => (
                        eventType === "Online" ? item.is_online_event
                            : eventType === "In person" ? !item.is_online_event
                                : item
                    ))
                } else {
                    newData = eventData?.filter(item => (
                        eventType === "Online" ? item.is_online_event && item.date_range.toLowerCase() === dateRange.toLowerCase()
                            : eventType === "In person" ? !item.is_online_event && (item.date_range).toLowerCase() === dateRange.toLowerCase()
                                : item && (item.date_range).toLowerCase() === dateRange.toLowerCase()
                    ))
                }
            } else if (dateRange !== null) {
                newData = eventData?.filter(item => {
                    return (
                        (item.date_range).toLowerCase() === dateRange.toLowerCase()
                    )
                })
            } else if (eventType !== null) {
                newData = eventData?.filter(item => (
                    eventType === "Online" ? item.is_online_event === true : eventType === "In person" ? item.is_online_event === false :
                        item
                ))
            }
            setFilteredData(newData)
        }
    }

    const handleResetFilter = () => {
        history.push(`${location.pathname}?keyword=${category}`);
        setFilteredData(eventData);
    }

    const handleClick = (id) => {
        history.push(`/event/${id}`)
    }


    useEffect(() => {
        handleFilterData();
        console.log(url)
    }, [url])
    console.log(url)

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])


    if (!isLoggedin) {
        return <Redirect to="/login" />
    }

    return (
        <>
            <NavBar />
            <section className={styles.findContainer}>
                <div className={styles.findContainer__filters}>
                    <div>
                        <select className={styles.findContainer__filters__select} name="dateRange" id="day" onChange={handleFilter}>
                            <option value="Any day">Any day</option>
                            <option value="Today">Today</option>
                            <option value="Tomorrow">Tomorrow</option>
                            <option value="This week">This week</option>
                            <option value="Next week">Next week</option>
                        </select>
                        <IoIosArrowDown className={styles.findContainer__filters__select__arrow} />
                    </div>
                    <div>
                        <select className={styles.findContainer__filters__select} name="eventType" id="type" onChange={handleFilter}>
                            <option value="Any type">Any type</option>
                            <option value="Online">Online</option>
                            <option value="In person">In person</option>
                        </select>
                        <IoIosArrowDown className={styles.findContainer__filters__select__arrow} />
                    </div>
                    {(dateRange !== null || eventData !== null) && <p onClick={handleResetFilter}>Reset filters</p>}
                </div>
                <hr />
                <div className={styles.findContainer__eventCard__parent}>
                    {
                        filteredData.length === 0 ? <div>No events available...</div> :
                            filteredData?.map(item => (
                                <EventCard key={item.id} {...item} handleClick={handleClick} />
                            ))
                    }
                </div>
            </section>
            <EventCategories />
        </>
    )
}