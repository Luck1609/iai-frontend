import React, { useEffect, useRef } from 'react'
import Input from '@components/Input'
import Textarea from '@components/Textarea'
import SelectField from '@components/Select'
import { Upload } from '@assets/img/svg'
import { Btn } from '@components/Btn'
import { useFormContext } from 'react-hook-form'

export default function ApplicationForm2() {
  const img = useRef();
  const { register, formState: { errors } } = useFormContext();

  useEffect(() => {
    console.log("image value", img.current.value)
  }, [img])
  

  return (
    <>
      <Input
        name="idea"
        label="Name of business or idea:"
        placeholder="Name of business or idea:"
        // constainerClass=""
        className="border-b border-input-border rounded-none"
      />

      <SelectField 
        name="category"
        label="What best describes your business ?"
        className="p-2"
        containerClass="border-input-border"
        options={[
          {
            label: "Limited Liability Company",
            value: "LLC"
          },
          {
            label: "Joint Venture",
            value: "JC"
          },
          {
            label: "Limited by Guarantee",
            value: "LBG"
          },
          {
            label: "Not Registered",
            value: "NR"
          },
        ]}
      />

      <SelectField 
        name="sector"
        label="Please indicate the sector you work in"
        className="p-2"
        containerClass="border-input-border"
        options={[
          {
            label: "Manufacturing"
          },
          {
            label: "Agribusiness",
          },
          {
            label: "Energy and renewables",
          },
          {
            label: "Fashion",
          },
          {
            label: "Health",
          },
          {
            label: "Education",
          },
          {
            label: "Business services",
          },
          {
            label: "Technology",
          },
          {
            label: "Transportation and logistics",
          },
          {
            label: "Hospitality",
          },
          {
            label: "Other (Please indicate)",
          },
        ]}
      />

      <Input
        name="location"
        label="Indicate your business location and region"
        placeholder="Region and location"
        // constainerClass=""
        className="border-b border-input-border rounded-none"
      />

      <Input
        name="partners"
        label="Indicate co-owners and their ownership percentage and gender if any"
        placeholder="Indicate any other co-owner or partner if any? "
        // constainerClass=""
        className="border-b border-input-border rounded-none"
      />

      <Textarea 
        name="description"
        label="Tell us about your business  or idea"
        placeholder="Simple description of what your company does  e.g Ecommerce website for trading agricultural fields"
        subClassName="border-b border-input-border"
      />

      
      <SelectField 
        name="operation"
        label="Years of operation:"
        className="p-2"
        options={[
          {
            label: "1 - 12 months"
          },
          {
            label: "1 - 3 years"
          },
          {
            label: "3 years - 5 years"
          },
          {
            label: "5 years - 7 years"
          },
          {
            label: "Above 7 years"
          },
        ]}
      />

      <input ref={img} type="file" id="upload-input" className="hidden w-full text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-violet-50 file:text-violet-700 hover:file:bg-violet-100" />
      
      <Btn 
        content={
          <div className="flex items-center justify-center w-full rounded-lg p-5" htmlFor="#upload-input">
            <div className="text-center">
              <Upload className="m-auto" />
              <label className="text-[#333]">Browse file to upload</label>
            </div>
          </div>
        }
        className="bg-transparent hover:bg-slate-100  border border-dashed border-input-border"
        click={() => img.current?.click()}
      />
      {
        errors["pitch"] && <span className="text-sm text-red-500 block -mt-10 ml-5">{ errors["pitch"].message }</span>
      }
      

      
    </>
  )
}
