import React from "react";
import Post from "./Post";

const Posts = () => {
  const commentsOne = [
    {
      user: "raffagrassetti",
      text: "Woah dude, this is awesome! 🔥",
      id: 1,
    },
    {
      user: "therealadamsavage",
      text: "Like!",
      id: 2,
    },
    {
      user: "mapvault",
      text: "Niceeeee!",
      id: 3,
    },
  ];

  const commentsTwo = [
    {
      user: "mapvault",
      text: "Amazing content, keep it up!",
      id: 4,
    },
  ];

  const commentsThree = [
    {
      user: "dadatlacak",
      text: "Love this!",
      id: 5,
    },
  ];

  return (
    <div className="posts">
      <Post accountName="rafagrassetti" storyBorder={true} image="https://picsum.photos/400/600" comments={commentsOne} likedByText="dadatlacak" likedByNumber={87} hours={12} />
    </div>
  );
};

export default Posts;
