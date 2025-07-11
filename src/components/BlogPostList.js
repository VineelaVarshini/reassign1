import React, { useState } from 'react';
import CommentForm from './CommentForm';
import CommentList from './CommentList';
import SearchBar from './SearchBar';

const BlogPostList = ({ posts, onEdit, onDelete }) => {
  const [comments, setComments] = useState({});
  const [query, setQuery] = useState('');
  const [filteredPosts, setFilteredPosts] = useState(posts);

  const handleAddComment = (postId, comment) => {
    setComments((prev) => ({
      ...prev,
      [postId]: [...(prev[postId] || []), comment],
    }));
  };

  const handleSearch = (q) => {
    setQuery(q);
    const lower = q.toLowerCase();
    const filtered = posts.filter(post =>
      post.title.toLowerCase().includes(lower) ||
      post.content.toLowerCase().includes(lower)
    );
    setFilteredPosts(filtered);
  };

  return (
    <div>
      {/* Search Bar */}
      <SearchBar onSearch={handleSearch} />

      {/* Show message if no results */}
      {filteredPosts.length === 0 ? (
        <p>No posts found.</p>
      ) : (
        filteredPosts.map(post => (
          <div key={post.id} style={{ border: '1px solid #ccc', padding: 20, marginBottom: 20 }}>
            <h2>{post.title}</h2>
            <p>{post.content}</p>
            <p><strong>Author:</strong> {post.author}</p>
            <p><strong>Date:</strong> {post.date}</p>
            <button onClick={() => onEdit(post)} style={{ marginRight: 10 }}>Edit</button>
            <button onClick={() => onDelete(post.id)}>Delete</button>

            {/* Comments */}
            <div style={{ marginTop: 20 }}>
              <h3>Comments</h3>
              <CommentList comments={comments[post.id] || []} />
              <CommentForm onSubmit={(comment) => handleAddComment(post.id, comment)} />
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default BlogPostList;
