export function get_month_offset(month: number, year: number): number {
    const date = new Date(year, month, 1);

    let firstDayOfWeek = date.getDay();

    firstDayOfWeek = (firstDayOfWeek + 6) % 7;

    return firstDayOfWeek;
}

export function get_total_days(year: number, month: number): number {
    const last_day_of_month = new Date(year, month, 0);

    return last_day_of_month.getDate();
}

export function get_month_name(month_number: number): string {
    const months = [
        'January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'
    ];

    // Check if the input is a valid month number
    if (month_number >= 0 && month_number < 12) {
        return months[month_number];
    } else {
        return 'Invalid month';
    }
}

export function get_month_number(month_name: string): number {
    const months: string[] = [
        'January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'
    ];

    return months.indexOf(month_name);
}

