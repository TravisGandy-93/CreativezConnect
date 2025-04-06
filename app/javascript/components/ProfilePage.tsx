import React, { useState, useEffect, useRef } from 'react'
import '../../assets/stylesheets/application.css' // Import your CSS file here
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import CustomNavbar from './Navbar';
import { Col, Card, Image, Button, ListGroup } from 'react-bootstrap';
import CypherTimeline from './CypherTimeline';
import CypherPost from './CypherPost';

const ProfilePage = ({currentUser, user, photoUploads, audioUploads, gallery_favs}) => {
  const [currentTrack, setCurrentTrack] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const handlePlay = () => {
    if (audioRef.current) {
      audioRef.current.play();
      setIsPlaying(true);
    }
  };

  const handlePause = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      setIsPlaying(false);
    }
  };

  const handleTrackChange = (index: number) => {
    setCurrentTrack(index);
    setIsPlaying(true);
  };

  useEffect(() => {
    if (isPlaying && audioRef.current) {
      audioRef.current.play();
    }
  }, [currentTrack, isPlaying]);
console.log(audioUploads)
  return(
    <div>
      <CustomNavbar user={currentUser} />
      <Image
        style={{height: '10rem', width: '100%', marginTop: '65px'}}
        src="https://trippystore.com/cdn/shop/products/posters-rick-and-morty-chaos-poster-100387-17157233180725.jpg?v=1626981742&width=533"
        fluid
      />
      <div style={{display: "flex"}}>
        <Card bg='secondary' style={{ width: '18rem' }}>
          <Image src='https://images.saatchiart.com/saatchi/800065/art/4959391/4029215-HSC00002-7.jpg' roundedCircle/>
          <Card.Body>
            <Card.Title>{user.username}</Card.Title>
            <Card.Text>
              God, Family, Music, and Cyphers. <br/>
            </Card.Text>
            <strong>Connectionz:</strong> {user.connections ? user.connections.length : 0} <br/>
            <strong>Drops:</strong> {audioUploads ? audioUploads.length : 0} <br/>
            <strong>Photos:</strong> {photoUploads ? photoUploads.length : 0} <br/>
          </Card.Body>
        </Card>
        <div className="media-player">
      <audio 
        ref={audioRef}
        src={audioUploads[currentTrack]?.url}
        onEnded={() => {
          if (currentTrack < audioUploads.length - 1) {
            setCurrentTrack(currentTrack + 1);
          } else {
            setIsPlaying(false);
          }
        }}
      />
      
      <div className="controls">
        {isPlaying ? (
          <button onClick={handlePause}>Pause</button>
        ) : (
          <button onClick={handlePlay}>Play</button>
        )}
        
        <div className="track-list">
          {audioUploads.map((track, index) => (
            <div 
              key={track.id}
              className={`track ${currentTrack === index ? 'active' : ''}`}
              onClick={() => handleTrackChange(index)}
            >
              {track.title}
            </div>
          ))}
        </div>
      </div>
    </div>
        </div>
        <section 
          className="posts-section"
          style={{
            overflowY: 'scroll',
            position: 'relative',
            margin: '0',
            width: '-webkit-fill-available',
            backgroundColor: 'rgb(108 117 125)',}}
          >
            <h4 
            style={{textAlign: 'center', position: 'sticky', top: 0,
            zIndex: 10, margin: 0, borderBottom: '1px solid #ddd',
            backgroundColor: 'rgb(108 117 125)', padding: '10px'}}
            >
              {user.username}'s Cypher
            </h4>
              {(user.posts && user.posts.length > 0) && 
              user.posts.map(post => (
                      <ListGroup.Item
                      as="li"
                      className="d-flex justify-content-between align-items-start"
                      style={{marginBottom: '10px', padding: '10px', borderRadius: '10px', backgroundColor: 'black'}}
                    >
                      <CypherPost key={post.id} post={post}/>
                    </ListGroup.Item>
                    ))} 
        </section>
      
    </div>
  )
}

export default ProfilePage