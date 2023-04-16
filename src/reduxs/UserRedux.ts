import { User } from "../models/userModel";

interface initState {
  user: User;
  page: number;
  list: Array<User>;
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

const userReducer = (state = initialState, { type, payload }: Props) => {
  switch (type) {
    case "GETUSER":
      return { ...state, user: payload };

    default:
      return state;
  }
};

export default userReducer;
