import React, { useEffect } from "react";
import { useFormContext } from "react-hook-form";
import { Controller } from "react-hook-form";

import Checkbox from "@mui/material/Checkbox";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";

const CustomCheckbox = ({ label, name, className, options }) => {
  const { control, watch, trigger } = useFormContext();
  let v = watch(name);

  useEffect(() => {
    if (v) trigger(name);
  }, [v, trigger, name]);

  return (
    <Controller
      control={control}
      name={name}
      render={({
        field: { onChange, onBlur, value = "" },
        fieldState: { error },
      }) => (
        <FormControl component="fieldset">
          <FormGroup aria-label="position" row>
            <FormControlLabel
              value={value}
              control={<Checkbox className="border-red-300" />}
              label={label}
              labelPlacement="end"
            />
          </FormGroup>
        </FormControl>
      )}
    />
  );
};

export default CustomCheckbox;