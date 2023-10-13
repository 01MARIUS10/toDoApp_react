export function getCurrentDateTime() {
    const now = new Date();
    
    let Obj = {
        year : now.getFullYear().toString().slice(-2),
        month : (now.getMonth() + 1).toString().padStart(2, '0'),
        day : now.getDate().toString().padStart(2, '0'),
        hours : now.getHours().toString().padStart(2, '0'),
        minutes : now.getMinutes().toString().padStart(2, '0')
    }
    const datetime = `${Obj.day}.${Obj.month}.${Obj.year} ${Obj.hours}:${Obj.minutes}`

    return datetime;
}
