import React from 'react'

const User = ({ user }) => {
  return (
    <div>
      <span className='fw-bold'> name </span>
      <span> : {user.name}</span>
      <br />
      <span className='fw-bold'> phone </span>
      <span> : {user.phone}</span>
      <br />
      <span className='fw-bold'> email </span>
      <span> : {user.email}</span>
      <br />
      <span className='fw-bold'> full address </span>
      <span> : {user.address?.city}</span>
      <span> - {user.address?.street}</span>
      <span> - {user.address?.suite}</span>
      <br />
      <span className='fw-bold'>company </span>
      <span> : {user.company?.name}</span>
      <span> - {user.company?.catchPhrase}</span>
      <br />
    </div>
  )
}

export default User