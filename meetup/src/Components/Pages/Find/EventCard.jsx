import React from "react";
import styles from "./Find.module.css";
import { BsFillCameraVideoFill, BsStar, BsStarFill } from 'react-icons/bs';
import { FiShare } from 'react-icons/fi';

export const EventCard = ({ handleClick, img, header, date, sub_heading, attendees, isStar, id, is_online_event }) => {
    return (
        <div onClick={() => handleClick(id)} className={styles.findContainer__eventCard__parent__child}>
            <div className={styles.findContainer__eventCard__parent__child__image}>
                {is_online_event && <div className={styles.findContainer__eventCard__parent__child__image__icon}><BsFillCameraVideoFill /> <span>Online event</span></div>}
                <img src={img} alt={header} />
            </div>
            <div className={styles.findContainer__eventCard__parent__child__content}>
                <p>{date}</p>
                <h3>{header}</h3>
                <p>{sub_heading}</p>
                <div className={styles.findContainer__eventCard__parent__child__content__info}>
                    <div>
                        <span>{attendees.length}</span><p>attendees</p>
                    </div>
                    <div>
                        <FiShare />
                        {isStar ? <BsStarFill style={{ marginLeft: 15 }} className={styles.star} /> : <BsStar style={{ marginLeft: 15 }} />}
                    </div>
                </div>
            </div>
        </div>
    )
}