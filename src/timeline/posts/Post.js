import React from "react";
import "./Post.css";
import ProfileIcon from "../profileIcons/ProfileIcon";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import CardMenu from "./CardMenu";
import Comment from "./Comment";
import users from "../data/users";

function Post(props) {
  const { storyBorder, image, comments, likedByText, hours } =
    props;

  let accountName = users[Math.floor(Math.random() * users.length)].username;

  return (
    <div className="post">
      <div className="header">
        <div className="avatar-and-name">
          <ProfileIcon iconSize="medium" storyBorder={storyBorder} />
          <p className="accountName">{accountName}</p>
          <li className="time-posted">{hours}h</li>
        </div>

        <button className="more__button">
          <MoreHorizIcon />
        </button>
      </div>

      <div className="post__image" >
        <img className="postImage" src={image} alt="card content" />
      </div>

      <CardMenu />

      <div className="likedBy">
        <ProfileIcon iconSize="small" />
        <span className="likedByInfo">
          Liked by <b>{likedByText}</b> and <b>others</b>
        </span>
      </div>

      <div className="comments">
        {comments.map((comment) => {
          return (
            <Comment key={comment.id} accountName={accountName} comment={comment}/>
          )
        })}
      </div>

      <form className="addCommentSection">
        <input className="addComment" type="text" placeholder="Add a comment..." />
      </form>
    </div>
  );
}

export default Post;
