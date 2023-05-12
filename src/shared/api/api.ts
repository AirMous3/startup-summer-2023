import axios from 'axios'

const instance = axios.create({
  baseURL: process.env.REACT_APP_SUMMER_PROXY,
  headers: {
    'x-secret-key': process.env.REACT_APP_X_SECRET_KEY,
  },
})

interface LoginInterface {
  access_token: string
  refresh_token: string
  ttl: number
  expires_in: number
  token_type: string
}

export const api = {
  login() {
    return instance
      .get<LoginInterface>(
        `/2.0/oauth2/password/?login=${process.env.REACT_APP_CLIENT_LOGIN}&password=${process.env.REACT_APP_CLIENT_PASSWORD}&client_id=${process.env.REACT_APP_CLIENT_ID}&client_secret=${process.env.REACT_APP_CLIENT_SECRET}`
      )
      .then((data) => data.data)
  },
  getCatalogues() {
    return instance.get(`/2.0/catalogues/`).then((data) => data.data)
  },
}
