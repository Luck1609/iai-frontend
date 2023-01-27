import React from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { FormProvider, useForm } from "react-hook-form";
import { FormBtn } from "@components/Btn";
import Input from "@components/Input";
import PhoneNumberInput from "@components/PhoneNumberInput";
import Textarea from "@components/Textarea";
import { contact_form_validation } from "@helpers/validations";

export default function ContactForm() {
  const methods = useForm({
    mode: "all",
    resolver: yupResolver(contact_form_validation),
  });

  const {
    handleSubmit,
    formState: { isValid, isDirty },
  } = methods;

  const submit = (payload) => {};

  return (
    <div className="w-full mt-20">
      <div className="max-w-5xl relative m-auto">
        <h2 className="text-3xl font-semibold text-heading2">
          Send Us A Message
        </h2>
        <FormProvider {...methods}>
          <form
            className="p-5 lg:px-0 grid lg:grid-cols-2 gap-5 lg:w-3/5"
            onSubmit={handleSubmit(submit)}
          >
            <Input name="firstname" placeholder="Firstname" />

            <Input name="lastname" placeholder="Lastname" />

            <Input
              name="email"
              placeholder="Email"
              constainerClass="lg:col-span-2"
            />

            <PhoneNumberInput
              name="phone"
              className="w-full lg:col-span-2"
              subClassName="w-full p-3.5 rounded"
            />

            <Textarea
              name="message"
              className="lg:col-span-2"
              placeholder="Message"
            />

            <FormBtn
              content="Send Message"
              className="bg-heading w-44 h-12 m-auto lg:m-0"
              disabled={!isDirty || !isValid}
            />
          </form>
        </FormProvider>

        <div className="absolute h-[500px] w-[520px] -right-36 -bottom-16 bg-contact bg-cover hidden lg:block"></div>
      </div>
    </div>
  );
}
