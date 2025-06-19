import React, { useState, useEffect } from 'react';

function BlogPostForm({ onSubmit, post }) {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [author, setAuthor] = useState('');

  useEffect(() => {
    if (post) {
      setTitle(post.title || '');
      setContent(post.content || '');
      setAuthor(post.author || '');
    } else {
      setTitle('');
      setContent('');
      setAuthor('');
    }
  }, [post]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({
      title,
      content,
      author,
      date: new Date().toISOString()
    });
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginTop: '10px' }}>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={e => setTitle(e.target.value)}
        required
        style={{ display: 'block', width: '100%', marginBottom: '10px' }}
      />
      <textarea
        placeholder="Content"
        value={content}
        onChange={e => setContent(e.target.value)}
        required
        style={{ display: 'block', width: '100%', marginBottom: '10px' }}
      />
      <input
        type="text"
        placeholder="Author"
        value={author}
        onChange={e => setAuthor(e.target.value)}
        required
        style={{ display: 'block', width: '100%', marginBottom: '10px' }}
      />
      <button type="submit">Save Post</button>
    </form>
  );
}

export default BlogPostForm;
