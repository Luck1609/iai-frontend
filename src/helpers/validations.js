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
  fullname: yup.string().required(),
  age: yup.number().required().integer(),
  email: yup.string().required().email(),
  idCard: yup.string().required(),
  phone: yup.string().required()
    .matches(/^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/),
})

const application_form_2_validation = yup.object().shape({
  idea: yup.string().required(),
  description: yup.string().required(),
  sector: yup.string().required(),
  location: yup.string().required(),
  partners: yup.string().required(),
  operation: yup.string().required(),
  businessDetails: yup.string().required(),
  pitch: yup.mixed().required()
    .test("file-type", "File type must be (PDF, MP4, PPTx or Docx)", (file) => {
      console.log("file")
      return true
      // return !/jpg|jpeg|png/.test(file[0].type);
    })
    .test("file-size", "file must not be larger than 50Mb", (file) => {
      return file && file[0]?.size <= 52428800;
    }),
})

const application_form_3_validation = yup.object().shape({

})

export {
  login_validation,
  forgot_password_validation,
  reset_password_validation,
  contact_form_validation
}