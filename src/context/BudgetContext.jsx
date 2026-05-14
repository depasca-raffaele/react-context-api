import { createContext, useState } from 'react';

export const BudgetContext = createContext();

export function BudgetProvider({ children }) {
  const [maxPrice, setMaxPrice] = useState(null);

  return (
    <BudgetContext.Provider value={{ maxPrice, setMaxPrice }}>
      {children}
    </BudgetContext.Provider>
  );
}