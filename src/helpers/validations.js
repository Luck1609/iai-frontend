import * as yup from "yup";


const login_validation = yup.Object().shape({
  email: yup.string().email().required(),
  password: yup.string().required(),
})

const forgot_password_validation = yup.Object().shape({
  email: yup.string().email().required()
})

const reset_password_validation = yup.Object().shape({
  password: yup.string().required(),
  password_confirmation: yup.string().required()
    .test("password-match", "Passwords do not match", (confirmation, { parent: { password } }) => (
      confirmation === password
    ))
})

export {
  login_validation,
  forgot_password_validation,
  reset_password_validation
}