import React from 'react'
import ReactDOM from 'react-dom/client'
import Cypher from '../../components/Cypher'

document.addEventListener('DOMContentLoaded', () => {
  const cypherPage = document.getElementById('cypher-page')

  if (cypherPage) {
  ReactDOM.createRoot(cypherPage).render(
    <Cypher
      user={JSON.parse(cypherPage.getAttribute("data-user") || '{}')}
    />
  )
  } else {
    console.error('cypher page element not found')
  }
})