import React, { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { East, West } from "@mui/icons-material";
import { Btn, FormBtn } from "@components/btn";
import LinkItem from "@components/link";
import ApplicationForm1 from "./ApplicationForm1";
import ApplicationForm2 from "./ApplicationForm2";
import ApplicationForm3 from "./ApplicationForm3";

export default function ApplicationForm() {
  const [step, setStep] = useState(0);
  const methods = useForm({ mode: "all" });

  const handleNext = () => setStep(step + 1);
  const handlePrevious = () => setStep(step - 1);

  const { handleSubmit } = methods;


  const submit = (payload) => {}

  const titles = ["Basic Data", "Business Data", "Investment Details"]

  return (
    <div className="flex justify-center items-center py-36">
      <div className="rounded-xl w-full max-w-4xl bg-white shadow-form-shadow overflow-hidden">
        <heading className="flex items-center justify-between bg-[#E9EEF2] p-3 px-10">
          <h2 className="text-2xl pb-2 font-bold text-default-red relative before:bg-line before:bg-cover before:absolute before:-bottom-1.5 before:w-full before:h-4">
            Apply form
          </h2>

          <div className="font-bold">{step + 1} / 3</div>
        </heading>

        <div className="p-10">
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
              <LinkItem url="/" className="text-red-text">
                Download this Guide
              </LinkItem>{" "}
              to help prepare your video or presentation.
            </p>
          </div>

          <h3 className="text-2xl font-bold mb-10">{ titles[step] }</h3>
        </div>

        <FormProvider {...methods}>
          <form className="px-10 grid gap-12 pb-16" onSubmit={handleSubmit(submit)}>
            {showStep(step)}
          
            <div className={`flex items-center ${step > 0 ? "justify-between" : "justify-end"}`}>
              {
                step > 0 && (
                  <Btn
                    content={
                      <span className="flex items-center">
                        <West className="mr-3" /> Previous 
                      </span>
                    }
                    className="h-12 bg-[#E0E0E0] hover:bg-[#E0E0E0] text-black w-44 place-self-start rounded-[5px]"
                    click={handlePrevious}
                  />
                )
              }
          
              {
                step === 2 ? (
                  <FormBtn 
                    content={
                      <span className="flex items-center">
                        Pay to submit <East className="ml-3" />
                      </span>
                    }
                    className="h-12 bg-default-red hover:bg-default-red w-44 justify-self-end rounded-[5px]"
                  />
                ) : (
                  <Btn
                    content={
                      <span className="flex items-center">
                        Next <East className="ml-3" />
                      </span>
                    }
                    className="h-12 bg-default-red hover:bg-default-red w-44 place-self-end rounded-[5px]"
                    click={handleNext}
                  />
                )
              }
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