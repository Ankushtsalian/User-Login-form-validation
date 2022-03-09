function ValidationInfo(values) {
  let errors = {};
  const regexp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  if (!values.username.trim()) {
    errors.username = "Username required";
  }

  //Email
  ///^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  if (!values.email) {
    errors.email = "Email required";
  } else if (!regexp.test(values.email)) {
    errors.email = "Email address is invalid";
  }

  //password

  if (!values.password1) {
    errors.password = "Password is required";
  } else if (values.password1.length < 6) {
    errors.password = "Password needs to be 6 characters or more";
  }

  //password checking

  if (!values.password2) {
    errors.password = "Password is required";
  } else if (values.password2 !== values.password1) {
    errors.password2 = "Password do not match";
  }
  return errors;
}
export default ValidationInfo;
