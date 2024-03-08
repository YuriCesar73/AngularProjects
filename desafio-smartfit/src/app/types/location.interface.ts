import { Schedule } from "./schedule.interface";

export interface Location{
    id: number,
    title: string,
    content: "\n<p>Av. Dom Severino, 1733 &#8211; Fátima<br>Teresina, PI</p>\n",
    opened: boolean,
    mask: string,
    towel: string,
    fountain: string,
    locker_room: string,
    schedules: Schedule[]
}