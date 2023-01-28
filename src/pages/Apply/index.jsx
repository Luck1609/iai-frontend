import React, { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { East, West } from "@mui/icons-material";
import { Btn, FormBtn } from "@components/Btn";
import ApplicationForm1 from "./ApplicationForm1";
import ApplicationForm2 from "./ApplicationForm2";
import ApplicationForm3 from "./ApplicationForm3";
import { application_form_1_validation, application_form_2_validation, application_form_3_validation } from "@helpers/validations";
import { yupResolver } from "@hookform/resolvers/yup";
import HttpReq from "@helpers/axios";
import { usePaystackPayment } from "react-paystack";
import Helper from "@helpers/index";

const validations = [
  application_form_1_validation,
  application_form_2_validation,
  application_form_3_validation
]

const http = new HttpReq();

export default function ApplicationForm() {
  const [step, setStep] = useState(0);

  const resolver = yupResolver(validations[step])

  const methods = useForm({ 
    mode: "all",
    resolver
  });

  const handleNext = () => setStep(step + 1);
  const handlePrevious = () => setStep(step - 1);

  const { handleSubmit, watch, formState: {isValid, isDirty, isSubmitting, errors} } = methods;

  const submit = (payload) => {
    console.log('Data to be submitted', payload)
  };

  const titles = ["Basic Data", "Business Data", "Investment Details"];




  
  const initializePayment = usePaystackPayment({
    reference : Math.random().toString(36).slice(-5),
    currency: 'GHS',
    email: watch('email'),
    amount: 200 * 100,
    // publicKey: 'pk_live_7a865b13cdd74cb21d63f508c64711d73d9175df'
    publicKey: 'pk_test_990efee3f71a1bbe44dced41031d573c8be68217'
  })

  const onSuccess = ({ reference, transaction }) => {
    console.log("payload to upload", watch(), reference, transaction);
    const { file, ...payload } = watch();

    http
      .post(
        `${
          Helper.AppUrl
        }/application`,
        {
          reference,
          transaction,
          ...payload,
          amount: 200
        }
      )
      .then(({ data, message }) => {
        toast.success(message);
        console.log('Succes response data', data)
      })
      .catch((err) => {
        console.log("Ticket booking failed error", err);
      });
    // await http.post(`${Helper.AppUrl}/application`, )
  }

  const onClose = (ref) => {
    console.log('Closed transaction reference', ref)
  }

  const processPayment = () => initializePayment(onSuccess, onClose)




  return (
    <div className="flex justify-center items-center py-36">
      <div className="rounded-xl w-full max-w-4xl bg-white shadow-form-shadow overflow-hidden mx-5 lg:mx-0">
        <div className="flex items-center justify-between bg-[#E9EEF2] p-3 px-5 lg:px-10">
          <h2 className="text-2xl pb-2 font-bold text-default-red relative before:bg-line before:bg-cover before:absolute before:-bottom-1.5 before:w-full before:h-4">
            Apply form
          </h2>

          <div className="font-bold">{step + 1} / 3</div>
        </div>

        <div className="p-5 py-10 lg:p-10">
          <h2 className="text-xl mb-8">Welcome to I AM INVESTIBLE</h2>

          <div className="leading-8 mb-10">
            <p className="mb-4">
              <span className="text-red-text">I AM INVESTIBLE</span> is an
              initiative to provide financial support to young entrepreneurs
              through a Business Idea Competition.
            </p>

            <p className="mb-4">
              If you have a great idea or a growing business startup, embrace
              the golden opportunity, submit your business pitch and stand the
              chance of receiving the support you desire to take you to your
              next level
            </p>

            <p className="">
              <a
                href={Helper.env.VITE_DOWNLOAD_GUIDE}
                // target="_blank"
                className="text-red-text"
                download
              >
                Download this Guide
              </a>{" "}
              to help prepare your video or presentation.
            </p>
          </div>

          <h3 className="text-2xl font-bold mb-10">{titles[step]}</h3>
        </div>

        <FormProvider {...methods}>
          <form
            className="px-5 lg:px-10 grid gap-12 pb-16"
            onSubmit={handleSubmit(processPayment)}
          >
            {showStep(step)}

            <div
              className={`flex items-center ${
                step > 0 ? "justify-between" : "justify-end"
              }`}
            >
              {step > 0 && (
                <Btn
                  content={
                    <span className="flex items-center">
                      <West className="mr-3" /> Previous
                    </span>
                  }
                  className="h-12 bg-[#E0E0E0] hover:bg-[#E0E0E0] text-black w-32 lg:w-44 place-self-start rounded-[5px]"
                  click={handlePrevious}
                />
              )}

              {step === 2 ? (
                <FormBtn
                  content={
                    <span className="flex items-center">
                      Pay to submit <East className="ml-3" />
                    </span>
                  }
                  className="h-12 bg-default-red hover:bg-default-red w-32 lg:w-44 justify-self-end rounded-[5px]"
                  disabled={!isValid || !isDirty}
                />
              ) : (
                <Btn
                  content={
                    <span className="flex items-center">
                      Next <East className="ml-3" />
                    </span>
                  }
                  className="h-12 bg-default-red hover:bg-default-red w-32 lg:w-44 place-self-end rounded-[5px]"
                  click={handleNext}
                  disabled={!isValid || !isDirty}
                />
              )}
            </div>
          </form>
        </FormProvider>
      </div>
    </div>
  );
}


const showStep = (step) => {
  switch (step) {
    case 0:
      return <ApplicationForm1 />
    
    case 1:
      return <ApplicationForm2 />
    
    case 2:
      return <ApplicationForm3 />
  
    default:
      break;
  }
}