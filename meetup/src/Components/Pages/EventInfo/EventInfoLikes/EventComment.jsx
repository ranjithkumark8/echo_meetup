import React from "react";
import { Comment, Tooltip, Avatar } from 'antd';
import moment from 'moment';

export const EventComment = ({ children, img, comment, name, id }) => (
    <Comment
        author={<p>{name}</p>}
        avatar={
            <Avatar
                src={img}
                alt="Han Solo"
            />
        }
        content={
            <p>
                {comment}
            </p>
        }
        datetime={
            <Tooltip key={id} title={moment().format('YYYY-MM-DD HH:mm:ss')}>
                <span>{moment().fromNow()}</span>
            </Tooltip>
        }
    >
        {children}
    </Comment>
);