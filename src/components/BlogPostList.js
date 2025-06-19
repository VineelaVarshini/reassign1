// src/components/BlogPostList.js
import React from 'react';
import BlogPostItem from './BlogPostItem';
import styles from './BlogPostList.module.css';

function BlogPostList({ posts, onEdit, onDelete }) {
  if (!posts.length) {
    return <p>No blog posts available.</p>;
  }

  return (
    <div className={styles.blogPostList}>
      {posts.map(post => (
        <BlogPostItem
          key={post.id}
          post={post}
          onEdit={() => onEdit(post)}
          onDelete={() => onDelete(post.id)}
        />
      ))}
    </div>
  );
}

export default BlogPostList;
