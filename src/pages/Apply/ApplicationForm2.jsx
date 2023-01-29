import React, { useEffect, useState } from "react";
import Input from "@components/Input";
import Textarea from "@components/Textarea";
import SelectField from "@components/Select";
import { Upload } from "@assets/img/svg";
// import { Btn } from "@components/Btn";
import { useFormContext } from "react-hook-form";
import UploadComponent from "./UploadComponent";


export default function ApplicationForm2() {
  // const progress = useRef()

  const {
    register,
    watch,
    setValue,
    formState: { errors },
  } = useFormContext();


  

  // console.log("Image upload error", fileError)

  // useEffect(() => {
  //   setValue("pitchVideo", "vid.mp4")
  // }, [])
  



  // const handleLoaded = () => console.log("Data loaded", watch("file"))



  return (
    <>
      <Input
        name="businessIdea"
        label="Name of business or idea:"
        placeholder="Name of business or idea:"
        // constainerClass=""
        className="border-b border-input-border rounded-none"
      />

      <SelectField
        name="businessDescription"
        label="What best describes your business ?"
        className="p-2"
        containerClass="border-input-border"
        options={[
          {
            label: "Limited Liability Company",
            value: "Limited Liability Company",
          },
          {
            label: "Joint Venture",
            value: "Joint Venture",
          },
          {
            label: "Limited by Guarantee",
            value: "Limited by Guarantee",
          },
          {
            label: "Sole Proprietor",
            value: "Sole Proprietor",
          },
          {
            label: "Not Registered",
            value: "Not Registered",
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
            label: "Manufacturing",
            value: "Manufacturing",
          },
          {
            label: "Agribusiness",
            value: "Agribusiness",
          },
          {
            label: "Energy and renewables",
            value: "Energy and renewables",
          },
          {
            label: "Fashion",
            value: "Fashion",
          },
          {
            label: "Health",
            value: "Health",
          },
          {
            label: "Education",
            value: "Education",
          },
          {
            label: "Business services",
            value: "Business services",
          },
          {
            label: "Technology",
            value: "Technology",
          },
          {
            label: "Transportation and logistics",
            value: "Transportation and logistics",
          },
          {
            label: "Hospitality",
            value: "Hospitality",
          },
          {
            label: "Other (Please indicate)",
            value: "Other",
          },
        ]}
      />

      <Input
        name="location"
        value="Indicate your business location and region"
        placeholder="Region and location"
        className="border-b border-input-border rounded-none"
      />

      <Input
        name="coFounder"
        label="Indicate co-owners and their ownership percentage and gender if any"
        placeholder="Indicate any other co-owner or partner if any? "
        className="border-b border-input-border rounded-none"
      />

      <Textarea
        name="aboutBusiness"
        label="Tell us about your business  or idea"
        placeholder="Simple description of what your company does  e.g Ecommerce website for trading agricultural fields"
        subClassName="border-b border-input-border"
      />
      

      <UploadComponent />

      <SelectField
        name="businessStage"
        label="Years of operation:"
        className="p-2"
        options={[
          {
            label: "1 - 12 months",
            value: "1 - 12 months",
          },
          {
            label: "1 - 3 years",
            value: "1 - 3 years",
          },
          {
            label: "3 years - 5 years",
            value: "3 years - 5 years",
          },
          {
            label: "5 years - 7 years",
            value: "5 years - 7 years",
          },
          {
            label: "Above 7 years",
            value: "Above 7 years",
          },
        ]}
      />

    </>
  );
}
