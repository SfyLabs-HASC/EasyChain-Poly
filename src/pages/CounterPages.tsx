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

const containerStyles: React.CSSProperties = {
    maxWidth: '800px',
    margin: '0 auto',
};

const counterStyles: React.CSSProperties = {
  fontSize: '5rem',
  fontWeight: 'bold',
  color: '#3b82f6',
  margin: '2rem 0',
  lineHeight: 1,
};

const buttonStyles: React.CSSProperties = {
  padding: '0.75rem 1.5rem',
  fontSize: '1rem',
  backgroundColor: '#3b82f6',
  color: 'white',
  border: 'none',
  borderRadius: '8px',
  cursor: 'pointer',
  marginTop: '1rem',
};

export default function CounterPage() {
  const { rpcCount, resetRpcCount } = useRpcCounter();

  return (
    <div style={pageStyles}>
      <div style={containerStyles}>
        <h1>Contatore Chiamate RPC</h1>
        <p>Questo contatore traccia tutte le richieste di lettura on-chain (RPC Read Calls) effettuate dall'applicazione da quando è stata caricata o dall'ultimo reset.</p>
        <p>È uno strumento utile per capire quante richieste vengono fatte alla blockchain durante la navigazione e l'uso delle varie funzionalità.</p>
        
        <div style={counterStyles}>
          {rpcCount}
        </div>

        <button style={buttonStyles} onClick={resetRpcCount}>
          Azzera Contatore
        </button>
      </div>
    </div>
  );
}
