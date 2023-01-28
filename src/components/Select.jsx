import React, { useEffect } from "react";
import { useFormContext, Controller } from "react-hook-form";
import {
  MenuItem,
  Select,
  InputLabel,
  FormControl,
  // FormHelperText,
} from "@mui/material";

const SelectField = ({ name, options, label, className, containerClass }) => {
  const { watch, trigger, control } = useFormContext();
  let value = watch(name);

  useEffect(() => {
    if (value) trigger(value);
  }, [value, trigger]);

  return (
    <Controller
      control={control}
      name={name}
      render={({
        field: { onChange, onBlur, value = "" },
        fieldState: { error },
      }) => (
        <FormControl
          variant="standard"
          className={`w-full ${containerClass}`}
          error={error}
        >
          <InputLabel id={name} className={error ? "error" : ""}>{label}</InputLabel>
          <Select
            labelId={name}
            id={name}
            value={value}
            label={label}
            onChange={onChange}
            onBlur={onBlur}
            className={`${className} ${ error ? "error" : "" }`}
          >
            {options.map(({ value, label }) => {
              return (
                <MenuItem key={label} value={value}>
                  {label}
                </MenuItem>
              );
            })}
          </Select>
          {error && <span className="text-red-500 text-sm">{error.message}</span>}
        </FormControl>
      )}
    />
  );
};

export default SelectField;
