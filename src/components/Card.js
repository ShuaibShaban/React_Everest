import React from 'react'
import '../App'
import contacts from './contacts'

const Card = (props) => {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      <div className="card">
        <p>{props.id}</p>
        <div className="top">
          <h2 className='name'>{props.name}</h2>
          <img
          className='circle-img'
            src={props.img}
            alt={props.avatar}
          />
        </div>
        <div className="bottom">
          <p className='info'>{props.tel}</p>
          <p className='info'>{props.email}</p>
        </div>
      </div>
    </div>
  )
}

export default Card
