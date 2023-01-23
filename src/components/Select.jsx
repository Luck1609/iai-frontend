import React, { useEffect } from 'react';
import { useFormContext, Controller } from 'react-hook-form';
import { MenuItem, Select, InputLabel, FormControl, FormHelperText } from '@mui/material';


const SelectField = ({ name, options, label, className, containerClass }) => {

  const { watch, trigger, control} = useFormContext();
  let value = watch(name)

  useEffect(() => {
    if (value) trigger(value);
  }, [value, trigger])

  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { onChange, onBlur, value = '' }, fieldState: { error } }) => (
        <FormControl variant="standard" className={`w-full ${containerClass}`} error={ error }>
          <InputLabel id={name}>{label}</InputLabel>
          <Select
            labelId={name}
            id={name}
            // defaultValue={value ?? ''}
            value={value ?? ''}
            label={label}
            onChange={onChange}
            className={className}
          >
            {
              options.map(({ value, label }) => {
                return (
                  <MenuItem
                    key={label}
                    value={value}
                  >
                    {label}
                  </MenuItem>
                )
              })
            }
          </Select>
          {
            error && <FormHelperText>{ error.message }</FormHelperText>
          }
          
        </FormControl>
      )}
    />
  )
}

export default SelectField

