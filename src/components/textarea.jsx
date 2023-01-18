import React, { useEffect, useState } from 'react';
import { useFormContext } from 'react-hook-form';
import { Controller } from "react-hook-form";

const Textarea = ({ name, className = '', subClassName, placeholder, label = "", rows, disabled = false }) => {
  // const [showOptions, setShowOptions] = useState(false);
  const [focused, setFocused] = useState(false)

  const { control, watch, trigger, setFocus } = useFormContext();
  const value = watch(name);
  
  useEffect(() => {
    if (value) trigger(name);
  }, [value, trigger, name])

  const changeFocus = () => {
    setFocused(true)
    setFocus(name, {shouldSelect: true})
  }

  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { onChange, value = '' }, fieldState: { error } }) => (
        <div className={`relative w-full ${className}`}>
          <label className={`inline-block font-medium`} onClick={changeFocus}>{ label }</label>
          <textarea rows={rows ?? 5} disabled={disabled} placeholder={placeholder} className={`${subClassName} w-full p-3 ${error ? "bg-red-300 border-2 border-red-500 focus:outline-red-500" : ""}`} onChange={onChange} value={value} />
          
          {
            error && <span className="text-xs text-red-500 absolute -bottom-5 left-1 block w-full">{ error.message }</span>
          }
        </div>
      )}
    />
  )
}

export default Textarea
