import React from 'react'
import ReactDOM from 'react-dom/client'
import PhotoGallery from '../../components/PhotoGallery'

document.addEventListener('DOMContentLoaded', () => {
  const photosPage = document.getElementById('photos-page')

  if (photosPage) {
  ReactDOM.createRoot(photosPage).render(
    <PhotoGallery
      user={JSON.parse(photosPage.getAttribute("data-user") || '{}')}
      photos={JSON.parse(photosPage.getAttribute("data-photos") || '{}')}
    />
  )
  } else {
    console.error('photos page element not found')
  }
})