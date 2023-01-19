import React from "react";
import { FormProvider, useForm } from "react-hook-form";
// import Input from '@components/Input'
import Password from "@components/Password";
import { images } from "@assets/img/images";
import { FormBtn } from "@components/Btn";
// import Checkbox from "@components/Checkbox";
import Link from "@components/Link";

export default function ResetPassword() {
  const methods = useForm({ mode: "all" });

  return (
    <FormProvider {...methods}>
      <form className="bg-white w-[450px] p-5 pb-8 lg:mr-8 lg:mb-8 2xl:mr-20 2xl:mb-20 relative rounded">
        <img
          src={images.logo_2}
          alt="Logo"
          className="relative -top-5 left-4 h-24"
        />

        <h2 className="text-2xl font-bold mb-8">Reset your password</h2>

        <div className="grid gap-5">
          <Password
            name="password"
            label="Password"
            placeholder="Enter your password"
          />

          <Password
            name="password_confirmation"
            label="Repeat password"
            placeholder="Repeat your password"
          />

          <Link url="/login">
            <label className="font-semibold">Remember your password ?</label>
          </Link>

          <FormBtn
            content="SUBMIT"
            className="w-full bg-default-red hover:bg-default-red rounded-[5px] h-12"
          />
        </div>
      </form>
    </FormProvider>
  );
}
