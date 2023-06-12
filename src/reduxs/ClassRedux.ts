import { Post } from "../models/postModel";

interface initState {
  post: Post;
  list: Array<Post>;
  page: number;
  totalpage: number;
}

const initialState: initState = {
  totalpage: 0,
  page: 1,
  list: [],
  post: {
    userId: 0,
    id: 0,
    title: "",
    body: "",
  },
};

interface Props {
  type: string;
  payload: any;
}

const ClassReducer = (state = initialState, { type, payload }: Props) => {
  switch (type) {
    case "GETPOST":
      return { ...state, list: payload };

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
