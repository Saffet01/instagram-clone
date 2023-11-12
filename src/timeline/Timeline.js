import React from "react";
import "./Timeline.css";
import Suggestions from "./Suggestions.js";
import Post from "./posts/Post.js";
import Stories from "./stories/Stories.js";
function Timeline() {
  return (
    <div className="timeline">
      <div className="timeline__left">
        <div className="timeline__stories">
          <Stories />
        </div>

        <div className="timeline__posts">
          <Post />
        </div>
      </div>

      <div className="timeline__right">
        <Suggestions />
      </div>
    </div>
  );
}

export default Timeline;
