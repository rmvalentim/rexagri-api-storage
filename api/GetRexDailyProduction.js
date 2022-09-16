import axios from 'axios'
import authentication from './GetRexAuthenticationToken.js'

export default async function getRexDailyProduction(yesterday) {

    const URL = 'https://open-api.rexagri.com/api/v1/reports/daily-production'
    const TOKEN = await authentication()

    const options = {
        method: 'GET',
        url: URL,
        params: { begin: yesterday, end: yesterday },
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${TOKEN}`
        }
    }

    return axios.request(options)
        .then((response) => {
            return response.data
        }).catch((error) => {
            throw new Error('Error on fetch data')
        })

}

