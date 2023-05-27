import React, { useEffect, useState } from "react";
import LoginComponent from "../components/LoginComponent";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebaseConfig";
import { useNavigate } from "react-router-dom";
import Loader from "../components/common/Loader";

const Login = () => {
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  useEffect(() => {
    onAuthStateChanged(auth, (result) => {
      if (result?.accessToken) navigate("/home");
      else setLoading(false);
    });
  }, []);
  return loading ? <Loader /> : <LoginComponent />;
};

export default Login;
