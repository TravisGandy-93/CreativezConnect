import React from 'react'
import ReactDOM from 'react-dom/client'
import SigninForm from '../../components/SigninForm'

document.addEventListener('DOMContentLoaded', () => {
  const signinForm = document.getElementById('sign-in-form')

  if (signinForm) {
  ReactDOM.createRoot(signinForm).render(
    <SigninForm/>
  )
  } else {
    console.error('SigninForm element not found')
  }
})