import React, { useState, useEffect } from 'react';
import { withFormik, Form, Field } from 'formik';



const CreateLogin = () => {

    return (
        <div className="create-acct">
            <h2>Sign in options</h2>
            <button>Create KidsFly account</button>
            <h3>Already have an account? <button>Sign in</button></h3>
            <br />
            <Form>
                <Field type="text" name="email" placeholder="Email Address" />
                <Field type="text" name="password" placeholder="Create a Password" />
            </Form>
        </div>
    )
};

export default CreateLogin;