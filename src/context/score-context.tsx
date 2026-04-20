import React, { createContext, useContext, useState } from 'react';

type ScoreContextValue = {
  globalScore: number | null;
  setGlobalScore: (score: number | null) => void;
};

const ScoreContext = createContext<ScoreContextValue | undefined>(undefined);

export function ScoreProvider({ children }: { children: React.ReactNode }) {
  const [globalScore, setGlobalScore] = useState<number | null>(null);

  return (
    <ScoreContext.Provider value={{ globalScore, setGlobalScore }}>
      {children}
    </ScoreContext.Provider>
  );
}

export function useScore() {
  const value = useContext(ScoreContext);

  if (!value) {
    throw new Error('useScore must be used within a ScoreProvider');
  }

  return value;
}