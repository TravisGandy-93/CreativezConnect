import React from 'react'
import ReactDOM from 'react-dom/client'
import HomePage from '../../components/HomePage'

document.addEventListener('DOMContentLoaded', () => {
  const homePage = document.getElementById('home-page')

  if (homePage) {
  ReactDOM.createRoot(homePage).render(
    <HomePage
      user={JSON.parse(homePage.getAttribute("data-user") || '{}')}
      photoUploads={JSON.parse(homePage.getAttribute("data-photo-uploads") || '{}')}
      audioUploads={JSON.parse(homePage.getAttribute("data-audio-uploads") || '{}')}
      gallery_favs={JSON.parse(homePage.getAttribute("data-liked-photos") || '{}')}
    />
  )
  } else {
    console.error('Home page element not found')
  }
})
