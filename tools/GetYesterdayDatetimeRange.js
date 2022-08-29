export default function getYesterdayDateRange() {

    const today = new Date()
    const yesterday = new Date()
    yesterday.setDate(today.getDate() - 1)
    const day = ('0' + yesterday.getDate()).slice(-2)
    const month = ('0' + (yesterday.getMonth() + 1)).slice(-2)
    const year = yesterday.getFullYear()
    const initialHour = '00:00:00'
    const finalHour = '23:59:59'

    const range = {
        beginDatetime: `${year}-${month}-${day}T${initialHour}`,
        endDatetime: `${year}-${month}-${day}T${finalHour}`,
    }

    return range
}