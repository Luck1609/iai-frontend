import React, { useState } from "react";
import { CheckCircleOutline, HighlightOffOutlined } from "@mui/icons-material";
import Progressbar from "@components/ProgressBar";
import { Btn } from "@components/Btn";
import { useFormContext } from "react-hook-form";
import HttpReq from "@helpers/axios";
import Helper from "@helpers/index";
import { Upload } from "@assets/img/svg";

const http = new HttpReq();

const types = [
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document", 
  "application/pdf", 
  "video/mp4", 
  "application/vnd.openxmlformats-officedocument.presentationml.presentation"
]

export default function UploadComponent() {
  const [fileError, setFileError] = useState(null);
  const [progress, setProgress] = useState(0);
  const [isUploading, setIsUploading] = useState(false);

  const { register, watch, setValue } = useFormContext();

  const { onChange, name, onBlur, ref } = register("file");

  const uploadFile = async () => {
    const img = watch("file")[0];
console.log("file type", img)
    if (!types.includes(img.type)) {
      setFileError("File must be MP4, PDF or MS Word (docx) document");
      return;
    } else if (img.size > 52428800) {
      setFileError("File must not exceed 50Mb");
      return;
    } else {
      setIsUploading(!isUploading);
      setFileError(null);
      const data = new FormData();
      data.append("file", img);

      console.log("Image to upload", data);

      const options = {
        onUploadProgress: (progress) => {
          let percentage = Math.floor((progress.loaded * 100) / progress.total);
console.log("upload file", percentage)
          setProgress(percentage);
        },
      };
      try {
        const result = await http.post(
          `${Helper.api}/upload-file`,
          // `${Helper.env.VITE_API}/upload-file`,
          data,
          options
        );
        if (result === "Network Error") {
          throw new Error("Server error");
        }
        setValue("pitchVideo", result);
        setValue("file", "");


        console.log("Upload link", result)

        setIsUploading(false);
      } catch (error) {
        setFileError((prev) => "An error occured on the server");
        console.log("Server error", error);
      }
    }
  };

  
  const resetFileUpload = () => setFileError(null)

  return (
    <>
      {!watch("pitchVideo") ? (
        <>
          {!isUploading ? (
            <>
              {fileError ? (
                <Btn
                  content={
                    <div className="flex items-center justify-center w-full rounded-lg p-10 ">
                      <div className="flex items-center text-red-500 text-center">
                        <HighlightOffOutlined className=" text-md" />
                        <label className="text-xs ml-2">{fileError}</label>
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
                      onChange(e);
                      uploadFile();
                    }}
                    ref={ref}
                    name={name}
                    type="file"
                    className={`w-full relative z-10 text-sm file:bg-transparent file:text-transparent file:w-full file:py-10 file:rounded-lg file:border file:border-dashed ${
                      fileError
                        ? "file:border-red-500 file:bg-red-100 file:bg-opacity-40"
                        : "file:border-input-border hover:file:bg-slate-100"
                    } file:text-sm file:font-semibold hover:file:bg-opacity-50 file:cursor-pointer`}
                    // onChange={uploadFile}
                  />
                  <div className="w-1/5 flex flex-col items-center absolute top-3.5 left-[40%] z-0">
                    <Upload
                      className=""
                      color={fileError ? "#ef4444" : "#1E313E"}
                    />
                    <label className={fileError ? "text-red-500" : ""}>
                      Browse file to upload
                    </label>
                  </div>
                </div>
              )}
            </>
          ) : (
            <div className="flex items-center justify-center w-full rounded-lg p-10 bg-transparent  border border-dashed border-input-border">
              <div className="flex w-3/5 m-auto items-center">
                <label className="text-[#333] text-xs grow">
                  File Upload Progress
                </label>
                <Progressbar progress={progress} />
              </div>
            </div>
          )}
        </>
      ) : (
        <div className="flex items-center justify-center w-full rounded-lg p-10 bg-transparent  border border-dashed border-green-500 bg-green-50">
          <div className="flex items-center text-green-500 text-center">
            <CheckCircleOutline className="text-md" />
            <label className="text-xs ml-2">File Upload Progress</label>
          </div>
        </div>
      )}
    </>
  );
}
