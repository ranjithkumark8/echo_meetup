import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getEventCategories } from "../Redux/EventCategoriesRedux/action";
import styles from "./EventCategories.module.css";

export const EventCategories = () => {
    const eventCategories = useSelector(state => state.eventCategoriesReducer.eventCategories);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getEventCategories());
    }, [])
    return (
        <section className={styles.eventsContainer}>
            <h1>Browse events by category</h1>
            <div className={styles.eventsContainer__parentCard}>
                {
                    eventCategories?.map(item => (
                        <div key={item.id} className={styles.eventsContainer__parentCard__child}>
                            <img src={item.image} alt="avatar" />
                            <span>{item.title}</span>
                        </div>
                    ))
                }
            </div>
        </section>
    )
}