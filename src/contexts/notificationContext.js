import React, { useState, createContext, useContext } from "react";

const CreateNotificationContext = createContext();

export const useNotificationContext = () =>
  useContext(CreateNotificationContext);

const NotificationContext = ({ children }) => {
  const [jobNotification, setJobNotification] = useState([]);

  return (
    <CreateNotificationContext.Provider
      value={{ jobNotification, setJobNotification }}
    >
      {children}
    </CreateNotificationContext.Provider>
  );
};

export default NotificationContext;
