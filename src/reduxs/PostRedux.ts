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

const PostReducer = (state = initialState, { type, payload }: Props) => {
  switch (type) {
    case "GETPOST":
      return { ...state, list: payload };

    case "":
      return {
        ...state,
        totalpage: payload,
      };

    default:
      return state;
  }
};

export default PostReducer;
