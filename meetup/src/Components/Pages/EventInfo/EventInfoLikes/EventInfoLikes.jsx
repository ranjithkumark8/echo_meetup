import React , { createElement} from 'react'
import { Comment, Tooltip, Avatar } from 'antd';
import moment from 'moment';
import { DislikeOutlined, LikeOutlined, DislikeFilled, LikeFilled } from '@ant-design/icons';
import { AddEventLikes } from './AddEventLikes';
import 'antd/dist/antd.css';
import Styles from './EventInfoLikes.module.css'

const EventInfoLikes = () => {
    const [likes, setLikes] = React.useState(0);
    const [dislikes, setDislikes] = React.useState(0);
    const [action, setAction] = React.useState(null);
  
    const like = () => {
      setLikes(1);
      setDislikes(0);
      setAction('liked');
    };
  
    const dislike = () => {
      setLikes(0);
      setDislikes(1);
      setAction('disliked');
    };
  
    const actions = [
      <Tooltip key="comment-basic-like" title="Like">
        <span onClick={like}>
          {createElement(action === 'liked' ? LikeFilled : LikeOutlined)}
          <span className="comment-action">{likes}</span>
        </span>
      </Tooltip>,
      <Tooltip key="comment-basic-dislike" title="Dislike">
        <span onClick={dislike}>
          {React.createElement(action === 'disliked' ? DislikeFilled : DislikeOutlined)}
          <span className="comment-action">{dislikes}</span>
        </span>
      </Tooltip>,
      <span key="comment-basic-reply-to">Reply to</span>,
    ];
    return (
        <div className = {Styles.eventInfoLikes__container}>
            <h3 style = {{fontSize : "20px", marginTop : "20px",fontWeight : 'bold'}}>Comments</h3>
             <Comment style = {{backgroundColor : "white" , padding : "10px" , borderRadius : "8px" , marginTop : "20px",marginRight : "40%"}}
                    actions ={actions}
                    author = "Vibhore"
                    avatar ={
                    <Avatar
                    src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                    alt="author"
                    />}
                    content={
                        <p>
                        We supply a series of design principles, practical patterns and high quality design
                        resources .
                        </p>}
                    datetime={
                        <Tooltip title={moment().format('YYYY-MM-DD HH:mm:ss')}>
                        <span>{moment().fromNow()}</span>
                        </Tooltip>
                    }
            />
            <Comment style = {{backgroundColor : "white" , padding : "10px" , borderRadius : "8px" , marginTop : "20px",marginRight : "40%"}}
                    actions ={actions}
                    author = "Vibhore"
                    avatar ={
                    <Avatar
                    src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                    alt="author"
                    />}
                    content={
                        <p>
                        We supply a series of design principles, practical patterns and high quality design
                        resources .
                        </p>}
                    datetime={
                        <Tooltip title={moment().format('YYYY-MM-DD HH:mm:ss')}>
                        <span>{moment().fromNow()}</span>
                        </Tooltip>
                    }
            />
           <AddEventLikes/>
           
        </div>
    )
}

export {EventInfoLikes}
