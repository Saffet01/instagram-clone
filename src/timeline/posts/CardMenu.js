import React from "react";
import "./CardMenu.css"
import FavoriteIcon from "@mui/icons-material/Favorite";
import ModeCommentIcon from '@mui/icons-material/ModeComment';
import SendIcon from '@mui/icons-material/Send';
import BookmarkIcon from '@mui/icons-material/Bookmark';

const CardMenu = () => {
  return (
    <div className="menu">
      <div className="like-comment-forward">
        <div className="favoriteIcon menu-icon"><FavoriteIcon /></div>
        <div className="modeCommentIcon menu-icon"><ModeCommentIcon /></div>
        <div className="sendIcon menu-icon"><SendIcon /></div>
      </div>
      <button className="saveButton"><BookmarkIcon /></button>
    </div>
  );
};

export default CardMenu;
