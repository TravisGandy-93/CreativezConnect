import React from 'react'
import ReactDOM from 'react-dom/client'
import Cinematographers from '../../components/Cinematographers'

document.addEventListener('DOMContentLoaded', () => {
  const artistsPage = document.getElementById('artists-page')

  if (artistsPage) {
  ReactDOM.createRoot(artistsPage).render(
    <Cinematographers
      artists={JSON.parse(artistsPage.getAttribute("data-artists") || '{}')}
      user={JSON.parse(artistsPage.getAttribute("data-user") || '{}')}
    />
  )
  } else {
    console.error('artists page element not found')
  }
})