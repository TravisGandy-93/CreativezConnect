import React from 'react'
import ReactDOM from 'react-dom/client'
import HomePage from '../../components/HomePage'

document.addEventListener('DOMContentLoaded', () => {
  const homePage = document.getElementById('home-page')

  if (homePage) {
  ReactDOM.createRoot(homePage).render(
    <HomePage
      user={JSON.parse(homePage.getAttribute("data-user") || '{}')}
    />
  )
  } else {
    console.error('Home page element not found')
  }
})
