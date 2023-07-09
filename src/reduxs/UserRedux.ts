import { User } from "../models/userModel";
import { Role } from "../utils/constant";



interface initState {
  user: User;
  list: Array<User>;
  page: number;
  isLogin: boolean;
  userEmail: string;
  role: Role;
  id: string;
}

const initialState: initState = {
  list: [],
  page: 0,
  isLogin: false,
  userEmail: "",
  role: "",
  id: "fde8a680-93cc-4f80-9b5d-c70641a17127",
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
      // console.log("state user >> " + payload.map((e: any) => e));
      return { ...state, list: payload };

    case "FETCHUSERBYID":
      const userbyID = state.list.find((users) => users.id === payload);
      console.log("user by ID >> " + userbyID);
      return {
        ...state,
        user: userbyID,
      };

    case "LOGINUSER":
      return {
        ...state,
        isLogin: payload.isLogin,
        userEmail: payload.userEmail,
        role: payload.role
      };

    default:
      return state;
  }
};

export default UserReducer;
