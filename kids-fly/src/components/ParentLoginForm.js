import React, { useState } from "react";

// import { connect } from "react-redux";

// import { postRegister } from "../actions";

const LoginExample = props => {
  const [credentials, setCredentials] = useState({
    username: "",
    password: ""
  });

  const handleChange = e => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value
    })
  };

  console.log("this is username: ", credentials.username);
  console.log("this is password: ", credentials.password);

  const handleLogin = e => {
    e.preventDefault();
    // props.postRegister(credentials, props.history);
    axiosWithAuth()
      .post("https://kidsfly-lambda2.herokuapp.com/api/auth/login", credentials)
      .then(res => {
        console.log("this is res in postRegister: ", res);
        localStorage.setItem("token", res.data.token);
        console.log("this is localstorage.token: ", localStorage.token);
        history.push("/private");
      })
      .catch(err => {
        localStorage.removeItem("token");
        console.log("invalid login ", err);
      });
    setCredentials({
      username: "",
      password: ""
    });
  };

  return (
    <div>
      <h3>Sign-in</h3>
        <form onSubmit={handleLogin}>
          <label>Username: </label>
          <input
            type="text"
            name="username"
            value={credentials.username}
            onChange={handleChange}
          />
          <label>Password: </label>
          <input
            type="password"
            name="password"
            value={credentials.password}
            onChange={handleChange}
          />
          <button>Log in</button>
        </form>
    </div>
  );
};

// export default LoginExample;

const mapStateToProps = state => {
  return {
    username: state.parent.username,
    password: state.parent.password
  }
};

export default connect(
  mapStateToProps,
  { postRegister }
)(LoginExample);