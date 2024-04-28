import axios from './api.services'

export const signUp = async (bodyObject) => {
  return await axios.post('/auth/sign-up', bodyObject);
}

export const signIn = async (credentials) => {
  return await axios.post('/auth/sign-in', credentials);
}
