import React from "react";
import "./Timeline.css";
import Suggestions from "./Suggestions.js";
import Posts from "./posts/Posts.js";
import Stories from "./stories/Stories.js";

function Timeline() {
  return (
    <div className="timeline">
      <div className="timeline__left">
        <div className="timeline__stories">
          <Stories />
        </div>

        <div className="timeline__posts">
          <Posts />
        </div>
      </div>

      <div className="timeline__right">
        <Suggestions />
      </div>
    </div>
  );
}

export default Timeline;
