import { createContext, useState } from 'react';

export const BudgetContext = createContext();

export function BudgetProvider({ children }) {
  const [budgetMode, setBudgetMode] = useState(false);

  return (
    <BudgetContext.Provider value={{ budgetMode, setBudgetMode }}>
      {children}
    </BudgetContext.Provider>
  );
}