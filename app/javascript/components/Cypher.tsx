import React, { useEffect, useState } from 'react'
import CypherForm from './CypherForm'
import CypherTimeline, { Post } from './CypherTimeline'
import CustomNavbar from './Navbar';
import '../../assets/stylesheets/application.css'

const Cypher = ({user}) => {
  const [posts, setPosts] = useState<Post[]>([]);
  
    useEffect(() => {
      fetch('/api/v1/posts')
        .then(response => response.json())
        .then(data => setPosts(data.posts));
    }, []);
  
    const addPost = post => {
      setPosts([post, ...posts]);
    };
    
  return (
    <div className="container">
      <CustomNavbar user={user} />
      <h2 
        style={{textAlign: 'center', position: 'sticky', top: 0,
        zIndex: 10, margin: 0, borderBottom: '1px solid #ddd',
        padding: '10px', backgroundColor: 'rgb(4, 4, 4)',
        marginTop: '65px', color: 'white'}}
        >
          Connectz World Cypher
      </h2>
      <section 
      className="posts-section"
      style={{position: 'relative'}}
      >
        <div style={{textAlign: 'center', marginTop: '20px'}}>
          <CypherForm addPost={addPost} userId={user.userId} username={user.username}/>
        </div>
      </section>
      <section className='posts-section'>
        <CypherTimeline posts={posts} setPosts={setPosts}/>
      </section>
    </div>
  )
}
export default Cypher