import React from 'react'
import './Story.css'
import ProfileIcon from '../profileIcons/ProfileIcon'
import users from '../data/users'

const Story = () => {

    let accountName = users[Math.floor(Math.random() * users.length)].username;

    if(accountName.length > 10){
        accountName = accountName.substring(0,8) + "...";
    }

  return (
    <div className='story'>
        <ProfileIcon iconSize="big" storyBorder={true}/>
        <span className='accountName'>{accountName}</span>
    </div>
  )
}

export default Story