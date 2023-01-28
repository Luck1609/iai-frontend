import React, { useEffect } from 'react';
import { useFormContext } from 'react-hook-form';
import { Controller } from "react-hook-form";

const Input = ({ label, name, constainerClass, className, labelClassName, placeholder, type = "text" }) => {

  const { control, watch, trigger } = useFormContext();
  let v = watch(name)
  
  useEffect(() => {
    if (v) trigger(name);
  }, [v, trigger, name])
  
  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { onChange, onBlur, value = '' }, fieldState: { error } }) => (
        <div className={constainerClass}>
          <label className={`font-semibold block mb-3 ${error ? "error" : ""} ${labelClassName}`}>{ label }</label>
          <input type={ type } placeholder={placeholder ?? ""} onBlur={onBlur} className={`p-4 w-full rounded focus:outline-none ${error ? "error" : ""} ${className}`} value={value} onChange={onChange}  />
          {
            error && <span className="text-red-500 text-sm">{error.message}</span>
          }
        </div>
      )}
    />
  )
}

export default Input
