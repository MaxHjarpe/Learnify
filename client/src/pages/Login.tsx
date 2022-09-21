import React from "react";
import { useSelector } from "react-redux";
import { LoginState } from "../redux/loginReducer";

const LoginPage = () => {

    const {visits} = useSelector((state: LoginState) => state);


    return <h1>Number of visits: {visits}</h1>
};

export default LoginPage;