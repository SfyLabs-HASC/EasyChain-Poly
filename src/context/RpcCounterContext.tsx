import React, { createContext, useState, useContext, ReactNode, useCallback } from 'react';

// Definiamo cosa conterrà il nostro contesto
interface RpcCounterContextType {
  rpcCount: number;
  incrementRpcCount: () => void;
  resetRpcCount: () => void;
}

// Creiamo il contesto con un valore di default
const RpcCounterContext = createContext<RpcCounterContextType | undefined>(undefined);

// Creiamo il "Provider", il componente che fornirà i dati a tutta l'app
export const RpcCounterProvider = ({ children }: { children: ReactNode }) => {
  const [rpcCount, setRpcCount] = useState(0);

  // Usiamo useCallback per assicurarci che la funzione non cambi ad ogni render
  const incrementRpcCount = useCallback(() => {
    setRpcCount(prevCount => prevCount + 1);
  }, []);

  const resetRpcCount = useCallback(() => {
    setRpcCount(0);
  }, []);

  const value = { rpcCount, incrementRpcCount, resetRpcCount };

  return (
    <RpcCounterContext.Provider value={value}>
      {children}
    </RpcCounterContext.Provider>
  );
};

// Creiamo un hook personalizzato per usare facilmente il nostro contesto
export const useRpcCounter = () => {
  const context = useContext(RpcCounterContext);
  if (context === undefined) {
    throw new Error('useRpcCounter must be used within a RpcCounterProvider');
  }
  return context;
};
