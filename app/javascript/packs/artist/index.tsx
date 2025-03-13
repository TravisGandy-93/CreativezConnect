import React from 'react'
import ReactDOM from 'react-dom/client'
import Artist from '../../components/Artist'

document.addEventListener('DOMContentLoaded', () => {
  const artistPage = document.getElementById('artist-page')

  if (artistPage) {
  ReactDOM.createRoot(artistPage).render(
    <Artist
      artist={JSON.parse(artistPage.getAttribute("data-artist") || '{}')}
      user={JSON.parse(artistPage.getAttribute("data-user") || '{}')}
    />
  )
  } else {
    console.error('artist page element not found')
  }
})