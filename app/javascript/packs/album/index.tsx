import React from 'react'
import ReactDOM from 'react-dom/client'
import Album from '../../components/Album'

document.addEventListener('DOMContentLoaded', () => {
  const albumPage = document.getElementById('album-page')

  if (albumPage) {
  ReactDOM.createRoot(albumPage).render(
    <Album
      album={JSON.parse(albumPage.getAttribute("data-album") || '{}')}
      artist={JSON.parse(albumPage.getAttribute("data-artist") || '{}')}
      user={JSON.parse(albumPage.getAttribute("data-user") || '{}')}
    />
  )
  } else {
    console.error('album page element not found')
  }
})