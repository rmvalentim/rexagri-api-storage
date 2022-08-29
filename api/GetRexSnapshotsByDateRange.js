import axios from 'axios'
import authentication from '../api/GetRexAuthenticationToken.js'

export default async function getRexSnapshotsByDate({ beginDatetime, endDatetime }) {

    const BASE_URL = process.env.BASE_URL
    const URL = `${BASE_URL}/snapshots-by-day`
    const TOKEN = await authentication()

    const options = {
        method: 'GET',
        url: URL,
        params: { begin: beginDatetime, end: endDatetime },
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