// Update with your desired constants

import { TraineeAction } from "../actions/traineeAction";
import { Trainee } from "../models/traineeModel";
import {
  FETCH_TRAINEES_ERROR,
  FETCH_TRAINEES_REQUEST,
  FETCH_TRAINEES_SUCCESS,
  FETCH_TRAINEES_TOTAL_REQUEST,
} from "../utils/constant";

interface TraineeState {
  trainees: Trainee[];
  allTrainees: Trainee[];
  total: number;
  totalpage: number;
  loading: boolean;
  error: string | null;
}

const initialState: TraineeState = {
  trainees: [],
  allTrainees: [],
  totalpage: 0,
  total: 0,
  loading: false,
  error: null,
};

const traineeReducer = (
  state = initialState,
  action: TraineeAction
): TraineeState => {
  switch (action.type) {
    case FETCH_TRAINEES_TOTAL_REQUEST:
      return {
        ...state,
        total: action.payload,
      };
    case FETCH_TRAINEES_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case FETCH_TRAINEES_SUCCESS:
      const combinedTrainees = [...state.allTrainees, ...action.payload];
      const uniqueTrainees = combinedTrainees.filter(
        (trainee, index, self) =>
          self.findIndex((t) => t.id === trainee.id) === index
      );

      return {
        ...state,
        trainees: [...action.payload],
        allTrainees: uniqueTrainees,
        loading: false,
        error: null,
      };

    case FETCH_TRAINEES_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default traineeReducer;
