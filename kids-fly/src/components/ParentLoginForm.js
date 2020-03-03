import React from "react";
import { Form, Field, withFormik } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";

import { axiosWithAuth } from "../utils/axiosWithAuth";

// import { connect } from "react-redux";

// import { postRegister } from "../actions";

const ParentLoginForm = ({ props, errors, touched, values, status }) => {

  // const [credentials, setCredentials] = useState({
  //   username: "",
  //   password: ""
  // });

  // const handleChange = e => {
  //   setCredentials({
  //     ...credentials,
  //     [e.target.name]: e.target.value
  //   })
  // };

  // const handleLogin = e => {
  //   e.preventDefault();
  //   // props.postRegister(credentials, props.history);
  //   axiosWithAuth()
  //     .post("https://kidsfly-lambda2.herokuapp.com/api/auth/login", credentials)
  //     .then(res => {
  //       console.log("this is res in postRegister: ", res);
  //       localStorage.setItem("token", res.data.token);
  //       console.log("this is localstorage.token: ", localStorage.token);
  //       props.history.push("/dashboard");
  //     })
  //     .catch(err => {
  //       localStorage.removeItem("token");
  //       console.log("invalid login ", err);
  //     });
  //   setCredentials({
  //     username: "",
  //     password: ""
  //   });
  // };

  return (
    <div>
      <h3>Sign-In</h3>
      <Form className="form-styled">
        
        <div className="field-container">
          <label htmlFor="username">Username: 
            <Field className="field-styled"
              id="username"
              type="text"
              name="username"
              // placeholder=""
            />
          </label>
        </div>

        <div className="field-container">
          <label htmlFor="password">Password: 
            <Field className="field-styled"
              id="password"
              type="password"
              name="password"
              // placeholder=""
            />
          </label>
        </div>

        <div className="btn-container">
          {/* SubButton = <button> */}
          <button className="btn-Style" type="submit">Log-In</button>

          <Link exact to="/dashboard">
            <button className="btn-Style">Return</button>
          </Link>
        </div>

      </Form>
      
        {/* <form onSubmit={handleLogin}>
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
        </form> */}
    </div>
  );
};

const FormikParentLoginForm = withFormik({
  mapPropsToValues(props) {
    return {
      username: props.username || "",
      password: props.password || "",
    };
  },

  validationSchema: Yup.object().shape({
    username: Yup.string().required("Enter a username")
  }),

  handleSubmit(values, {setStatus, resetForm, props}) {
    console.log("this is value", values);
    // this is where axios goes
    axiosWithAuth()
      .post("https://kidsfly-lambda2.herokuapp.com/api/auth/login", values)
      .then(res => {
        console.log("this is res in postRegister: ", res);
        localStorage.setItem("token", res.data.token);
        console.log("this is localstorage.token: ", localStorage.token);
        props.history.push("/dashboard");
      })
      .catch(err => {
        localStorage.removeItem("token");
        console.log("invalid login ", err);
      });
    resetForm();
  }
})(ParentLoginForm);

export default FormikParentLoginForm;
// export default ParentLoginForm;






// const mapStateToProps = state => {
//   return {
//     username: state.parent.username,
//     password: state.parent.password
//   }
// };

// export default connect(
//   mapStateToProps,
//   { postRegister }
// )(LoginExample);