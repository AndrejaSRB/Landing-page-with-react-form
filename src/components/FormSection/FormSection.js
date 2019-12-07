import React, { useState } from "react";
import { Form } from "react-final-form";
import {
  validateFirstName,
  validateLastName,
  validateEmail,
  validateSelectField,
} from "./validation";
import CustomField from "../CustomField/CustomField";
import CustomSelect from "../CustomSelect/CustomSelect";
import {
  states,
  months,
  days,
  years,
  currentHealth,
  policyType,
  policyValue
} from "./data";
import { useSelector } from "react-redux";
import { withRouter } from "react-router-dom";
import CustomPhoneField from "../CustomPhoneField/CustomPhoneField";

const FormSection = props => {
  const [phone, setPhone] = useState("");
  const [phoneError, setPhoneError] = useState(false);
  const userIpAdress = useSelector(state => state.userIpAdress);
  const userZipCode = useSelector(state => state.userZipCode);

  //I'd use props.match.params.affid to get my parameter, but in this case I just made example for task with additional parameter in my URL (without any real route), so I used a bit complex way to get the URL parameter.

  const getAffId = () => {
    let currentPath = props.history.location.pathname;
    let pathPieces = currentPath.split("");
    pathPieces.splice(0, 7);
    let param = pathPieces.join("");
    return param;
  };

  const formatDateOfBirth = (year, month, day) => `${year}-${month}-${day}`;

  const getUserYear = year => {
    const date = new Date();
    return date.getFullYear() - year;
  };

  const checkQualification = (year, policyValue) => {
    const userYear = getUserYear(year);
    if (userYear < 65 || policyValue < 150000) {
      return "Not qualified.";
    } else {
      return "Qualified";
    }
  };

  const filterPhoneNumber = phone => phone.replace(/\D/g, "");

  const onSubmit = async values => {
    const dateOfBirth = formatDateOfBirth(
      values.year,
      values.month,
      values.day
    );
    const affId = getAffId();

    let userQualification = checkQualification(
      values.year,
      values.faceValueOfPolicy
    );

    let formatedPhone = filterPhoneNumber(phone);

    if (!phoneError) {
      let user = {
        firstName: values.firstName,
        lastName: values.lastName,
        email: values.email,
        ipAdress: userIpAdress,
        zipCode: userZipCode,
        state: values.state,
        phone: formatedPhone,
        affid: affId,
        dateOfBirth: dateOfBirth,
        policy: values.typeOfPolicy,
        faceValueOfPolicy: values.faceValueOfPolicy,
        currentInsured: values.currentInsured
      };
      console.log("submitted", user);
      console.log(userQualification);
    }
  };

  return (
    <div className="from-container">
      <div className="form-title">
        <h3>Get a Quote on Your Policy Today</h3>
      </div>
      <Form
        onSubmit={onSubmit}
        render={({ handleSubmit }) => (
          <form onSubmit={handleSubmit} className="form" noValidate>
            <div className="form-body">
              <div className="form-row-2">
                <CustomField
                  name="firstName"
                  placeholder="First Name"
                  label="First Name"
                  validate={validateFirstName}
                  required={true}
                />
                <CustomField
                  name="lastName"
                  placeholder="Last Name"
                  label="Last Name"
                  validate={validateLastName}
                  required={true}
                />
              </div>
              <div className="form-row-1">
                <CustomSelect
                  label="State"
                  name="state"
                  options={states}
                  placeholder="State"
                  required={true}
                  validate={validateSelectField}
                />
              </div>
              <div className="form-row-2">
                <CustomField
                  name="email"
                  placeholder="Email"
                  label="Email"
                  validate={validateEmail}
                  required={true}
                />
                <CustomPhoneField
                  phone={phone}
                  setPhone={setPhone}
                  error={phoneError}
                  setError={setPhoneError}
                />
              </div>
              <div className="form-row-3">
                <CustomSelect
                  label="Date of Birth"
                  name="month"
                  options={months}
                  placeholder="month"
                  required={true}
                  validate={validateSelectField}
                />
                <CustomSelect
                  name="day"
                  options={days}
                  placeholder="Days"
                  required={true}
                  validate={validateSelectField}
                />
                <CustomSelect
                  name="year"
                  options={years}
                  placeholder="Year"
                  validate={validateSelectField}
                  required={true}
                />
              </div>
              <div className="form-row-2">
                <CustomSelect
                  label="Type of Policy"
                  name="typeOfPolicy"
                  validate={validateSelectField}
                  options={policyType}
                  placeholder="State"
                  required={true}
                />
                <CustomSelect
                  label="Face Value of Policy"
                  name="faceValueOfPolicy"
                  validate={validateSelectField}
                  options={policyValue}
                  placeholder="Face Value of Policy"
                  required={true}
                />
              </div>
              <div className="form-row-1">
                <CustomSelect
                  label="Current Health of Insured"
                  name="currentInsured"
                  validate={validateSelectField}
                  options={currentHealth}
                  placeholder="Current Health of Insured"
                  required={true}
                />
              </div>
            </div>
            <div className="form-footer">
              <div className="form-button">
                <button type="submit">Get Your quote!</button>
              </div>
              <div className="form-text">
                <p>
                  By completing a contact form on this site, clicking "GET YOUR
                  QUOTE!", or calling the number listed above, you may be
                  directed to a sales agent who can answer your questions and
                  provide information about life insurance settlement, and the
                  potential value of your existing policy. (Agents are not
                  connected with or endorsed by the U.S. government.) By
                  interacting with the site, you provide an electronic signature
                  by which you agree to the following terms: "I consent to
                  receive emails, notifications, and calls about life settlement
                  services from{" "}
                  <a
                    href="https://www.greensettlements.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    these companies
                  </a>{" "}
                  and their agents to the telephone number(s) I have provided.
                  'Calls' may be auto-dialed, use artificial or pre-recorded
                  voices, and/or be text messages, including recurring messages
                  sent via a short code program. I understand that my consent to
                  receive calls is not required in order to purchase any
                  property, goods or services. My telephone company may impose
                  additional charges for messages. I may revoke my consent to
                  receiving messages at any time. By submitting my information,
                  I confirm that I have read, understand, and agree to these{" "}
                  <a
                    href="https://www.greensettlements.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Terms of Use
                  </a>{" "}
                  and{" "}
                  <a
                    href="https://www.greensettlements.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Privacy Policy.
                  </a>
                  "
                </p>
                <div className="form-phone-number">
                  <a href="tel:8776527718">Call 877-652-771</a>
                </div>
              </div>
            </div>
          </form>
        )}
      />
    </div>
  );
};
export default withRouter(FormSection);
