import axios from 'axios'

const access_token = localStorage.getItem('access_token')

const instance = axios.create({
  baseURL: process.env.REACT_APP_SUMMER_PROXY,
  headers: {
    'x-secret-key': process.env.REACT_APP_X_SECRET_KEY,
    'X-Api-App-Id': process.env.REACT_APP_CLIENT_SECRET,
    Authorization: `Bearer ${access_token}`,
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
  getVacancies(keyword: string, payment_from: number = 0, payment_to: number = 0) {
    return instance
      .get(
        `/2.0/vacancies/?published=1&keyword=${keyword}&payment_from=${payment_from}&payment_to=${payment_to}`
      )
      .then((data) => data.data.objects)
  },
}
