// src/components/CommentList.js
import React from 'react';
import Comment from './Comment.js';

const CommentList = ({ comments }) => {
  return (
    <div>
      {comments.map((comment, index) => (
        <Comment
          key={index}
          name={comment.name}
          date={comment.date}
          text={comment.text}
          avatar={comment.avatar}
        />
      ))}
    </div>
  );
};

export default CommentList;
