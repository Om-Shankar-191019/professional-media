import React, { useEffect, useState } from "react";
import HomeComponent from "../components/HomeComponent";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebaseConfig";
import { useNavigate } from "react-router-dom";
import Loader from "../components/common/Loader";

const Home = () => {
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  useEffect(() => {
    onAuthStateChanged(auth, (result) => {
      if (!result?.accessToken) navigate("/");
      else setLoading(false);
    });
  }, []);
  return <div>{loading ? <Loader /> : <HomeComponent />}</div>;
};

export default Home;
