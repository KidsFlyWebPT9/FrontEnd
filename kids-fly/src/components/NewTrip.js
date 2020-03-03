import React from "react";
import { Form, Field, withFormik } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";

const NewTrip = ({ errors, touched, values, status }) => {

  return (
    <div>
      <h2>Create A New Trip</h2>
      <Form className="form-styled">

        <div className="field-container">
          <label htmlFor="airportName">Airport: 
            <Field className="field-styled"
              id="airportName"
              type="text"
              name="airportName"
              // placeholder=""
            />
          </label>
        </div>

        <div className="field-container">
          <label htmlFor="airline">Airline: 
            <Field className="field-styled"
              id="airline"
              type="text"
              name="airline"
            />
          </label>
        </div>

        <div className="field-container">
          <label htmlFor="flightNumber">Flight Number: 
            <Field className="field-styled"
              id="flightNumber"
              type="number"
              name="flightNumber"
            />
          </label>
        </div>

        <div className="field-container">
          <label htmlFor="departTime">Departure Time:
            <Field className="field-styled"
              id="departTime"
              type="date"
              name="departTime"
            />
          </label>
        </div>

        <div className="field-container">
          <label htmlFor="numCarryOns">Number Of Carry Ons:
            <Field className="field-styled"
              id="numCarryOns"
              type="number"
              name="numCarryOns"
            />
          </label>
        </div>

        <div className="field-container">
          <label htmlFor="numKids">Number Of Kids:
            <Field className="field-styled"
              id="numKids"
              type="number"
              name="numKids"
            />
          </label>
        </div>

        <div className="field-container">
          <label htmlFor="notes">Notes:
            <Field as="textarea" className="field-styled"
              id="notes"
              name="notes"
            />
          </label>
        </div>

        <div className="btn-container">
          {/* SubButton = <button> */}
          <button className="btn-Style" type="submit">Log Exercise</button>

          <Link exact to="/lastlog">
            <button className="btn-Style">Return</button>
          </Link>
        </div>

      </Form>
    </div>
  )
};

const FormikNewTrip = withFormik({
  mapPropsToValues(props) {
    return {
      airportName: props.airportName || "",
      airline: props.airline || "",
      flightNumber: props.flightNumber || "",
      departTime: props.departTime || "",
      numCarryOns: props.numCarryOns || "",
      numKids: props.numKids || "",
      notes: props.notes || ""
    };
  },

  validationSchema: Yup.object().shape({
    airportName: Yup.string().required("Select an airport")
  }),

  handleSubmit(values, {setStatus, resetForm}) {
    console.log("this is value", values);
    // this is where axios goes
    resetForm();
  }
})(NewTrip);

// export default NewTrip;
export default FormikNewTrip;