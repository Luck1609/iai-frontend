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
          <label className={`font-semibold block mb-3 ${labelClassName}`}>{ label }</label>
          <input type={ type } placeholder={placeholder ?? ""} className={`p-4 w-full rounded focus:outline-none ${className}`} value={value} onChange={onChange}  />
        </div>
      )}
    />
  )
}

export default Input
