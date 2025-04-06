import React, { useCallback, useState } from "react";
import '../../assets/stylesheets/application.css' 
import CustomNavbar from "./Navbar";
import { Button, Card, CloseButton, Col, Container, Modal, Offcanvas, Row } from "react-bootstrap";
import FavoriteButton from "./FavoriteButton";
import {useDropzone} from 'react-dropzone';
import { useTheme } from "@table-library/react-table-library/theme";
import { getTheme } from "@table-library/react-table-library/baseline";
import { CompactTable } from "@table-library/react-table-library/compact";

const Album = ({album, artist, user}) => {
  let data = { nodes: album.tracks };

  const theme = useTheme(getTheme());

  const COLUMNS = [
    { label: <h4 style={{color: 'white'}}>Tracks</h4>, 
      renderCell: (item) => item.title
    },
    { label: <h3 style={{color: 'white'}}>Length</h3>, 
      renderCell: (item) => item.length
    },
    { label: <h3 style={{color: 'white'}}>Genre</h3>, 
      renderCell: (item) => item.genre
    }
  ];

console.log(album)
  return(
    <>
      <CustomNavbar user={user} />
      <h2
        style={{textAlign: 'center', position: 'sticky', top: 0,
        zIndex: 10, margin: 0, borderBottom: '1px solid #ddd',
        backgroundColor: 'rgba(1, 1, 1)', color: 'white', padding: '10px',
        marginTop: '65px'}}
      > 
          {album.title} - <a href={`/artists/${artist.id}`} style={{textDecoration: 'none'}}>{artist.name}</a>
      </h2>
      <div style={{textAlign: 'center', marginTop: '20px'}}>
        <img src={album.cover} alt={album.title} style={{width: '50%', height: '50%'}}/>
      </div>
      <div style={{textAlign: 'center', marginTop: '20px', color: 'white'}}>
        <h3>Genre: {album.genre}</h3>
      </div>
      <br/>
      <CompactTable 
        columns={COLUMNS} 
        data={data} 
        theme={theme}
      />
    </>
  )
}

export default Album