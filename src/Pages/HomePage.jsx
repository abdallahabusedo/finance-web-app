import React from "react";
import HomeComponents from "../components/HomePage/HomeComponents";

const HomePage = () => {
  React.useEffect(() => {
    let user = localStorage.getItem("token");
    if (!user) window.location.replace("/login");
  }, []);
  return <HomeComponents />;
};

export default HomePage;
