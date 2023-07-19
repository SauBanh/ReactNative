export function getFormattedDate(date) {
    const day = Number(date.getDate());
    const month = Number(date.getMonth() + 1);
    // const year = date.getFullYear();
    function padZero(number) {
        if (number < 10) {
            number = "0" + number;
        }
        return number;
    }
    return `${padZero(day)} - ${padZero(month)} - ${date.getFullYear()}`;
    // return `${date.getDate()} - ${date.getMonth() + 1} - ${date.getFullYear()}`;
}

export function getDateMinusDays(date, days) {
    return new Date(date.getFullYear(), date.getMonth(), date.getDate() - days);
}
