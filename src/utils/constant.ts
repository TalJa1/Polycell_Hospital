import { RangeValue } from "rc-picker/lib/interface";
import { Dayjs } from "dayjs";

export const FETCH_PROGRAMS_REQUEST = 'FETCH_PROGRAMS_REQUEST';
export const FETCH_PROGRAMS_SUCCESS = 'FETCH_PROGRAMS_SUCCESS';
export const FETCH_PROGRAMS_FAILURE = 'FETCH_PROGRAMS_FAILURE';
// 
export const CREATE_CLASS_REQUEST = 'FETCH_CLASS_REQUEST';
export const CREATE_CLASS_SUCCESS = 'FETCH_CLASS_SUCCESS';


export interface GeneralSchedule {
    id: number;
    time: RangeValue<Dayjs>;
    dayOfWeek: string | null;
  }

