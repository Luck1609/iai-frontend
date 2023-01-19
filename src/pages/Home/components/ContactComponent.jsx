import { FormBtn } from "@components/Btn";
// import Input from '@components/Input'
import { ArrowForward } from "@mui/icons-material";
import React from "react";
import { FormProvider, useForm } from "react-hook-form";

export default function ContactComponent() {
  const methods = useForm();

  return (
    <div className="w-full bg-mechanic bg-cover h-96 flex justify-center items-center mt-16">
      <FormProvider {...methods}>
        <form className="bg-transparent text-white text-center w-[400px]">
          <h4 className="font-semibold text-3xl">Stay Updated</h4>
          <label className="block my-5">
            Subscribe to receive news and updates
          </label>

          <div className="relative">
            <input
              type="text"
              className="bg-default-blue w-full text-white p-5 rounded "
              placeholder="Enter your email"
            />
            <FormBtn
              content={<ArrowForward />}
              className="rounded-full min-w-0 p-2 bg-heading absolute top-2 right-5"
            />
          </div>
        </form>
      </FormProvider>
    </div>
  );
}
