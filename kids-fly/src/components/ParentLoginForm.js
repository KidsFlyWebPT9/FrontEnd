import React from "react";
import { Form, Field, withFormik } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";

import { axiosWithAuth } from "../utils/axiosWithAuth";

const ParentLoginForm = ({ props, errors, touched, values, status }) => {

  // const {username, updateUsername} = useContext(UsernameContext);

  // useEffect(() => {
  //   if(status) {
  //     updateUsername(status);
  //   };
  // }, [status]);

  return (
    <div>
      <h3>Parent Log In</h3>
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
          <button className="btn-Style" type="submit">Log In</button>

          <Link to="/registerExample">
            <button className="btn-Style">Register</button>
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
      .post("https://kidsfly1.herokuapp.com/api/auth/login", values)
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