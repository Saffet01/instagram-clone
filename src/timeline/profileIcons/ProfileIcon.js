import React from 'react'
import './ProfileIcon.css'

function ProfileIcon(props) {


    const {iconSize, storyBorder, image} = props;

    function getRandomInt(min, max){
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max-min +1)) + min;
    }

    // the Api has 70 different images for avatar icons and this function returns a number between 0-70
    let randomId = getRandomInt(1,70);

    let profileImage = image ? image : `https://i.pravatar.cc/150?img=${randomId}`;
    // you can upload your own image if it is not exist random image will be generated.

  return (
    <div className={storyBorder ? "storyBorder" : ""}>
        <img className={`profileIcon ${iconSize}`} src={profileImage} alt="profile" />
    </div>
  )
}

export default ProfileIcon