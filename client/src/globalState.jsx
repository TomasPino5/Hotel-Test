import { createContext, useContext, useState } from 'react';
import moment from 'moment';

const GlobalStateContext = createContext();

export const useGlobalState = () => {
  const context = useContext(GlobalStateContext);
  if (!context) {
    throw new Error('useGlobalState must be used within a GlobalStateProvider');
  }
  return context;
};

export const GlobalStateProvider = ({ children }) => {
  const [selectedDates, setSelectedDates] = useState([new Date(), moment().add(1, 'days').toDate()]);

  const setGlobalSelectedDates = (dates) => {
    setSelectedDates(dates);
  };

  return (
    <GlobalStateContext.Provider value={{ selectedDates, setGlobalSelectedDates }}>
      {children}
    </GlobalStateContext.Provider>
  );
};
