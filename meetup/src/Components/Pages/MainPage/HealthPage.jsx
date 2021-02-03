import React from "react"
import { useSelector } from "react-redux"
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import styles from "./eventCommon.module.css"
import { Link } from "react-router-dom"
import { FiShare, FiStar } from "react-icons/fi"
import { FaStar } from "react-icons/fa";

const HealthEvents = ({ specificEvents }) => {
    // console.log(specificEvents)

    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 4
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };
    return (
        <div style={{ margin: "auto", width: "70%" }}>
            <div className={styles.heading}>
                <h1>Live mindfully</h1>
                <Link to={`/find?keyword=near_by`} className={styles.heading_allEvents}>See all</Link>
            </div>
            <Carousel responsive={responsive} removeArrowOnDeviceType={["tablet", "mobile"]} >
                {specificEvents.map((item) => (
                    <div key={item.id} className={styles.event_card}>
                        <img src={item.img} alt={item.header} />
                        <div className={styles.event_card_info}>
                            <div className={styles.event_card_date}>{item.date}</div>
                            <div className={styles.event_card_header}>{item.header}</div>
                            <div className={styles.event_card_subHeading}>{item.sub_heading}</div>
                        </div>
                        <div className={styles.attendees_info}>
                            {item.attendees.length > 0 ? <div className={styles.attendees_info_mem}>{item.attendees.length} going</div> : <div className={styles.attendees_info_mem}> </div>}
                            <div className={styles.attendees_info_icons}>
                                <FiShare className={styles.attendees_info_icons_share} />
                                {item.isStar === "true" ? <FaStar style={{ color: "tomato" }} className={styles.attendees_info_icons_star}></FaStar> : <FiStar className={styles.attendees_info_icons_star}></FiStar>}
                                {/* {item.style ? true : false} */}
                            </div>
                        </div>
                    </div>))}
            </Carousel>
        </div>
    )
}
export { HealthEvents }