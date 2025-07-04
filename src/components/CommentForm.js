// CommentForm.js
import React, { useState } from 'react';

const CommentForm = ({ onSubmit, isLoggedIn = false, userName = '' }) => {
  const [name, setName] = useState(userName);
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if ((isLoggedIn || name.trim()) && text.trim()) {
      onSubmit({
        name: isLoggedIn ? userName : name,
        text,
        date: new Date().toISOString(),
      });
      setText('');
      if (!isLoggedIn) setName('');
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginTop: '20px' }}>
      {!isLoggedIn && (
        <div style={{ marginBottom: '10px' }}>
          <label htmlFor="name">Name</label><br />
          <input
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            style={{ width: '100%', padding: '8px' }}
          />
        </div>
      )}
      <div style={{ marginBottom: '10px' }}>
        <label htmlFor="comment">Comment</label><br />
        <textarea
          id="comment"
          value={text}
          onChange={(e) => setText(e.target.value)}
          required
          rows="4"
          style={{ width: '100%', padding: '8px' }}
        ></textarea>
      </div>
      <button type="submit" style={{ padding: '8px 16px' }}>Add Comment</button>
    </form>
  );
};

export default CommentForm;
