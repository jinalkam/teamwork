import axios from 'axios'

const DEFAULT_ERROR_MESSAGE = 'Something went wrong'

// set headers
axios.defaults.headers.common.Accept = 'application/json'
axios.defaults.headers.common['Content-Type'] = 'application/json'


// get header from response
axios.interceptors.response.use(
  response => {
    return response
  },
  error => {
    // show 'error' toast
    const message = (error.response && error.response.data.message) || DEFAULT_ERROR_MESSAGE
    alert(message)
  }
)
