import React from "react";
import Post from "./Post";
import "./Posts.css"

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
      <div className="post">
        <Post
          accountName="rafagrassetti"
          storyBorder={true}
          image="https://picsum.photos/400/600"
          comments={commentsOne}
          likedByText="dadatlacak"
          hours={12}
        />
      </div>

      <div className="post">
        <Post
          accountName="rafagrassetti"
          storyBorder={true}
          image="https://picsum.photos/400/"
          comments={commentsTwo}
          likedByText="Saffet"
          hours={17}
        />
      </div>

      <div className="post">
        <Post
          accountName="rafagrassetti"
          storyBorder={true}
          image="https://picsum.photos/600"
          comments={commentsThree}
          likedByText="İrem"
          hours={3}
        />
      </div>
    </div>
  );
};

export default Posts;
