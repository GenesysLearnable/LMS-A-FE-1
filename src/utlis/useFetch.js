import axios from "axios";

const useFetch = () => {
  const endPoint = import.meta.env.VITE_SIGNUP_ENDPOINT;
  // const endPoint = import.meta.env.VITE_LOCALSERVER_URL

  const fetchData = async (method, uri = "", data = null) => {
    try {
      let response;
      switch (method) {
        case "GET":
          response = await axios.get(`${endPoint}/${uri}`);
          break;
        case "POST":
          response = await axios.post(`${endPoint}/${uri}`, data);
          break;
        case "PUT":
          response = await axios.put(`${endPoint}/${uri}`, data);
          break;
        case "DELETE":
          response = await axios.delete(`${endPoint}/${uri}`, data);
          break;
        default:
          throw new Error("Invalid HTTP method");
      }
      console.log(`--- Endpoint hit ---`);
      return response.data;
    } catch (error) {
      throw new Error(error.message);
    }
  };

  return {
    get: async (uri) => fetchData("GET", uri),
    post: async (uri, data) => fetchData("POST", uri, data),
    put: async (uri, data) => fetchData("PUT", uri, data),
    del: async (uri, data) => fetchData("DELETE", uri, data),
  };
};

export default useFetch;
