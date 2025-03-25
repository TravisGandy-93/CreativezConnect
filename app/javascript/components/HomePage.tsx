import React, { useState, useEffect } from 'react'
import '../../assets/stylesheets/application.css' // Import your CSS file here
import CypherForm from "./CypherForm";
import CypherTimeline, { Post } from "./CypherTimeline";
import CustomNavbar from './Navbar';
import { Col, Card } from 'react-bootstrap';

const HomePage = ({user, photoUploads, audioUploads, gallery_favs}) => {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    fetch('/api/v1/posts')
      .then(response => response.json())
      .then(data => setPosts(data.posts));
  }, []);


  const addPost = post => {
    setPosts([post, ...posts]);
  };
console.log(user)
  return (
    <div>
    <CustomNavbar user={user} />
      <div className="profile-page" style={{marginTop: '65px'}}>
      <section className="header">
        <div className="profile-picture">
          {/* Placeholder for profile picture */}
          <img 
          className='profile-image'
          src="https://picturesofjesus.com/wp-content/uploads/2024/01/Black-Jesus-Shepherd.jpg"
          alt="Profile"
          />
        </div>
        <p>@{user.username}</p>
      </section>

      <section className="my-post-section" style={{textAlign: 'center'}}>
        <h2>Mind to Masses</h2>
        <CypherForm addPost={addPost} userId={user.userId} username={user.username}/>
      </section>

      <section 
      className="posts-section"
      style={{height: '40vh', overflowY: 'scroll', position: 'relative'}}
      >
        <h2 
        style={{textAlign: 'center', position: 'sticky', top: 0,
        zIndex: 10, margin: 0, borderBottom: '1px solid #ddd',
        backgroundColor: 'rgb(128, 126, 126)', padding: '10px'}}
        >
          My Cypher
        </h2>
            <CypherTimeline posts={posts} setPosts={setPosts}/>
      </section>
      
      <section className="friends-section">
        <h2>Connections</h2>
        <div className="friends-list">
          <div className="friend">
          <img 
            className='cypher-image'
            src='https://thumbs.dreamstime.com/b/girl-sombrero-depicting-cowboy-lifestyle-45461994.jpg'
            alt='profile_pic'/>
            Alice
          </div>
          <div className="friend">
          <img 
            className='cypher-image'
            src='https://thumbs.dreamstime.com/b/girl-sombrero-depicting-cowboy-lifestyle-45461994.jpg'
            alt='profile_pic'/>
            Bob
          </div>
          <div className="friend">
          <img 
            className='cypher-image'
            src='https://thumbs.dreamstime.com/b/girl-sombrero-depicting-cowboy-lifestyle-45461994.jpg'
            alt='profile_pic'/>
            Charlie
          </div>
          {/* Add more friends as needed */}
        </div>
      </section>

      <section className="photos-section"
      style={{height: '80vh'}}>
        <h2>Visual Uploads</h2>
        <div className="photos-uploads"
        style={{width: '100%', height: '40%', display: 'flex', justifyContent: 'space-around'}}>
        { photoUploads.map((pic, idx) => (
              <Col xs key={idx} className='col-sm-3'>
                <Card bg="secondary" border="dark" style={{height: '100%'}}>
                  <Card.Img 
                    variant="top" 
                    src={pic.url} 
                    style={{height: '100%'}}
                    onClick={()=>{window.location.href = `photos/${pic.id}`}} 
                  />
                </Card>
              </Col>
            )
          )}
        </div>
        <h2>Gallery Favorites</h2>
        <div className="photos-list" 
        style={{width: '100%', height: '40%', display: 'flex', justifyContent: 'space-around'}}>
          { gallery_favs.map((pic, idx) => (
              <Col xs key={idx} className='col-sm-3'>
                <Card bg="secondary" border="dark" style={{height: '100%'}}>
                  <Card.Img 
                    variant="top" 
                    src={pic.url} 
                    style={{height: '100%'}} 
                    onClick={()=>{window.location.href = `photos/${pic.id}`}}
                  />
                </Card>
              </Col>
            )
          )}
        </div>
      </section>

      <section className="music-section">
        <h2>Audio Uploads</h2>
        <ul>
          {audioUploads.map((album) => (
            <li>
              <h4>
              <a href={`/albums/${album.id}`} style={{color: 'black', textDecoration: 'none'}}>
                  {album.title}
                </a>
              </h4>
            </li>
          ))}
        </ul>
        <h2>My Favorite Artists</h2>
        { user.favoriteArtists.slice(0, 3).map((artist) => (
        <ul>
          <li>
            <h4>
              <a href={`/artists/${artist.id}`} style={{color: 'black', textDecoration: 'none'}}>
                {artist.name}
              </a>
            </h4>
          </li>
          {/* Add more artists as needed */}
        </ul>
          )
        )}
      </section>
    </div>
    </div>
  )
}

export default HomePage
