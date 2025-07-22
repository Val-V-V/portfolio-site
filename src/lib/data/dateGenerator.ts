export default function dateGenerator(startDate: Date, endDate: Date): string[] {
    const dates: string[] = [];
    const current = new Date(startDate);

    while (current <= endDate) {
        const date = current.toISOString().split('T')[0]
        dates.push(date)
        current.setDate(current.getDate() + 1)
    }

    return dates;
}