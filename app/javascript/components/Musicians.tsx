import React, { useState } from "react";
import '../../assets/stylesheets/application.css' 
import { CompactTable } from "@table-library/react-table-library/compact";
import { useTheme } from "@table-library/react-table-library/theme";
import { getTheme } from "@table-library/react-table-library/baseline";
import { useSort } from "@table-library/react-table-library/sort";
import CustomNavbar from "./Navbar";
import { Button, Offcanvas } from "react-bootstrap";
import ArtistForm from "./ArtistForm";
import FavoriteButton from "./FavoriteButton";


const Musicians = ({ artists, user }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  let data = { nodes: artists };

  const theme = useTheme(getTheme());

  const sort = useSort(
    data,
    {
      onChange: onSortChange,
    },
    {
      sortFns: {
        MUSICIANS: (array) => array.sort((a, b) => a.name.localeCompare(b.name)),
        GENRE: (array) => array.sort((a, b) => a.genre.localeCompare(b.genre)),
      },
    }
  );

  function onSortChange(action, state) {
    console.log(action, state);
  }

  const [search, setSearch] = React.useState("");

  const handleSearch = (event) => {
    setSearch(event.target.value);
  };

  data = {
    nodes: data.nodes.filter((item) => {
      const searchString = [item.name, item.genre].join(",")
      return searchString.toLowerCase().includes(search.toLowerCase())
    }),
  };
  
  const COLUMNS = [
    { label: <h3 style={{color: 'white'}}>Musicians</h3>, 
      renderCell: (item) => <>
      <FavoriteButton type={'musician'} id={item.id} currentUserId={user.userId} favorites={item.favorited_by}/>
      <a href={`/artists/${item.id}`} style={{color: 'white'}}>{item.name}</a>
      </>,
      sort: { sortKey: 'MUSICIANS' },
    },
    { label: <h3 style={{color: 'white'}}>Genre</h3>, 
      renderCell: (item) => item.genre,
      sort: { sortKey: 'GENRE' },
    }
  ];

  const VIRTUALIZED_OPTIONS = {
    rowHeight: (_item, _index) => 33,
  };

  return (
    <>
      <CustomNavbar user={user} />
      <h2
        style={{textAlign: 'center', position: 'sticky', top: 0,
        zIndex: 10, margin: 0, borderBottom: '1px solid #ddd',
        backgroundColor: 'rgb(1, 1, 1)', color: 'white', padding: '10px',
        marginTop: '65px'}}
      > 
          Musicians
      </h2>
      <div style={{
        marginTop: '10px', 
        width: '100%', 
        display: 'flex', 
        justifyContent: 'space-between', 
        position: 'sticky', 
        top: 65,
        zIndex: 10
        }}>
        <label htmlFor="search">
          <input id="search" placeholder="Search by Name or Genre"
          type="text" style={{ width: '150%' }} value={search}
          onChange={handleSearch} />
        </label>
        <Button variant="primary" onClick={handleShow} style={{ paddingRight: '10px'}}>
          Add Artist
        </Button>
      </div>
        <br />

        <CompactTable 
        columns={COLUMNS} 
        data={data} 
        theme={theme} 
        sort={sort} 
        />

      <br />

      <Offcanvas show={show} onHide={handleClose} 
      style={{backgroundColor: 'rgb(1, 1, 1)', color: 'white',
        width: '45%'
      }}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Add an Artist</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <ArtistForm user={user} artist={''}/>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default Musicians;