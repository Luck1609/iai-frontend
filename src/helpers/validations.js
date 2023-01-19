import * as yup from "yup";


const login_validation = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().required(),
})

const forgot_password_validation = yup.object().shape({
  email: yup.string().email().required()
})

const reset_password_validation = yup.object().shape({
  password: yup.string().required(),
  password_confirmation: yup.string().required()
    .test("password-match", "Passwords do not match", (confirmation, { parent: { password } }) => (
      confirmation === password
    ))
})

const contact_form_validation = yup.object().shape({
  firstname: yup.string().required(),
  lastname: yup.string().required(),
  phone: yup.string().required()
    .matches(/^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/),
  email: yup.string().email().required(),
  message: yup.string().required()
})

export {
  login_validation,
  forgot_password_validation,
  reset_password_validation,
  contact_form_validation
}