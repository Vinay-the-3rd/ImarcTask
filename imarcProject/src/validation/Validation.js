// This function performs validation on the input values provided and returns an object containing any errors found during the validation process.
export default function Validation(values) {
  // Initialize an empty object to store validation errors.
  const errors = {};

  // Regular expressions used for validating email, password, alphabetic input, and phone number.
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // Validate email input
  if (!values?.emailId) {
    errors.emailId = "Email is Required";
  } else if (!emailRegex.test(values.emailId)) {
    errors.emailId = "Must be a valid email ID";
  }

  // Validate password input
  if (values?.password === "") {
    errors.password = "Password is Required";
  }
  
  // Return the object containing any errors found during validation
  return errors;
}
