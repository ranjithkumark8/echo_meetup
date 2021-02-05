import React, { createElement, useState } from 'react'
import { Comment, Tooltip, Avatar } from 'antd';
import moment from 'moment';
import { DislikeOutlined, LikeOutlined, DislikeFilled, LikeFilled } from '@ant-design/icons';
import { AddEventLikes } from './AddEventLikes';
import 'antd/dist/antd.css';
import Styles from './EventInfoLikes.module.css'
import { useSelector } from 'react-redux';
import Item from 'antd/lib/list/Item';
import { EventComment } from './EventComment';
import { v4 as uuid } from "uuid";



const temp = [
  {
    id: 1,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRjvS45-B5Lc1KFMb-d914IuNypar6wp-H1Q&usqp=CAU",
    comment: "Hello",
    comments: [{
      id: 1,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRjvS45-B5Lc1KFMb-d914IuNypar6wp-H1Q&usqp=CAU",
      comment: "Hello",
      comments: ["hii", "hii"]
    }]
  }
]


const EventInfoLikes = () => {
  const [likes, setLikes] = React.useState(0);
  const [dislikes, setDislikes] = React.useState(0);
  const [action, setAction] = React.useState(null);
  const eventInfoData = useSelector(state => state.eventInfo.eventInfoData)
  // console.log(eventInfoData)
  const [comments, setComments] = useState(temp);
  const [comment, setComment] = useState("");
  const [mainComment, setMainComment] = ("");
  const loginDetails = useSelector(state => state.authReducer.loginDetails);





  const handleReply = (id) => {
    console.log(comment, id,)
    // const newData = comments.filter(item => (
    //   item.id === id ? item : null
    // ))[0].comments.push({ comment, id: uuid() });

    const requiredThread = comments.filter(item => (
      item.id === id ? item : null
    ))[0].comments;

    const addingComment = [...requiredThread, { comment, id: uuid() }]





    console.log(newData)

    // setComments([...comments, newData]);
  }

  const handleMainThread = () => {
    console.log(mainComment, comment)
    const payload = {
      id: uuid(),
      comment: mainComment,
      comments: []
    }
    setComments([...comments, payload]);
  }

  console.log(comments)

  // if (eventInfoData !== undefined) {
  //   console.log(eventInfoData)
  // }

  // const like = () => {
  //   setLikes(1);
  //   setDislikes(0);
  //   setAction('liked');
  // };

  // const dislike = () => {
  //   setLikes(0);
  //   setDislikes(1);
  //   setAction('disliked');
  // };

  // const actions = [
  //   <Tooltip key="comment-basic-like" title="Like">
  //     <span onClick={like}>
  //       {createElement(action === 'liked' ? LikeFilled : LikeOutlined)}
  //       <span className="comment-action">{likes}</span>
  //     </span>
  //   </Tooltip>,
  //   <Tooltip key="comment-basic-dislike" title="Dislike">
  //     <span onClick={dislike}>
  //       {React.createElement(action === 'disliked' ? DislikeFilled : DislikeOutlined)}
  //       <span className="comment-action">{dislikes}</span>
  //     </span>
  //   </Tooltip>,
  //   <span key="comment-basic-reply-to">Reply to</span>,
  // ];
  return (
    // <div className={Styles.eventInfoLikes__container}>
    //   <h3 style={{ fontSize: "20px", marginTop: "20px", fontWeight: 'bold' }}>Comments({eventInfoData.comments ? eventInfoData.comments.length : 0})</h3>
    //   {eventInfoData.comments?.map(e => (
    //     <Comment key={e.id} className={Styles.comment}
    //       actions={actions}
    //       author={e.name}
    //       avatar={
    //         <Avatar
    //           src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRjvS45-B5Lc1KFMb-d914IuNypar6wp-H1Q&usqp=CAU"
    //           alt="author"
    //         />}
    //       content={
    //         <p>
    //           {e.comment}
    //         </p>}
    //       datetime={
    //         <Tooltip key={e.id} title={moment().format('YYYY-MM-DD HH:mm:ss')}>
    //           <span>{moment().fromNow()}</span>
    //         </Tooltip>
    //       }
    //     />
    //   ))}
    //   <AddEventLikes />

    // </div>
    <div>
      <div>
        {
          comments?.map(item => (
            <EventComment key={item.id} {...item}>
              {
                item.comments?.map(item_2 => (
                  <EventComment key={item_2.index + item.id} {...item_2} />
                ))
              }
              <input type="text" onChange={(e) => setComment(e.target.value)} />
              <button onClick={() => handleReply(item.id)}>COMMENT</button>
            </EventComment>
          ))
        }
      </div>
      <input type="text" onChange={(e) => setMainComment(e.target.value)} />
      <button onClick={handleMainThread}>COMMENT</button>
    </div>
  )
}

export { EventInfoLikes }
