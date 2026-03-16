/**
 * Formats a number as a currency string.
 * @param value - The number to format
 * @param currency - The currency code (default: 'USD')
 * @param locale - The locale to use (default: 'en-US')
 * @returns The formatted currency string
 */
export const formatCurrency = (
    value: number,
    currency: string = 'USD',
    locale: string = 'en-US'
): string => {
    return new Intl.NumberFormat(locale, {
        style: 'currency',
        currency: currency,
    }).format(value);
};

/**
 * Formats a date or timestamp string/number into a readable format.
 * @param date - The Date object, string, or number to format
 * @param locale - The locale to use (default: 'en-US')
 * @returns The formatted date string
 */
export const formatDate = (
    date: Date | string | number,
    locale: string = 'en-US'
): string => {
    const d = new Date(date);
    return new Intl.DateTimeFormat(locale, {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
    }).format(d);
};
