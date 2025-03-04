import React from 'react'
import { Nav, Navbar } from "react-bootstrap"
import '../../assets/stylesheets/application.css' // Import your CSS file here
import Search from '../helpers/Search'

function HomePage(props) {
  const { user } = props
  return (
    <div>
      <Navbar
      collapseOnSelect
      expand="md"
      bg="light"
      variant="light"
      className="px-4 py-8 header-navbar"
      fixed="top"
    >
      <Navbar.Brand>{user.username}'zConnect</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-na" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto align-items-end px-3">
          <Nav.Link>Home</Nav.Link>
          <Nav.Link>Cypher</Nav.Link>
        </Nav>
        <Nav className="ml-auto align-items-end px-3">
          <Search />
          <Nav.Link className="pl-4">Cart</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
      <div className="profile-page">
      <div className="header">
        <div className="profile-picture">
          {/* Placeholder for profile picture */}
          <img 
          className='profile-image'
          src="https://picturesofjesus.com/wp-content/uploads/2024/01/Black-Jesus-Shepherd.jpg"
          alt="Profile"
           />
        </div>
        <p>@{user.username}</p>
      </div>

      <section className="my-post-section">
        <h2>Post</h2>
        <textarea placeholder={'Share your thoughts.'}></textarea>
      </section>

      <section className="posts-section">
        <h2>My Cypher</h2>
        <div className="posts-list">
          <div className="post">Alice</div>
          <div className="post">Bob</div>
          <div className="post">Charlie</div>
        </div>
      </section>
      
      <section className="friends-section">
        <h2>Connections</h2>
        <div className="friends-list">
          <div className="friend">Alice</div>
          <div className="friend">Bob</div>
          <div className="friend">Charlie</div>
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
        <ul>
          <li>Artist - Song 1</li>
          <li>Artist - Song 2</li>
          <li>Artist - Song 3</li>
          {/* Add more artists as needed */}
        </ul>
      </section>
    </div>
    </div>
  )
}

export default HomePage