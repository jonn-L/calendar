export function get_month_offset(day: number, month: number, year: number): number {
    return new Date(year, month, day, 0, 0, 0, 0).getDay();
}

export function get_total_days(year: number, month: number): number {
    const last_day_of_month = new Date(year, month, 0);

    return last_day_of_month.getDate();
}

export function get_month_name(year: number, month: number): string {
    const date = new Date(year, month, 1);

    return date.toLocaleString('default', {month: 'long'});
}