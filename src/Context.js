import React, { createContext, useState } from 'react';

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [source, setSource] = useState('');
  const [destination, setDestination] = useState('');
  const [percentage, setPercentage] = useState('');

  console.log('Source:', source);

  return (
    <DataContext.Provider value={{ source, setSource, destination, setDestination, percentage, setPercentage }}>

      {children}
    </DataContext.Provider>
  );
};
