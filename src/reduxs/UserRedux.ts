import { Address, Company } from "./../models/userModel";
import { User } from "../models/userModel";

interface initState {
  user: User;
}

const initialState: initState = {
  user: {
    id: 0,
    name: "",
    username: "string",
    email: "string",
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
    phone: "string",
    website: "string",
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

const userReducer = (state = initialState, { type, payload }: Props) => {
  switch (type) {
    case "GET":
      return { ...state, ...payload };

    default:
      return state;
  }
};

export default userReducer;
