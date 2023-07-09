import { Class } from "../models/classManagementModel";
import { Cycle, Program, Trainer } from "../models/programAddModel";
import { Trainees } from "../models/traineeModel";
import {
  CREATE_CLASS_REQUEST,
  CREATE_CLASS_SUCCESS,
  FETCH_CLASS_BY_PROGRAMID,
} from "../utils/constant";

interface initState {
  class: Class;
  list: Array<Class>;
  page: number;
  totalpage: number;
  loading: boolean;
}

const initialState: initState = {
  totalpage: 0,
  page: 1,
  list: [],
  class: {
    id: "",
    name: "",
    code: "",
    generalSchedule: "",
    createdBy: "",
    createdDate: new Date(),
    status: "",
    programCode: "",
    minQuantity: 0,
    maxQuantity: 0,
    programId: "",
    departmentId: "",
    trainerId: "",
    cycleId: "",
    startDate: new Date(),
    endDate: new Date(),
    program: {} as Program,
    cycle: {} as Cycle,
    trainer: {} as Trainer,
    trainees: [] as Trainees[],
    department: {
      id: "",
      name: "",
      code: "",
    },
  },
  loading: false,
};

interface Props {
  type: string;
  payload: any;
}

const ClassReducer = (state = initialState, { type, payload }: Props) => {
  switch (type) {
    case "GETCLASS":
      // console.log("payload >> ", payload);
      return { ...state, list: payload };

    case "CLASS_DETAIL":
      return { ...state, class: payload };

    case "TOTAL_PAGE":
      if (payload % 2 !== 0) {
        payload = Math.floor(payload) + 1;
      }
      return {
        ...state,
        totalpage: payload,
      };

    case "PAGING":
      return {
        ...state,
        page: payload,
      };
    //
    case CREATE_CLASS_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case CREATE_CLASS_SUCCESS:
      return {
        ...state,
        class: payload,
      };
    case FETCH_CLASS_BY_PROGRAMID:
      return {
        ...state,
        list: payload,
      };

    default:
      return state;
  }
};

export default ClassReducer;
