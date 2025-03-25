import React from 'react'
import ReactDOM from 'react-dom/client'
import Photo from '../../components/Photo'

document.addEventListener('DOMContentLoaded', () => {
  const photoPage = document.getElementById('photo-show')

  if (photoPage) {
  ReactDOM.createRoot(photoPage).render(
    <Photo
      photo={JSON.parse(photoPage.getAttribute("data-photo") || '{}')}
      user={JSON.parse(photoPage.getAttribute("data-user") || '{}')}
    />
  )
  } else {
    console.error('photo page element not found')
  }
})