import React from 'react';
import BlogPostItem from './BlogPostItem';
import styles from './BlogPostList.module.css'; // We'll create this later

function BlogPostList({ posts }) {
  if (!posts.length) {
    return <p>No blog posts available.</p>;
  }

  return (
    <div className={styles.blogPostList}>
      {posts.map(post => (
        <BlogPostItem
          key={post.id}
          id={post.id}
          title={post.title}
          summary={post.summary}
          date={post.date}
          url={post.url}
        />
      ))}
    </div>
  );
}

export default BlogPostList;
