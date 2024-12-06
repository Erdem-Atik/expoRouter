import React, { createContext, useState } from "react";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [user, setUser] = useState({
    username: "manager1",
    password: "password123",
    loggedIn: false,
  });

  const [buildings, setBuildings] = useState([
    {
      id: 1,
      name: "Sunrise Apartments",
      address: "123 Main Street",
      flats: 10,
      residents: [
        {
          name: "Alice Johnson",
          flat: 101,
          paymentStatus: "Paid",
          expenses: 120,
        },
        { name: "Bob Smith", flat: 102, paymentStatus: "Due", expenses: 80 },
      ],
    },
    {
      id: 2,
      name: "Green Valley",
      address: "456 Park Avenue",
      flats: 15,
      residents: [
        {
          name: "Chris Brown",
          flat: 201,
          paymentStatus: "Paid",
          expenses: 100,
        },
        { name: "Dana White", flat: 202, paymentStatus: "Due", expenses: 50 },
      ],
    },
    {
      id: 3,
      name: "Ocean View Towers",
      address: "789 Coastal Road",
      flats: 20,
      residents: [
        { name: "Eve Black", flat: 301, paymentStatus: "Paid", expenses: 200 },
        { name: "Frank Green", flat: 302, paymentStatus: "Due", expenses: 150 },
      ],
    },
  ]);

  return (
    <AppContext.Provider value={{ user, setUser, buildings, setBuildings }}>
      {children}
    </AppContext.Provider>
  );
};
