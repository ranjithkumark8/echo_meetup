import React, { useState } from 'react'
import 'antd/dist/antd.css';
import { useDispatch, useSelector } from 'react-redux';
import { EventComment } from './EventComment';
import { v4 as uuid } from "uuid";
import Styles from './AddEventLikes.module.css'
import { MdSend } from "react-icons/md";
import { putCommentsData } from '../../../../Redux/EventInformationRedux/action';



const EventInfoLikes = () => {
  // const [likes, setLikes] = React.useState(0);
  // const [dislikes, setDislikes] = React.useState(0);
  // const [action, setAction] = React.useState(null);
  const eventInfoData = useSelector(state => state.eventInfo.eventInfoData) || []
  const [mainComment, setMainComment] = useState("");
  const loginDetails = useSelector(state => state.authReducer.loginDetails);
  const dispatch = useDispatch();
  const comments = eventInfoData.comments;
  const [comment, setComment] = useState("");

  // console.log(eventInfoData, comments)




  const handleReply = (id) => {
    // console.log(comment, id,)

    const requiredThread = comments.filter(item => (
      item.id === id ? item : null
    ))[0].comments;

    const addingComment = [...requiredThread, { comment, id: uuid(), img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRjvS45-B5Lc1KFMb-d914IuNypar6wp-H1Q&usqp=CAU", }]

    // console.log(requiredThread, addingComment);
    const newData = comments.map(item => (
      item.id === id ? { ...item, comments: addingComment } : item
    ))

    // console.log(newData)
    dispatch(putCommentsData(eventInfoData.id, newData))
    setComment("")
  }

  const handleMainThread = () => {
    const payload = {
      id: uuid(),
      comment: mainComment,
      comments: [],
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRjvS45-B5Lc1KFMb-d914IuNypar6wp-H1Q&usqp=CAU",
    }

    dispatch(putCommentsData(eventInfoData.id, [...comments, payload]))
    setMainComment("")
  }


  return (
    <div className={Styles.eventInfo__Comments__container}>
      <h2>Comments <span>({eventInfoData?.comments?.length})</span></h2>
      <div>
        {
          eventInfoData.comments?.map(item => (
            <EventComment className={Styles.comment} key={item.id} {...item} name={loginDetails.name}>
              {
                item.comments?.map(item_2 => (
                  <EventComment className={Styles.comment} key={item_2.id} {...item_2} name={loginDetails.name} />
                ))
              }
              <textarea placeholder="Reply to this comment" cols="50" onChange={(e) => setComment(e.target.value)} />
              {/* <button }>Reply</button> */}
              <MdSend className={Styles.send_icon} onClick={() => handleReply(item.id)} />
            </EventComment>
          ))
        }
      </div>
      {/* <textarea type="text" onChange={(e) => setMainComment(e.target.value)} />
          <button onClick={handleMainThread}>COMMENT</button> */}
      <div className={Styles.addEventLikes__Container}>
        <img className={Styles.addEventLikes__attendes_image} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRjvS45-B5Lc1KFMb-d914IuNypar6wp-H1Q&usqp=CAU" alt="hoster" />
        <textarea placeholder="Add your comment" cols="100" value={mainComment} onChange={(e) => setMainComment(e.target.value)} />
        <MdSend className={Styles.send_icon} onClick={handleMainThread} />
      </div>
    </div>
  )
}

export { EventInfoLikes }
