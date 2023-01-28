import React, { useEffect, useState } from "react";
import { CheckCircleOutline, HighlightOffOutlined } from '@mui/icons-material';
import Input from "@components/Input";
import Textarea from "@components/Textarea";
import SelectField from "@components/Select";
import { Upload } from "@assets/img/svg";
// import { Btn } from "@components/Btn";
import { useFormContext } from "react-hook-form";
import HttpReq from "@helpers/axios";
import Helper from "@helpers/index";
import { useRef } from "react";
import Progressbar from "@components/ProgressBar";
import { Btn } from "@components/Btn";

const http = new HttpReq();

const types = ["application/vnd.openxmlformats-officedocument.wordprocessingml.document", "application/pdf", "video/mp4"]

export default function ApplicationForm2() {
  const [fileError, setFileError] = useState(null);
  const [progress, setProgress] = useState(0);
  const [isUploading, setIsUploading] = useState(false)
  // const progress = useRef()

  const {
    register,
    watch,
    setValue,
    formState: { errors },
  } = useFormContext();


  

  // console.log("Image upload error", fileError)
  const uploadFile = async () => {
    const img = watch("file")[0]


    if (!types.includes(img.type)) {
      setFileError("File must be MP4, PDF or MS Word (docx) document")
      return
    }
    else if (img.size > 52428800) {
      setFileError("File must not exceed 50Mb")
      return
    }
    else {
      setIsUploading(!isUploading)
      setFileError(null)
      const data = new FormData();
      data.append("file", img);

        console.log("Image to upload", img)

      const options = {
        onUploadProgress: (progress) => {
          let percentage = Math.floor((progress.loaded * 100) / progress.total);
          setProgress(percentage)
        }
      }

      try {
        const result = await http.post(`${Helper.AppUrl}/upload-file`, img, options);
        if (result === "Network Error") {
          throw new Error("Server error")
          // setFileError("An error occured on the server");

        }
        setValue("pitchVideo", result)
        setValue("file", "")
        
        setIsUploading(false)
      } catch (error) {
        setFileError(prev => "An error occured on the server")
        console.log("Server error", error)
      }

    }

  }

  // useEffect(() => {
  //   setValue("pitchVideo", "vid.mp4")
  // }, [])
  

  const resetFileUpload = () => setFileError(null)


  // const handleLoaded = () => console.log("Data loaded", watch("file"))


  const { onChange, name, onBlur, ref } = register("file");

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
            value: "LLC",
          },
          {
            label: "Joint Venture",
            value: "JC",
          },
          {
            label: "Limited by Guarantee",
            value: "LBG",
          },
          {
            label: "Not Registered",
            value: "NR",
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
        // constainerClass=""
        className="border-b border-input-border rounded-none"
      />

      <Textarea
        name="aboutBusiness"
        label="Tell us about your business  or idea"
        placeholder="Simple description of what your company does  e.g Ecommerce website for trading agricultural fields"
        subClassName="border-b border-input-border"
      />

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

      {
        !watch("pitchVideo") ? (
          <>
            {
              !isUploading ? (
                <>
                  {
                    fileError ? (
                      <Btn 
                        content={
                          <div className="flex items-center justify-center w-full rounded-lg p-10 ">
                            <div className="flex items-center text-red-500 text-center">
                              <HighlightOffOutlined className=" text-md" /><label className="text-xs ml-2">{ fileError }</label>
                            </div>
                          </div>
                        }
                        className="bg-transparent hover:bg-red-100 border border-dashed border-red-500 bg-red-50"
                        click={resetFileUpload}
                      />
                    ) : (
                      <div className="w-full relative">
                        <input
                          onChange={(e) => {
                              onChange(e)
                              uploadFile()
                            }
                          }
                          ref={ref}
                          name={name}
                          type="file"
                          className={`w-full relative z-10 text-sm file:bg-transparent file:text-transparent file:w-full file:py-10 file:rounded-lg file:border file:border-dashed ${fileError ? "file:border-red-500 file:bg-red-100 file:bg-opacity-40" : "file:border-input-border hover:file:bg-slate-100"} file:text-sm file:font-semibold hover:file:bg-opacity-50 file:cursor-pointer`}
                          // onChange={uploadFile}
                        />
                        <div className="w-1/5 flex flex-col items-center absolute top-3.5 left-[40%] z-0">
                          <Upload className="" color={fileError ? "#ef4444" : "#1E313E"} />
                          <label className={fileError ? "text-red-500" : ""}>Browse file to upload</label>
                        </div>

                      </div>
                    )
                  }
                </>
              ) : (
                <div className="flex items-center justify-center w-full rounded-lg p-10 bg-transparent  border border-dashed border-input-border">
                  <div className="flex w-3/5 m-auto items-center">
                    <label className="text-[#333] text-xs grow">File Upload Progress</label>
                    <Progressbar progress={progress} />
                  </div>
                </div>
              )
            }
          </>
        ) : (
          <div className="flex items-center justify-center w-full rounded-lg p-10 bg-transparent  border border-dashed border-green-500 bg-green-50">
            <div className="flex items-center text-green-500 text-center">
              <CheckCircleOutline className="text-md" /><label className="text-xs ml-2">File Upload Progress</label>
            </div>
          </div>
        )
      }

    </>
  );
}
