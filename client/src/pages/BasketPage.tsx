import React, { useEffect, useState } from "react";
import agent from "../actions/agent";
import { Basket } from "../models/Basket";

const BasketPage = () => {
  const [items, setItems] = useState<Basket>();

  useEffect(() => {
    agent.Baskets.get().then((response) => {
      setItems(response);
    });
  }, []);

  return (
    <>
      <h1>{items?.clientId}</h1>
    </>
  );
};

export default BasketPage;
