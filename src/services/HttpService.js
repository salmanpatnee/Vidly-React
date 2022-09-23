import axios from "axios";
import { toast } from "react-toastify";
import logger from "./LogService";

axios.interceptors.response.use(null, (error) => {
  const expectedError =
    error.response &&
    error.response.status >= 400 &&
    error.response.status < 500;

  if (!expectedError) {
    toast.error("An unexpected error occurred.");
    logger.log(error);
  }

  return Promise.reject(error);
});

const methods = {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  delete: axios.delete,
};

export default methods;
