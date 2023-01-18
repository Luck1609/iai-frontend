import React, { useEffect, useState } from 'react';
import { useFormContext } from 'react-hook-form';
import { Controller } from "react-hook-form";
import { RemoveRedEyeOutlined, VisibilityOffOutlined } from "@mui/icons-material";

const Password = ({ label, name, className, placeholder }) => {
  const [show, setShow] = useState(false)
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
        <div className={`${className} relative`}>
          <label className="font-semibold block mb-3">{ label }</label>
          <input type="password" placeholder={placeholder ?? ""} className="p-4 w-full bg-input" value={value} onChange={onChange}  />
          {show ? <VisibilityOffOutlined className="absolute right-4 bottom-4 text-default-red" /> : <RemoveRedEyeOutlined className="absolute right-4 bottom-4 text-default-red" />}

        </div>
      )}
    />
  )
}

export default Password
