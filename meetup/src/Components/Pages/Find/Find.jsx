import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useHistory, useLocation } from "react-router-dom";
import { EventCategories } from "../../EventCategories";
import { NavBar } from "../../NavBar";
import { BsFillCameraVideoFill, BsStar, BsStarFill } from 'react-icons/bs';
import { FiShare } from 'react-icons/fi';
import styles from "./Find.module.css";


export const Find = () => {
    const location = useLocation();
    let params = new URLSearchParams(location.search);
    const category = params.get("keyword");
    const dateRange = params.get("dateRange");
    const eventType = params.get("eventType");
    const history = useHistory();
    // console.log(location.search, params, dateRange, eventType)
    // console.log(location, params)


    const eventData = useSelector(state => state.eventReducer.eventData).filter(item => {
        return item.category.toLowerCase().includes(category);
    });
    let filteredData = eventData;
    // console.log(category, eventData)

    const handleFilter = (e) => {
        // console.log(e.target.value)
        const name = e.target.name;
        const value = e.target.value;
        if (params.has(name)) {
            params.set(name, value);
            console.log(params)
            history.push(`${location.pathname}?${params}`);
        }
        else {
            history.push(`/find${location.search}&${name}=${value}`);
        }
        console.log(dateRange, eventType, location.search)
        if (dateRange !== null || eventType !== null) {
            if (dateRange !== null && eventType !== null) {
                filteredData = eventData?.filter(item => (
                    eventType === "Online" ? item.is_online_event && item.date_range.toLowerCase() === dateRange.toLowerCase()
                        : !item.is_online_event && (item.date_range).toLowerCase() === dateRange.toLowerCase()
                ))
            } else if (dateRange !== null) {
                filteredData = eventData?.filter(item => {
                    console.log((item.date_range).toLowerCase() === dateRange.toLowerCase());
                    return (
                        (item.date_range).toLowerCase() === dateRange.toLowerCase()
                    )
                })
            } else if (eventType !== null) {
                filteredData = eventData?.filter(item => (
                    item.is_online_event === eventType
                ))
            }
        }
        console.log(filteredData)
    }

    const handleResetFilter = () => {
        history.push(`${location.pathname}?keyword=${category}`);
        filteredData = eventData;
    }

    useEffect(() => {

    }, [filteredData])

    console.log(filteredData)

    return (
        <section className={styles.findContainer}>
            {/* <NavBar /> */}
            <div className={styles.findContainer__filters}>
                <select className={styles.findContainer__filters__select} name="dateRange" id="day" onChange={handleFilter}>
                    <option value="Any day">Any day</option>
                    <option value="Today">Today</option>
                    <option value="Tomorrow">Tomorrow</option>
                    <option value="This week">This week</option>
                    <option value="Next week">Next week</option>
                </select>
                <select className={styles.findContainer__filters__select} name="eventType" id="type" onChange={handleFilter}>
                    <option value="Any type">Any type</option>
                    <option value="Online">Online</option>
                    <option value="In person">In person</option>
                </select>
                {(dateRange !== null || eventData !== null) && <p onClick={handleResetFilter}>Reset filters</p>}
            </div>
            <hr />
            <div className={styles.findContainer__eventCard__parent}>
                {
                    filteredData?.map(item => {
                        // console.log(item)
                        return (
                            <div key={item.id} className={styles.findContainer__eventCard__parent__child}>
                                <div className={styles.findContainer__eventCard__parent__child__image}>
                                    {item.is_online_event && <div className={styles.findContainer__eventCard__parent__child__image__icon}><BsFillCameraVideoFill /> <span>Online event</span></div>}
                                    <img src={item.img} alt={item.header} />
                                </div>
                                <div className={styles.findContainer__eventCard__parent__child__content}>
                                    <p>{item.date}</p>
                                    <h3>{item.header}</h3>
                                    <p>{item.sub_heading}</p>
                                    <div className={styles.findContainer__eventCard__parent__child__content__info}>
                                        <div>
                                            <span>{item.attendees.length}</span><p>attendees</p>
                                        </div>
                                        <div>
                                            <FiShare />
                                            {item.isStar ? <BsStarFill className={styles.star} /> : <BsStar />}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            <EventCategories />
        </section>
    )
}