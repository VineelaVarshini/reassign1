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
import React, { useState } from 'react';
import CommentForm from './CommentForm';
import CommentList from './CommentList';

const BlogPostList = ({ posts, onEdit, onDelete }) => {
  const [comments, setComments] = useState({}); // keyed by post id

  const handleAddComment = (postId, comment) => {
    setComments((prev) => ({
      ...prev,
      [postId]: [...(prev[postId] || []), comment],
    }));
  };

  return (
    <div>
      {posts.map(post => (
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
      ))}
    </div>
  );
};

export default BlogPostList;
