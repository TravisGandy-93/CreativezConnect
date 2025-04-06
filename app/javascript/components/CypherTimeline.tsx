import React, { useState, useEffect, useCallback } from 'react';
import { Badge, ListGroup } from 'react-bootstrap';
import CypherPost from './CypherPost';

export interface Post {
    id: number;
    username: string;
    content: string;
    likes_count: number;
    created_at: string;
  }

const CypherTimeline = ({ posts, setPosts}) => {
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  const fetchPosts = useCallback(async (pageNumber) => {
    setLoading(true)
    const response = await fetch(`/api/v1/posts?page=${pageNumber}&limit=10`);
    const data = await response.json();
    
    if (data.posts.length === 0) {
      setHasMore(false);
    } else {
      setPosts((prevPosts) => [...prevPosts, ...data.posts]);
    }
    setLoading(false);
  }, []);

  useEffect(() => {
    if (hasMore) {
      fetchPosts(page);
    }
  }, [page, hasMore, fetchPosts])

  const loadMorePosts = () => {
    if (hasMore) {
      setPage((prevPage) => prevPage + 1);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + document.documentElement.scrollTop >=
        document.documentElement.offsetHeight - 100 && hasMore
      ) {
        loadMorePosts();
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [hasMore, loadMorePosts]);

  const handleLike = (postId) => {
    setPosts((prevPosts) =>
      prevPosts.map((post) =>
        post.id === postId ? { ...post, likes: post.likes + 1 } : post
      )
    );
  };
//virtualized table from react table library?
  return (
    <div>
      <ListGroup as="ul"
      style={{listStyleType: 'none'}}>
      {posts.map(post => (
        <ListGroup.Item
        as="li"
        className="d-flex justify-content-between align-items-start"
        style={{marginBottom: '10px', padding: '10px', borderRadius: '10px', backgroundColor: 'black'}}
      >
        <CypherPost key={post.id} post={post}/>
      </ListGroup.Item>
      ))}
      {loading && <p>Loading...</p>}
      {!hasMore && <p>No more posts to load</p>}
      </ListGroup>
    </div>
  );
}

export default CypherTimeline;