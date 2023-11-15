import React from 'react'
import users from "../data/users";
import "./Comment.css"

const Comment = (props) => {

  let accountName = users[Math.floor(Math.random() * users.length)].username;

  const {comment} = props;

  return (
    <div className='commentSection'>
      <div className='accountName'><b>{accountName}</b></div>
      <div className='comment'>{comment.text}</div>
    </div>
  )
}

export default Comment