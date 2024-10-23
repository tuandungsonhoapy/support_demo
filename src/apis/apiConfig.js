import axios from 'axios'
import { API_ROOT } from '../utils/constances'

// Tạo một instance của axios
const instance = axios.create({
  baseURL: API_ROOT,
  timeout: 10000
})

// Interceptor cho request
instance.interceptors.request.use(
  (config) => {
    // Thêm token vào header nếu cần
    const token = localStorage.getItem('accessToken')
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`
    }

    return config
  },
  (error) => {
    // Xử lý lỗi request
    return Promise.reject(error)
  }
)

// Interceptor cho response
instance.interceptors.response.use(
  (response) => {
    // Xử lý response thành công

    return response
  },
  (error) => {
    // Xử lý lỗi response

    if (error.response && error.response.status === 401) {
      // Xử lý lỗi 401 (Unauthorized)
      // Ví dụ: Redirect đến trang đăng nhập
    }
    return Promise.reject(error)
  }
)

export default instance
