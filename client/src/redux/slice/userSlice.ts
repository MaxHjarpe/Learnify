import { createSlice } from "@reduxjs/toolkit";
import { User } from "../../models/user";

interface UserState {
  user: User | null;
}

const initialState: UserState = {
  user: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
});
