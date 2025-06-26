import React from 'react';
import { useRpcCounter } from '../context/RpcCounterContext';

const pageStyles: React.CSSProperties = {
  padding: '2rem',
  fontFamily: 'sans-serif',
  textAlign: 'center',
  color: 'white',
  backgroundColor: '#1a1a1a',
  minHeight: '100vh',
};

const counterStyles: React.CSSProperties = {
  fontSize: '5rem',
  fontWeight: 'bold',
  color: '#3b82f6',
  margin: '1rem 0',
};

const buttonStyles: React.CSSProperties = {
  padding: '0.75rem 1.5rem',
  fontSize: '1rem',
  backgroundColor: '#3b82f6',
  color: 'white',
  border: 'none',
  borderRadius: '8px',
  cursor: 'pointer',
};

export default function CounterPage() {
  const { rpcCount, resetRpcCount } = useRpcCounter();

  return (
    <div style={pageStyles}>
      <h1>Contatore Chiamate RPC</h1>
      <p>Questo contatore traccia tutte le richieste di lettura on-chain (RPC Read Calls) effettuate dall'applicazione.</p>
      <div style={counterStyles}>
        {rpcCount}
      </div>
      <button style={buttonStyles} onClick={resetRpcCount}>
        Azzera Contatore
      </button>
    </div>
  );
}
