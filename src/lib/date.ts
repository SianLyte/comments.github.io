import { parseISO, format } from "date-fns";

export function subtractHours(date: Date, numOfHours: number) {
    const dateCopy = new Date(date.getTime());

    dateCopy.setHours(dateCopy.getHours() - numOfHours);

    return dateCopy;
}

const Decline = (count: number, name: string) => {
    if (name == "час") {
        if ([11, 12, 13, 14, 15, 16, 17, 18, 19].some((value) => value == count % 100)) {
            return "часов";
        }
        if (count % 10 == 1) {
            return "час"
        }
        if ([2, 3, 4].some((value) => value == count % 10)) {
            return "часа"
        }
        if ([5, 6, 7, 8, 9, 0].some((value) => value == count % 10)) {
            return "часов";
        }
    }
    if (name == "секунда") {
        if ([11, 12, 13, 14, 15, 16, 17, 18, 19].some((value) => value == count % 100)) {
            return "секунд";
        }
        if ([1].some((value) => value == count % 10)) {
            return "секунда"
        }
        if ([2, 3, 4].some((value) => value == count % 10)) {
            return "секунды"
        }
        if ([5, 6, 7, 8, 9, 0].some((value) => value == count % 10)) {
            return "секунд";
        }
    }
};


export const timeSince = (date: string) => {

    const periods = [
        { time: 31536000, name: 'год' },
        { time: 2592000, name: 'месяц' },
        { time: 86400, name: 'день' },
        { time: 3600, name: 'час' },
        { time: 60, name: 'минута' },
        { time: 1, name: 'секунда' }
    ];

    let elapsed = Math.floor((Date.now() - Date.parse(date)) / 1000);
    for (let { time, name } of periods) {
        if (elapsed >= time) {
            let count = Math.floor(elapsed / time);
            if (elapsed >= 31536000) {
                return format(parseISO(date), "dd.MM.yyyy, HH:mm:ss");
            }
            return `${count} ${count > 1 ? Decline(count, name) : ''} назад`;
        }
    }
}
