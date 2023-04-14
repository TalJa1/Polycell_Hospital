import { User } from "../models/userModel";

interface initState {
  user: User;
  page: number;
}

const initialState: initState = {
  page: 0,
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
    case "GETUSER":
      return { ...state, user: payload };

    default:
      return state;
  }
};

export default userReducer;
