const validEmailRegex = RegExp(
  /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
);
const validNameRegex = RegExp(/^[A-Za-z]+$/);

export const validateFirstName = value =>
  value
    ? validNameRegex.test(value)
      ? ""
      : "First name can contain only letters."
    : "First name is required.";

export const validateLastName = value =>
  value
    ? validNameRegex.test(value)
      ? ""
      : "Last name can contain only letters."
    : "Last name is required.";

export const validateEmail = value =>
  value
    ? validEmailRegex.test(value)
      ? ""
      : "Wrong format! You have to use test@gmail.com."
    : "E-mail is required.";

export const validateSelectField = value =>
  value ? "" : "You must select an item.";
