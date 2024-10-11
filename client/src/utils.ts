export function formatDate(date: string): string {
    const objectDate = new Date(date);
    if (isNaN(objectDate.getUTCDate())) return "Unknown";
    return `${objectDate.getUTCDate()}/${objectDate.getUTCMonth() + 1}/${objectDate.getUTCFullYear()}`;
}