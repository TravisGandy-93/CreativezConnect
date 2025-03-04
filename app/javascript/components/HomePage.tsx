import React from 'react'

function HomePage(props) {
  const { user } = props
  console.log(user.username)
  return (
    <div>
      <h1>Welcome to Creativez Connect {user.username}!</h1>

    </div>
  )
}

export default HomePage