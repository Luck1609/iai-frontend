import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import Input from "@components/Input";
import { images } from "@assets/img/images";
import { FormBtn } from "@components/btn";
import Link from "@components/link";

export default function ForgotPassword() {
  const methods = useForm({ mode: "all" });

  return (
    // <EmailSent />
    <ForgotPasswordForm />
  );
}




const EmailSent = () => {
  return (
    <div className="bg-white w-[500px] p-5 pb-8 lg:mr-10 lg:mb-32 2xl:mr-20 2xl:mb-60 relative rounded">
      <img
        src={images.logo_2}
        alt="Logo"
        className="relative -top-5 left-4 h-24"
      />

      <h2 className="text-2xl font-bold mb-5">Email Sent</h2>

      <p className="leadin-9 w-4/5 mb-3 text-red-text">A password reset mail has been sent to your email: asfsfsf@gmail.com</p>

    </div>
  )
}

const ForgotPasswordForm = () => {
  const methods = useForm({ mode: "all" });
  
  return (
    <FormProvider {...methods}>
      <form className="bg-white w-[450px] p-5 pb-8 lg:mr-8 lg:mb-8 2xl:mr-20 2xl:mb-20 relative rounded">
        <img
          src={images.logo_2}
          alt="Logo"
          className="relative -top-5 left-4 h-24"
        />

        <h2 className="text-2xl font-bold mb-5">Forgot password ?</h2>

        <p className="leadin-9 w-4/5 mb-3 text-red-text">Enter your email and a reset password mail would be sent to your email.</p>

        <div className="grid gap-5">
          <Input name="email" label="Email" placeholder="Enter your password" className="bg-input" />

          <p className="flex">
            Remember your password?
            <Link url="/login" className="text-default-red font-medium ml-2">
              Login
            </Link>
          </p>

          <FormBtn
            content="SUBMIT"
            className="w-full bg-default-red hover:bg-default-red rounded-[5px] h-12"
          />
        </div>
      </form>
    </FormProvider>
  )
}