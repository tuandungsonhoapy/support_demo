import instance from './apiConfig'

const registerAPI = async (data) => {
  console.log('🚀 ~ loginAPI ~ data:', data)
  const response = await instance.post('/register', data)

  return response.data
}

const loginAPI = async (data) => {
  console.log('🚀 ~ loginAPI ~ data:', data)

  const response = await instance.post('/auth/login', data)

  return response.data
}

export const authAPI = {
  loginAPI,
  registerAPI
}

// * CRUD
// * Create => method: POST
// * Read => method: GET
// * Update => method: PUT
// * Delete => method: DELETE
