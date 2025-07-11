 branch7

 branch6
// // src/components/BlogPostList.js
// import React from 'react';
// import BlogPostItem from './BlogPostItem';
// import styles from './BlogPostList.module.css';

// function BlogPostList({ posts, onEdit, onDelete }) {
//   if (!posts.length) {
//     return <p>No blog posts available.</p>;
//   }

//   return (
//     <div className={styles.blogPostList}>
//       {posts.map(post => (
//         <BlogPostItem
//           key={post.id}
//           post={post}
//           onEdit={() => onEdit(post)}
//           onDelete={() => onDelete(post.id)}
//         />
//       ))}
//     </div>
//   );
// }

// export default BlogPostList;

// BlogPostList.js
 main
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

 branch7
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

 branch-5

 branch4
 main
// src/components/BlogPostList.js
import React from 'react';
import BlogPostItem from './BlogPostItem';
import styles from './BlogPostList.module.css';

function BlogPostList({ posts, onEdit, onDelete }) {
branch-5


import React from 'react';
import BlogPostItem from './BlogPostItem';
import styles from './BlogPostList.module.css'; // We'll create this later

function BlogPostList({ posts }) {
 main
 main
  if (!posts.length) {
    return <p>No blog posts available.</p>;
  }
 main

  return (
    <div>
      {posts.map(post => (
 branch6
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

        <BlogPostItem
          key={post.id}
branch-5
          post={post}
          onEdit={() => onEdit(post)}
          onDelete={() => onDelete(post.id)}

 branch4
          post={post}
          onEdit={() => onEdit(post)}
          onDelete={() => onDelete(post.id)}

          id={post.id}
          title={post.title}
          summary={post.summary}
          date={post.date}
          url={post.url}
 main
 main
        />
 main
      ))}
 main
    </div>
  );
};

export default BlogPostList;
