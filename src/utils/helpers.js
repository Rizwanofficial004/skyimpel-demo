import { toast } from 'react-toastify'
import CryptoJS, { enc }  from 'crypto-js'

export const setLocalStorage = (key, value) => {
  const encrypted = value && CryptoJS.DES.encrypt(JSON.stringify(value), process.env.ENCRYPTION_SECRET).toString()
  localStorage.setItem(key, encrypted)
}

export const getLocalStorage = (key) => {
  if (typeof window === 'undefined') {
    return null;
  }
  const getData = localStorage.getItem(key);
  const decrypted = getData && CryptoJS.DES.decrypt(getData, process.env.ENCRYPTION_SECRET).toString(enc.Utf8);
  return decrypted;
};

export const tokens = () => {
  const tokens = getLocalStorage('tokens')
  const token = tokens && JSON.parse(tokens || '')
  const refreshToken = token?.refreshToken
  const accessToken = token?.accessToken
  const getRefreshToken = () => {
    return refreshToken
  }

  const getAccessToken = () => {
    return accessToken
  }
  return {
    getRefreshToken,
    getAccessToken
  };
}

export const showToast = (type, message) => {
  switch (type) {
    case 'success':
      toast.success(message, {
        autoClose: 5000
      })
      break;
    case 'error':
      toast.error(message, {
        autoClose: 5000
      })
      break
    default:
      toast.info(message, {
      });
      break
  }
}