import { RangeValue } from "rc-picker/lib/interface";
import { Dayjs } from "dayjs";

export interface GeneralSchedule {
    id: number;
    time: RangeValue<Dayjs>;
    dayOfWeek: string | null;
  }

