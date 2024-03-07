import { MONTHS_SHORT } from './Constants';   

export function getMonthAndDate(d: any) {
    d = new Date(parseInt(d)).getTime();
    return `${MONTHS_SHORT[d.getMonth()]} ${d.getDate()}`;
}

export function turnDate(d: any) {
    d = new Date(d); 
    const now = new Date();
    if(now.getTime() - d < 86400000 && now.getDate() == d.getDate()) return `today at ${(d.getHours()>9?d.getHours():'0'+d.getHours())+':'+(d.getMinutes()>9?d.getMinutes():'0'+d.getMinutes())}`;
    return `${d.getDate()+' '+MONTHS_SHORT[d.getMonth()]+' at '+(d.getHours()>9?d.getHours():'0'+d.getHours())+':'+(d.getMinutes()>9?d.getMinutes():'0'+d.getMinutes())}`;
}

export function getOnlineStatus(d: any) {
    d = new Date(d).getTime()
    const now = new Date();
    return ((now.getTime()-d)<80000)?'active now':
    ((now.getTime()-d)<3600000)?`last seen ${Math.floor((now.getTime()-d)/60000)} minute${((now.getTime()-d)/60000)<=2?'':'s'} ago`:
    ((now.getTime()-d)<86400000)?`last seen ${Math.floor((now.getTime()-d)/3600000)} hour${((now.getTime()-d)/3600000)<=2?'':'s'} ago`:
    `last seen ${turnDate(d)}`;
}

export function hoursAndMinutes(d: any) {
    d = new Date(d);
    return `${d.getHours()>9?d.getHours():'0'+d.getHours()}:${d.getMinutes()>9?d.getMinutes():'0'+d.getMinutes()}`;
}