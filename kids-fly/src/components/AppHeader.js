import React from "react";

const AppHeader = props => {
  console.log("this is userName", props.userName);
  return (
    <div className="header-nav">
      <div>Home Button</div>
      <div>
        <h1>KidsFly</h1>
        <h3>Hi, {props.userName}!</h3>
      </div>
      <div>User pic</div>
    </div>
  )
};

export default AppHeader;