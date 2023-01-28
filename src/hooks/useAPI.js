import { useEffect, useState } from "react";
import { useSWRConfig } from "swr";
import { toast } from "react-toastify";
import Helper from "@helpers/index";
import HttpReq from "@helpers/axios";

const http = new HttpReq();

export default function useAPI() {
  const [info, setInfo] = useState(null);
  const { mutate } = useSWRConfig();

  useEffect(() => {
    if (info?.url) {
      const fetchData = async ({
        method,
        url,
        payload,
        options = null,
        action = null,
        mutation = null,
      }) => {
        const toast_id = toast.loading("Processing request, please wait...");
        try {
          const data = await http[method](
            `${Helper.api}${url}`,
            payload,
            options
          );

          if (data?.error) throw new Error(data.message);
          else {
            
            mutate(mutation);


            if (toast_id)
              toast.update(toast_id, {
                render: data?.message ?? "Action successful",
                type: "success",
                isLoading: false,
                autoClose: true,
              });

            setInfo(null);
            if (action) action(data);
            return data;
          }
        } catch ({ message }) {
          console.log("Catch error handler", message);

          toast.update(toast_id, {
            render: message,
            type: "error",
            isLoading: false,
            autoClose: true,
          });
        }
      };

      fetchData(info);
    }
  }, [info, mutate]);

  // const makeRequest = (data) => alert('Make request fired')
  const makeRequest = (data) => setInfo(data);

  return { makeRequest };
}
