import axios from 'axios';
import Helper from '.';


export default class HttpReq {

  constructor() {

    this.http = axios.create({
      baseURL: Helper.AppUrl
    });

    this.http.defaults.withCredentials = true;
    this.http.interceptors.request.use(
      function (config) {
        // console.log('Axios configuration information', config)
        return config
      },
      function (error) {
        return error.response;
      }
    );

    // This intercepts response before it is returned
    // attached required parameters to the request
    this.http.interceptors.response.use(
      function (response) {
        return response.data;
      },
      function (error) {
        console.log("axios error info", error)
        return error.message
      }
    );
  }

  post = async (url, payload, options = null) => await this.http.post(url, payload, options);

  // patch = async (url, payload, options = null) => console.log('options provided', options);
  patch = async (url, payload, options = null) => await this.http.patch(url, payload, options);

  get = async (url, options = null) => await this.http.get(url, options);

  delete = async (url) => await this.http.delete(url);
}
