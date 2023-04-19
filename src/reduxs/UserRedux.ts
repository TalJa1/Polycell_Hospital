import { User } from "../models/userModel";

interface initState {
  user: User;
  list: Array<User>;
  page: number;
}

const initialState: initState = {
  list: [],
  page: 0,
  user: {
    id: 0,
    name: "",
    username: "",
    email: "",
    address: {
      street: "",
      suite: "",
      city: "",
      zipcode: "",
      geo: {
        lat: "",
        lng: "",
      },
    },
    phone: "",
    website: "",
    company: {
      name: "",
      catchPhrase: "",
      bs: "",
    },
  },
};

interface Props {
  type: string;
  payload: any;
}

const UserReducer = (state = initialState, { type, payload }: Props) => {
  switch (type) {
    case "FETCHUSER":
      // console.log("state >> " + payload.map((e: any) => e));
      return { ...state, list: payload };

    case "FETCHUSERBYID":
      const userbyID = state.list.find((users) => users.id === payload);
      console.log("user by ID >> " + userbyID);
      return {
        ...state,
        user: userbyID,
      };

    default:
      return state;
  }
};

export default UserReducer;
