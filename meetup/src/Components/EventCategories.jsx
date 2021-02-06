import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { getEventCategories } from "../Redux/EventCategoriesRedux/action";
import styles from "./EventCategories.module.css";

export const EventCategories = () => {
    const eventCategories = useSelector(state => state.eventCategoriesReducer.eventCategories);
    const dispatch = useDispatch();
    const history = useHistory();

    useEffect(() => {
        dispatch(getEventCategories());
    }, [])

    const handleClick = (keyword) => {
        history.push(`/find?keyword=${keyword}`)
    }

    return (
        <section className={styles.eventsContainer}>
            <h1>Browse events by category</h1>
            <div className={styles.eventsContainer__parentCard}>
                {
                    eventCategories?.map(item => (
                        <div onClick={() => handleClick(item.title)} key={item.id} className={styles.eventsContainer__parentCard__child}>
                            <img src={item.image} alt="avatar" />
                            <span>{item.title}</span>
                        </div>
                    ))
                }
            </div>
        </section>
    )
}