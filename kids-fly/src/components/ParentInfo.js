import React, { useState } from 'react';
import axios from 'axios';
import { withFormik, Form, Field } from "formik";
import { Link } from 'react-router-dom';


const ParentInfo = () => {
    console.log("Submit data to show", data);
    const [parentInfo, setParentInfo] = useState({
        firstName: '',
        lastName: '',
        address: '',
        phoneNumber: '',
    });

    return (
        <div className="parent-info">
            <Form onSubmit>
                <label>
                    First name
                <Field
                        type="text"
                        name="firstName"
                        placeholder="First Name"
                    />
                </label>
                <label>
                    Last name
                <Field
                        type="text"
                        name="lastName"
                        placeholder="Last Name"
                    />
                </label>
                <label>
                    Address
                <Field
                        type="text"
                        name="address"
                        placeholder="Enter full address"
                    />
                </label>
                <label>
                    Phone number
                    <Field
                        type="text"
                        name="phoneNumber"
                        placeholder="Enter 10-digit phone number"
                    />
                </label>
            </Form>
            <span>Already a member? </span><Link to="/login">Sign In</Link>
        </div>
    );
};

export default withFormik({
    mapPropsToValues: () => ({
        firstName: "",
        lastName: "",
        address: "",
        phoneNumber: "",

    }),
    handleSubmit: (values, { setStatus }) => {
        axios
            .post("", values)
            .then(response => {
                console.log(response);
                setStatus(response.data);
            })
            .catch(err => console.log(err.response));
    }
})(ParentInfo);