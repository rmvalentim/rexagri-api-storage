import axios from 'axios'
import log from 'log-to-file'

export default async function getRexAuthenticationToken() {

    const URL = 'https://open-api.rexagri.com/api/v1/oauth/token'

    const options = {
        method: 'POST',
        url: URL,
        data: {
            email: process.env.API_USER,
            password: process.env.API_PASSWORD
        }
    }

    return axios.request(options)
        .then((response) => {
            log('getRexAuthenticationToken - Authentication performed successfully')
            return response.data.token
        }).catch((error) => {
            log(`Authentication error: ${error}`)
        })
}