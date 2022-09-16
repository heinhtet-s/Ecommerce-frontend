
import { useMutation } from "@tanstack/react-query";
import { request } from "./Axios-utilies";
export default function usePostQuery(url, others = {}, file = false) {

    let key = ""
    if (typeof window !== 'undefined') {
        key = localStorage.getItem("l-token");
    };
    let headers = ""
    if (file) {
        headers = { Accept: "application/json", "Content-Type": "multipart/form-data", authorization: key };
    } else {
        headers = { Accept: "application/json", authorization: key };
    }
    return useMutation(async ([data, pathUrl = ""]) => {
        const response = await request({ url: `${url}${pathUrl}`, method: "post", data, headers });
        if (response?.data?.status !== "success") {
            throw new Error(response);
        }
        return response;
    }, {
        ...others,
    });

}