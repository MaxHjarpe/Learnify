import React, { useEffect } from "react";
import { increment } from "../redux/slice/loginSlice";
import { useAppDispatch, useAppSelector } from "../redux/store/configureStore";

const LoginPage = () => {
  const { visits } = useAppSelector((state) => state.login);

  const dispatch = useAppDispatch();


  return (
    <>
      <h1>Number of visits: {visits}</h1>
      <button onClick={() => dispatch(increment(5))}>increment</button>
    </>
  );
};

export default LoginPage;
