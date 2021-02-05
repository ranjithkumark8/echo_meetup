import React from "react";
import { Comment, Tooltip, Avatar } from 'antd';

export const EventComment = ({ children, img, comment }) => (
    <Comment
        author={<p>Han Solo</p>}
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
    >
        {children}
    </Comment>
);