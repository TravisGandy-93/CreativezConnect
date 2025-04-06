import React from 'react'
import ReactDOM from 'react-dom/client'
import ProfilePage from '../../components/ProfilePage'

document.addEventListener('DOMContentLoaded', () => {
  const profilePage = document.getElementById('profile-page')

  if (profilePage) {
  ReactDOM.createRoot(profilePage).render(
    <ProfilePage
      currentUser={JSON.parse(profilePage.getAttribute("data-current-user") || '{}')}
      user={JSON.parse(profilePage.getAttribute("data-user") || '{}')}
      photoUploads={JSON.parse(profilePage.getAttribute("data-photo-uploads") || '{}')}
      audioUploads={JSON.parse(profilePage.getAttribute("data-audio-uploads") || '{}')}
      gallery_favs={JSON.parse(profilePage.getAttribute("data-liked-photos") || '{}')}
    />
  )
  } else {
    console.error('profile page element not found')
  }
})