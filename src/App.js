 branch-5

branch4

branch3
main
 main
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BlogPostList from './components/BlogPostList';
import BlogPostForm from './components/BlogPostForm';
 branch-5
import Layout from './components/Layout'; // ✅ Import Layout

 main

const LOCAL_STORAGE_KEY = 'blogPosts';

function App() {
  const [posts, setPosts] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [editingPost, setEditingPost] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  // Load from localStorage or use predefined posts
  useEffect(() => {
    const savedPosts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) || [
      {
        id: '1',
        title: 'Welcome to the Blog',
        content: 'This is the first post on the blog. Stay tuned for more!',
        author: 'Admin',
        date: '2025-06-19'
      },
      {
        id: '2',
        title: 'React is Awesome',
        content: 'Let’s explore why React is a great tool for frontend development.',
        author: 'Jane Doe',
        date: '2025-06-18'
      }
    ];
    setPosts(savedPosts);
  }, []);

  // Save to localStorage when posts change
  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(posts));
  }, [posts]);

  const handleCreatePost = (newPost) => {
    if (editingPost) {
      setPosts(posts.map(post => post.id === editingPost.id ? { ...newPost, id: editingPost.id } : post));
      setEditingPost(null);
    } else {
      setPosts([...posts, { ...newPost, id: Date.now().toString() }]);
    }
    setShowForm(false);
  };

  const handleEditClick = (post) => {
    setEditingPost(post);
    setShowForm(true);
  };

  const handleDeletePost = (id) => {
    setPosts(posts.filter(post => post.id !== id));
  };

  const filteredPosts = posts.filter(post =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.author.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Router>
 branch-5
      <Routes>
        <Route
          path="/"
          element={
            <Layout> {/* ✅ This wraps your page in NavBar + Footer */}
              <div style={{ padding: '20px' }}>
                <h1>Blog Posts</h1>

                <input
                  type="text"
                  placeholder="Search by title or author..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  style={{ padding: '8px', marginBottom: '10px', width: '100%' }}
                />

                <button
                  onClick={() => {
                    setEditingPost(null);
                    setShowForm(!showForm);
                  }}
                  style={{ marginBottom: '10px' }}
                >
                  {showForm ? 'Cancel' : 'Create Post'}
                </button>

                {showForm && <BlogPostForm onSubmit={handleCreatePost} post={editingPost} />}

                <BlogPostList
                  posts={filteredPosts}
                  onEdit={handleEditClick}
                  onDelete={handleDeletePost}
                />
              </div>
            </Layout>
          }
        />
      </Routes>

      <div style={{ padding: '20px' }}>
        <h1>Blog Posts</h1>

        <input
          type="text"
          placeholder="Search by title or author..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{ padding: '8px', marginBottom: '10px', width: '100%' }}
        />

        <button
          onClick={() => {
            setEditingPost(null);
            setShowForm(!showForm);
          }}
          style={{ marginBottom: '10px' }}
        >
          {showForm ? 'Cancel' : 'Create Post'}
        </button>

        {showForm && <BlogPostForm onSubmit={handleCreatePost} post={editingPost} />}

        <Routes>
          <Route
            path="/"
            element={
              <BlogPostList
                posts={filteredPosts}
                onEdit={handleEditClick}
                onDelete={handleDeletePost}
              />
            }
          />
branch4


import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BlogPostList from './components/BlogPostList';

const samplePosts = [
  {
    id: '1',
    title: 'Getting Started with React',
    summary: 'Learn the basics of React and build your first application.',
    date: '2023-01-01',
    url: '/posts/1',
  },
  {
    id: '2',
    title: 'CSS Grid vs. Flexbox',
    summary: 'A comparison of two powerful layout systems in CSS.',
    date: '2023-02-15',
    url: '/posts/2',
  },
  {
    id: '3',
    title: 'Accessibility in Web Development',
    summary: 'Tips for making your web applications more accessible.',
    date: '2023-03-10',
    url: '/posts/3',
  },
];

function App() {
  return (
    <Router>
      <div>
        <h1>Blog Posts</h1>
        <Routes>
          <Route path="/" element={<BlogPostList posts={samplePosts} />} />
          {/* You can add more routes here for full post pages later */}
 main
 main
        </Routes>
      </div>
 main
    </Router>
  );
}

export default App;
