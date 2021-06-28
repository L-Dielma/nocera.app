import { useState } from "react";
import React from "react";
import LoadScreen from "../Loadscreen";
import CardList from "../CardList";

export const Home = () => {
  const [loading, setLoading] = useState(true);

  setTimeout(() => {
    setLoading(false);
  }, 3000);

  if (loading) return <LoadScreen />;
  return <div></div>;
};
