export default function convertStringToDate(dateString) {
    const year = dateString.substring(0, 4)
    const month = dateString.substring(4, 6)
    const day = dateString.substring(6, 8)
    return new Date(year, month - 1, day, 0, 0, 0)
}