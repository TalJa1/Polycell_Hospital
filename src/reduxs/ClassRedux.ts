import { Class } from "../models/classManagementModel";

interface initState {
  class: Class;
  list: Array<Class>;
  page: number;
  totalpage: number;
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
  },
};

interface Props {
  type: string;
  payload: any;
}

const ClassReducer = (state = initialState, { type, payload }: Props) => {
  switch (type) {
    case "GETCLASS":
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

    default:
      return state;
  }
};

export default ClassReducer;
