 branch4
// src/components/BlogPostList.js
import React from 'react';
import BlogPostItem from './BlogPostItem';
import styles from './BlogPostList.module.css';

function BlogPostList({ posts, onEdit, onDelete }) {

import React from 'react';
import BlogPostItem from './BlogPostItem';
import styles from './BlogPostList.module.css'; // We'll create this later

function BlogPostList({ posts }) {
 main
  if (!posts.length) {
    return <p>No blog posts available.</p>;
  }

  return (
    <div className={styles.blogPostList}>
      {posts.map(post => (
        <BlogPostItem
          key={post.id}
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
        />
      ))}
    </div>
  );
}

export default BlogPostList;
