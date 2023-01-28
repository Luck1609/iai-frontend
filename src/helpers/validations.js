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

const application_form_1_validation = yup.object().shape({
  name: yup.string().required(),
  gender: yup.string().required().oneOf(["Male", "Female", "Both"]),
  email: yup.string().required().email(),
  nationalIdCard: yup.string().required(),
  phone: yup.string().required()
    .matches(/^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/),
})

const application_form_2_validation = yup.object().shape({
  businessIdea: yup.string().required(),
  businessDescription: yup.string().required(),
  sector: yup.string().required(),
  location: yup.string().required(),
  coFounder: yup.string().required(),
  aboutBusiness: yup.string().required(),
  businessStage: yup.string().required(),
  pitchVideo: yup.string().required()
})

const application_form_3_validation = yup.object().shape({
  profit: yup.string().required(),
  investment: yup.string().required(),
  investmentUsageIdea: yup.string().required(),
  employees: yup.number().required(),
  hearAboutUS: yup.string().required(),
})

export {
  login_validation,
  forgot_password_validation,
  reset_password_validation,
  contact_form_validation,
  application_form_1_validation,
  application_form_2_validation,
  application_form_3_validation,
}