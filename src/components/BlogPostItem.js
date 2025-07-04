 branch-5

branch4
 main
import React, { useState } from 'react';
import styles from './BlogPostItem.module.css';
import DeleteButton from './DeleteButton';
import ConfirmationDialog from './ConfirmationDialog';

function BlogPostItem({ post, onEdit, onDelete }) {
  const { title, content, author, date } = post;
  const formattedDate = new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  const [showConfirm, setShowConfirm] = useState(false);

  return (
    <div className={styles.blogPostItem}>
      <h2>{title}</h2>
      <p><strong>By:</strong> {author}</p>
      <p>{content}</p>
      <p className={styles.date}>Published on {formattedDate}</p>

      <button onClick={onEdit} style={{ marginRight: '10px' }}>Edit</button>
      <DeleteButton onClick={() => setShowConfirm(true)} />

      <ConfirmationDialog
        isOpen={showConfirm}
        onClose={() => setShowConfirm(false)}
        onConfirm={() => {
          onDelete();
          setShowConfirm(false);
        }}
      />
 branch-5


import React from 'react';
import { Link } from 'react-router-dom';
import styles from './BlogPostItem.module.css'; // We'll create this later

function BlogPostItem({ id, title, summary, date, url }) {
  const formattedDate = new Date(date).toLocaleDateString('en-US', {
    year: 'numeric', month: 'long', day: 'numeric',
  });

  return (
    <div className={styles.blogPostItem}>
      <Link to={url} className={styles.title}>
        <h2>{title}</h2>
      </Link>
      <p className={styles.summary}>{summary}</p>
      <p className={styles.date}>Published on {formattedDate}</p>
 main
 main
    </div>
  );
}

export default BlogPostItem;
