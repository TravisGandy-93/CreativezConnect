import React, { useState, useEffect } from 'react'
import '../../assets/stylesheets/application.css' // Import your CSS file here
import CypherForm from "./CypherForm";
import CypherTimeline, { Post } from "./CypherTimeline";
import CustomNavbar from './Navbar';

function HomePage(props) {
  const { user } = props
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
      style={{height: '30vh', overflowY: 'scroll', position: 'relative'}}
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

      <section className="photos-section">
        <h2>Visual Uploads</h2>
        <div className="photos-list">
          {/* Placeholders for photos and videos */}
          <img className='home-pic' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvxaW-JDDU5v_f19c7NL37FPgfcV3RgTYTYA&s" alt="Photo 1" />
          <img className='home-pic' src="https://images-prod.anothermag.com/640/azure/another-prod/430/0/430197.jpg" alt="Photo 2" />
          <img className='home-pic' src="https://i.scdn.co/image/ab6761610000517476f10e0b8184a497e246b8b8" alt="Photo 3" />
          {/* Add more photos/videos as needed */}
        </div>
        <h2>Gallery Favorites</h2>
        <div className="photos-list">
          {/* Placeholders for photos and videos */}
          <img className='home-pic' src="https://sleeklens.com/wp-content/uploads/bfi_thumb/pexels-photo-1705094-6ohfqqn8c4v5jni4l21eqo40roxrpq0t9o5fs1u6d2d.jpeg" alt="Photo 1" />
          <img className='home-pic' src="https://blog.silverlight.store/wp-content/uploads/2023/11/jasper-boer-1fUu0dratoM-unsplash-scaled-1.jpg" alt="Photo 2" />
          <img className='home-pic' src="https://neilleifer.com/cdn/shop/products/1001_1200x.jpg?v=1658842638" alt="Photo 3" />
          {/* Add more photos/videos as needed */}
        </div>
      </section>

      <section className="music-section">
        <h2>Audio Uploads</h2>
        <ul>
          <li>Song 1</li>
          <li>Song 2</li>
          <li>Song 3</li>
          {/* Add more songs/albums as needed */}
        </ul>
        <h2>My Favorite Artists</h2>
        { user.favoriteArtists.map((artist) => (
        <ul>
          <li>
            <h4>
              <a href={`/artists/${artist.id}`} style={{color: 'black', textUnderlinePosition: 'under'}}>
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
