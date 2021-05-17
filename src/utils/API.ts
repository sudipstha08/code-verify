import axios, {
  AxiosError,
  AxiosRequestConfig,
  AxiosResponse,
  AxiosInstance,
} from 'axios'

// axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
const API: AxiosInstance = axios.create({
  baseURL: '',
  // timeout: 1000,
  // headers: { 'X-Custom-Header': '12345' },
})

// API.CancelToken = axios.CancelToken
// API.isCancel = axios.isCancel

// Request interceptor
API.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    // Do something before request is sent
    return config
  },
  (error: AxiosError) => {
    // Do something with request error
    return Promise.reject(error)
  },
)

// Response Interceptor
API.interceptors.response.use(
  (response: AxiosResponse) => {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response
  },
  (error: AxiosError) => {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error)
  },
)

export { API }
