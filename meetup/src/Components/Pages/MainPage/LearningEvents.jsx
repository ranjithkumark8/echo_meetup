import React from "react"
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import styles from "./eventCommon.module.css"
import { Link } from "react-router-dom"
import { FiShare, FiStar } from "react-icons/fi"
import { FaStar, FaFacebook, FaTwitter, FaLinkedin, FaCopy } from "react-icons/fa";
import Modal from "react-modal"
import { GrFormClose } from "react-icons/gr";
import { IoIosVideocam } from "react-icons/io"
import { useDispatch } from "react-redux";
import { eventFetch, favoriteEventUpdate } from "../../../Redux/EventRedux/eventAction";

const LearningEvents = ({ specificEvents }) => {
    const [isModelOpen, setIsModelOpen] = React.useState(false)
    const [copied, setCopied] = React.useState(false)
    const dispatch = useDispatch()
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
    const handleModel = (id) => {
        setIsModelOpen(!isModelOpen)
    }
    const handleModelClose = () => {
        setIsModelOpen(!isModelOpen)
        setCopied(false)
    }
    const handleModelCopy = () => {
        setCopied(true)
    }
    const handleSaved = (id, isStar) => {
        console.log(id, isStar)
        dispatch(favoriteEventUpdate(id, isStar = !isStar))
        dispatch(eventFetch())
    }
    return (
        <div style={{ margin: "auto", width: "70%" }}>
            <div className={styles.heading}>
                <h1>Learn new skills</h1>
                <Link to={`/find?keyword=near_by`} className={styles.heading_allEvents}>See all</Link>
            </div>
            <Carousel responsive={responsive} removeArrowOnDeviceType={["tablet", "mobile"]} >
                {specificEvents.map((item) => (
                    <div key={item.id} className={styles.event_card}>
                        {item.is_online_event && <div className={styles.event_card_online}><IoIosVideocam /> Online event</div>}
                        <img src={item.img} alt={item.header} />
                        <div className={styles.event_card_info}>
                            <div className={styles.event_card_date}>{item.date}</div>
                            <div className={styles.event_card_header}>{item.header}</div>
                            <div className={styles.event_card_subHeading}>{item.sub_heading}</div>
                        </div>
                        <div className={styles.attendees_info}>
                            {item.attendees.length > 0 ? <div className={styles.attendees_info_mem}>{item.attendees.length} going</div> : <div className={styles.attendees_info_mem}> </div>}
                            <div className={styles.attendees_info_icons}>
                                <FiShare className={styles.attendees_info_icons_share} onClick={() => handleModel(item.id)} />
                                {item.isStar === true ? <FaStar style={{ color: "crimson" }} className={styles.attendees_info_icons_star} onClick={() => handleSaved(item.id, item.isStar)}></FaStar> : <FiStar className={styles.attendees_info_icons_star} onClick={() => handleSaved(item.id, item.isStar)}></FiStar>}
                                {/* {item.style ? true : false} */}
                            </div>
                        </div>
                    </div>))}
            </Carousel>
            <div>
                <Modal isOpen={isModelOpen} onRequestClose={handleModelClose}
                    style={{
                        overlay: {
                            position: 'fixed',
                            width: "100%",
                            height: "100%",
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            backgroundColor: 'rgba(0, 0, 0, 0.60)'
                        },
                        content: {
                            position: 'absolute',
                            width: "450px",
                            height: "400px",
                            top: '140px',
                            left: '35%',
                            right: '0',
                            bottom: '40px',
                            border: '1px solid #ccc',
                            background: '#fff',
                            overflow: 'auto',
                            WebkitOverflowScrolling: 'touch',
                            borderRadius: '4px',
                            outline: 'none',
                            padding: '20px'
                        }
                    }}
                >
                    <GrFormClose onClick={handleModelClose} className={styles.model_close} />

                    <h1 className={styles.model_header}>Share this event</h1>
                    <p className={styles.model_socialLinks}>
                        <span><FaFacebook /></span>
                        Facebook
                    </p>

                    <p className={styles.model_socialLinks}>
                        <span><FaTwitter /></span>
                        Twitter
                    </p>
                    <p className={styles.model_socialLinks}>
                        <span>
                            <FaLinkedin />
                        </span>
                        LinkedIn
                    </p>
                    <p onClick={handleModelCopy} className={styles.model_socialLinks}>
                        <span>
                            <FaCopy />
                        </span>
                        {copied ? "Copied" : "Copy Link"}
                    </p>
                </Modal>
            </div>
        </div>
    )
}
export { LearningEvents }