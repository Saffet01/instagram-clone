import React from "react";
import "./Suggestions.css";
import ProfileIcon from "../timeline/profileIcons/ProfileIcon";
import users from "./data/users";

function Suggestions() {
  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  let randomId = getRandomInt(1, 70);

  let usersIndex = Math.floor(Math.random() * users.length);
  let accountName = users[usersIndex].username;
  let userName = users[usersIndex].name;

  console.log("from suggestions", randomId);

  return (
    <>
      <div className="profile-section">
        <ProfileIcon iconSize="medium" userId={randomId} />
        <div className="user-account-name">
          <span className="accountName">
            <b>{accountName}</b>
          </span>
          <span className="userName">{userName}</span>
        </div>
      </div>

      <div className="suggestions-section">
        <p className="suggested-header">
          <b>Suggested for you...</b>
        </p>
        <div className="suggested-user">
          <div className="suggested-user-Info">
            <ProfileIcon iconSize="medium" userId={randomId} />
            <div className="suggested-user-account">
              <span className="accountInfo">
                <b className="suggested-account-name">
                  {users[Math.floor(Math.random() * users.length)].username}
                </b>
              </span>
              <span className="followedBy">
                Followed by{" "}
                {users[Math.floor(Math.random() * users.length)].username}
              </span>
            </div>
          </div>
          <button className="follow-btn">Follow</button>
        </div>

        <div className="suggested-user">
          <div className="suggested-user-Info">
            <ProfileIcon iconSize="medium" userId={randomId} />
            <div className="suggested-user-account">
              <span className="accountInfo">
                <b className="suggested-account-name">
                  {users[Math.floor(Math.random() * users.length)].username}
                </b>
              </span>
              <span className="followedBy">
                Followed by{" "}
                {users[Math.floor(Math.random() * users.length)].username}
              </span>
            </div>
          </div>
          <button className="follow-btn">Follow</button>
        </div>

        <div className="suggested-user">
          <div className="suggested-user-Info">
            <ProfileIcon iconSize="medium" userId={randomId} />
            <div className="suggested-user-account">
              <span className="accountInfo">
                <b className="suggested-account-name">
                  {users[Math.floor(Math.random() * users.length)].username}
                </b>
              </span>
              <span className="followedBy">
                Followed by{" "}
                {users[Math.floor(Math.random() * users.length)].username}
              </span>
            </div>
          </div>
          <button className="follow-btn">Follow</button>
        </div>

        <div className="suggested-user">
          <div className="suggested-user-Info">
            <ProfileIcon iconSize="medium" userId={randomId} />
            <div className="suggested-user-account">
              <span className="accountInfo">
                <b className="suggested-account-name">
                  {users[Math.floor(Math.random() * users.length)].username}
                </b>
              </span>
              <span className="followedBy">
                Followed by{" "}
                {users[Math.floor(Math.random() * users.length)].username}
              </span>
            </div>
          </div>
          <button className="follow-btn">Follow</button>
        </div>
      </div>
    </>
  );
}

export default Suggestions;
