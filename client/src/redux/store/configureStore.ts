import { configureStore } from "@reduxjs/toolkit";
import useSelection from "antd/lib/table/hooks/useSelection";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { loginSlice } from "../slice/loginSlice";


export const store = configureStore({
    reducer: {
        login: loginSlice.reducer,
    },
});

export type RootState =  ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;