import React, { useEffect, useState } from "react";
import { useFormContext } from "react-hook-form";
import { Controller } from "react-hook-form";
import Input from "react-phone-number-input/input";

export default function PhoneNumberInput({ name, label = null, className, subClassName = "" }) {
  const [focused, setFocused] = useState(false)
  const { control, watch, trigger, setFocus } = useFormContext();
  let value = watch(name);

  useEffect(() => {
    if (value) trigger(name);
  }, [value, trigger, name]);

  
  const changeFocus = () => {
    setFocused(true)
    setFocus(name, {shouldSelect: true})
  }
  // const handleBlur = () => {
  //   if (!value) setFocused(false)
  // }

  return (
    <Controller
      control={control}
      name={name}
      render={({
        field: { onChange, onBlur, value = "" },
        fieldState: { error },
      }) => (
        <div className={`relative w-full ${className} duration-300`}>
          <label className={`inline-block font-medium ${error ? "error" : ""}`} onClick={changeFocus}>{label}</label>

          <Input
            country="GH"
            value={Array.isArray(value) ? "" : value}
            onChange={onChange} 
            onBlur={onBlur}
            onFocus={changeFocus}
            className={`pl-3 ${subClassName} ${error ? "error" : ""}`}
            placeholder="+233550000000"
          />

          {error && (
            <span className="text-xs font-medium text-red-500 absolute -bottom-5 left-1 block w-full">
              {error.message}
            </span>
          )}
        </div>
      )}
    />
  );
}
