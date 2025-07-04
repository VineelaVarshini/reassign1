// Comment.js
import React from 'react';

const formatDate = (dateString) => {
  const options = { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' };
  return new Date(dateString).toLocaleString(undefined, options);
};

const Comment = ({ name, date, text, avatar }) => {
  return (
    <div style={{ display: 'flex', marginBottom: '15px', alignItems: 'flex-start' }}>
      {avatar && (
        <img
          src={avatar}
          alt={`${name}'s avatar`}
          style={{ width: 50, height: 50, borderRadius: '50%', marginRight: 10 }}
        />
      )}
      <div style={{ flex: 1 }}>
        <div style={{ fontWeight: 'bold' }}>{name}</div>
        <div style={{ fontSize: '0.8rem', color: '#666' }}>{formatDate(date)}</div>
        <div style={{ marginTop: 5 }}>{text}</div>
      </div>
    </div>
  );
};

export default Comment;
